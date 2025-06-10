import React from 'react';
import '../styles/CourseCard.css';

const CourseCard = ({ title, duration, description, price }) => (
  <div className="course-card">
	<h3>{title}</h3>
	<p>{description}</p>
	<div className="course-meta">
	  <span>{duration}</span>
	  <strong>{price}</strong>
	</div>
  </div>
);

export default CourseCard;