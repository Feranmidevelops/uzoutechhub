import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import '../styles/Testimonials.css';

const testimonials = [
  { name: 'Jane Doe', role: 'Frontend Developer at Google', text: 'TechHub Pro helped me land my dream job!', image: '/assets/jane.jpg' },
  { name: 'John Smith', role: 'Fullstack Engineer at Microsoft', text: 'Their curriculum is hands-on and up to date.', image: '/assets/john.jpg' },
  { name: 'Emily Rose', role: 'AI Specialist at OpenAI', text: 'I built my first AI model thanks to TechHub Pro!', image: '/assets/emily.jpg' },
];

const Testimonials = () => (
  <div className="testimonials">
	<h1>What Our Graduates Say</h1>
	<div className="testimonial-list">
	  {testimonials.map((t, index) => (
		<TestimonialCard key={index} {...t} />
	  ))}
	</div>
  </div>
);

export default Testimonials;
