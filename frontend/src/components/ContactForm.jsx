import { useEffect, useRef, useState } from 'react';
import { Send, LoaderCircle, CircleCheck, CircleAlert } from 'lucide-react';
import { submitContact } from '../api/contactApi';
import { courses } from '../data/courses';
import '../styles/ContactForm.css';

const otherInterests = [
  { value: 'Young & Techy (next cohort)', label: 'Young & Techy (next cohort)' },
  { value: 'Partnership or sponsorship', label: 'Partnership or sponsorship' },
  { value: 'Something else', label: 'Something else' },
];

// Turn a ?course=<slug> from an "Enrol" link into the matching option.
const interestFromSlug = (slug) => {
  if (!slug) return '';
  if (slug === 'young-and-techy') return otherInterests[0].value;
  return courses.find((c) => c.slug === slug)?.title ?? '';
};

const empty = { name: '', email: '', course: '', message: '' };

const NETWORK_ERROR = 'We couldn’t send your message. Check your connection and try again.';

// Use the server's own explanation when it gives one (a field that needs
// fixing, or too many messages), otherwise a general network message.
const messageFor = (error) => {
  const body = error?.response?.data;
  const firstField = body?.fields && Object.values(body.fields)[0];
  return firstField || body?.error || NETWORK_ERROR;
};

const ContactForm = ({ initialCourse }) => {
  const [form, setForm] = useState(() => ({ ...empty, course: interestFromSlug(initialCourse) }));
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('');
  const successRef = useRef(null);
  const errorRef = useRef(null);
  const nameRef = useRef(null);
  const focusNameNext = useRef(false);

  // Move focus to whatever just appeared: the thank-you heading (so it is
  // read out and scrolled into view), the error message, or back to the
  // first field after "Send another message".
  useEffect(() => {
    if (status === 'sent' && successRef.current) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      successRef.current.focus({ preventScroll: true });
      successRef.current.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
    }
    if (status === 'error') errorRef.current?.focus();
    if (status === 'idle' && focusNameNext.current) {
      focusNameNext.current = false;
      nameRef.current?.focus();
    }
  }, [status]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await submitContact({ ...form, contact_check: e.currentTarget.elements.namedItem('contact_check').value });
      setStatus('sent');
      setForm(empty);
    } catch (error) {
      setErrorMessage(messageFor(error));
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="form-card form-success">
        <CircleCheck aria-hidden="true" />
        <h2 ref={successRef} tabIndex={-1} className="form-success-title">
          Thanks, your message is in
        </h2>
        <p>We’ll reply by email within two working days. Keep an eye on your inbox (and spam folder).</p>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            focusNameNext.current = true;
            setStatus('idle');
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form className="form-card contact-form" onSubmit={handleSubmit} aria-busy={sending}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input
            id="cf-name"
            ref={nameRef}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={form.name}
            onChange={update}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email address</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            value={form.email}
            onChange={update}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-course">What are you interested in?</label>
        <select id="cf-course" name="course" value={form.course} onChange={update}>
          <option value="">Choose a course or topic (optional)</option>
          <optgroup label="Courses">
            {courses.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </optgroup>
          <optgroup label="Other">
            {otherInterests.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Your message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          maxLength={2000}
          value={form.message}
          onChange={update}
        />
      </div>

      {/* Spam trap: hidden from people and screen readers, but bots that fill
          in every field fill this one too, and the server drops those. */}
      <div className="form-trap" aria-hidden="true">
        <label htmlFor="cf-check">Leave this field empty</label>
        <input id="cf-check" name="contact_check" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert" tabIndex={-1} ref={errorRef}>
          <CircleAlert aria-hidden="true" />
          {errorMessage || NETWORK_ERROR}
        </p>
      )}

      {/* aria-disabled (not disabled) keeps keyboard focus on the button while
          sending; handleSubmit already ignores repeat submits. */}
      <button type="submit" className="btn form-submit" aria-disabled={sending}>
        {sending ? (
          <>
            <LoaderCircle className="spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Send message <Send aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
