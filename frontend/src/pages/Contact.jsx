import { useSearchParams } from 'react-router-dom';
import { Mail, Video, Clock, ArrowUpRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/ui/Reveal';
import InstagramIcon from '../components/icons/InstagramIcon';
import { site } from '../data/site';
import '../styles/Contact.css';

const Contact = () => {
  const [params] = useSearchParams();
  const course = params.get('course');

  return (
    <section className="section contact-page">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="kicker hero-in" style={{ '--i': 0 }}>
            Contact us
          </span>
          <h1 className="hero-in" style={{ '--i': 1 }}>
            Let’s get you started
          </h1>
          <p className="contact-lead hero-in" style={{ '--i': 2 }}>
            Ask about a course, join the list for the next Young &amp; Techy cohort, or talk to us about partnering.
            A real person reads every message.
          </p>

          <ul className="contact-cards" role="list">
            <Reveal as="li" delay={100}>
              <a className="contact-card" href={`mailto:${site.email}`}>
                <span className="contact-card-icon" aria-hidden="true">
                  <Mail />
                </span>
                <span>
                  <strong>Email</strong>
                  <span>{site.email}</span>
                </span>
              </a>
            </Reveal>
            <Reveal as="li" delay={160}>
              <a className="contact-card" href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                <span className="contact-card-icon" aria-hidden="true">
                  <InstagramIcon />
                </span>
                <span>
                  <strong>Instagram</strong>
                  <span>{site.instagram.handle}</span>
                </span>
                <ArrowUpRight className="contact-card-arrow" aria-hidden="true" />
              </a>
            </Reveal>
            <Reveal as="li" delay={220}>
              <div className="contact-card">
                <span className="contact-card-icon" aria-hidden="true">
                  <Video />
                </span>
                <span>
                  <strong>The Tech Discuss</strong>
                  <span>Live monthly on Google Meet, 8pm WAT</span>
                </span>
              </div>
            </Reveal>
            <Reveal as="li" delay={280}>
              <div className="contact-card">
                <span className="contact-card-icon" aria-hidden="true">
                  <Clock />
                </span>
                <span>
                  <strong>Replies</strong>
                  <span>Within two working days</span>
                </span>
              </div>
            </Reveal>
          </ul>
        </div>

        <Reveal className="contact-form-wrap" delay={120}>
          <h2 className="visually-hidden">Send us a message</h2>
          <ContactForm initialCourse={course} />
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
