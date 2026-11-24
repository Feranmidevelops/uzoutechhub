import React, { useState } from 'react';
import '../styles/ContactForm.css';
import { submitContact } from '../api/contactApi';

const ContactForm = ({ page, courses = [] }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
	setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
	e.preventDefault();
	try {
	  await submitContact(form);
	  setSubmitted(true);
	  setTimeout(() => {
		setSubmitted(false);
		setForm({ name: '', email: '', message: '', course: '' });
	  }, 3000);
	} catch (error) {
	  console.error('Submission error:', error);
	}
  };

  return (
	<form className="contact-form" onSubmit={handleSubmit}>
	  {submitted && <p className="success-msg">Message sent successfully!</p>}
	  <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required />
	  <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
	  {page === 'courses' && (
		<select name="course" value={form.course} onChange={handleChange}>
		  <option value="">Select Course</option>
		  {courses.map(course => (
			<option key={course.id} value={course.title}>{course.title}</option>
		  ))}
		</select>
	  )}
	  <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
	  <button type="submit">Send</button>
	</form>
  );
};

export default ContactForm;