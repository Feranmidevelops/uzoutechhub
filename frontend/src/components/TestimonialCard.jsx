import React from 'react';
import '../styles/TestimonialCard.css';

const TestimonialCard = ({ name, course, text, image }) => (
  <div className="testimonial-card">
	<img src={image} alt={name} className="testimonial-image" />
	<h4>{name}</h4>
	<p className="role">{course}</p>
	<blockquote>"{text}"</blockquote>
  </div>
);

export default TestimonialCard;