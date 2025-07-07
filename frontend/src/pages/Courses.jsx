
import React from 'react';
import CourseCard from '../components/CourseCard';
import ContactForm from '../components/ContactForm';
import '../styles/Courses.css';

const courseList = [
  { id: 1, title: 'Frontend Development', duration: '3 months', description: 'Master HTML, CSS, JavaScript, and React.', price: '$300' },
  { id: 2, title: 'Backend Development', duration: '3 months', description: 'Learn Node.js, Express, MongoDB, and APIs.', price: '$350' },
  { id: 3, title: 'Fullstack Development', duration: '6 months', description: 'Combine frontend and backend skills.', price: '$600' },
  { id: 4, title: 'Graphics Design', duration: '4 months', description: 'Dive into data science and neural networks.', price: '$450' },
];

const Courses = () => (
  <div className="courses">
	<h1>Our Courses</h1>
	<div className="course-list">
	  {courseList.map(course => (
		<CourseCard key={course.id} {...course} />
	  ))}
	</div>
	<ContactForm page="courses" courses={courseList} />
  </div>
);

export default Courses;