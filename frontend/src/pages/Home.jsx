import React from 'react';
import MetricsCard from '../components/MetricsCard';
import '../styles/Home.css';

const Home = () => (
  <div className="home">
	<h1>Empowering Future Tech Leaders</h1>
	<p>TechHub Pro is dedicated to equipping individuals with cutting-edge skills in software development, AI, and cybersecurity.</p>
	<div className="goals">
	  <h2>Our Mission</h2>
	  <p>To provide high-quality, practical tech education that transforms lives and careers.</p>
	  <h2>Our Goals</h2>
	  <ul>
		<li>Train over 10,000 students in the next 3 years</li>
		<li>Maintain 95% job placement rate</li>
		<li>Partner with leading tech companies</li>
	  </ul>
	</div>
	<div className="metrics">
	  <MetricsCard value="5000+" label="Students Trained" />
	  <MetricsCard value="95%" label="Job Placement" />
	  <MetricsCard value="50+" label="Expert Instructors" />
	</div>
  </div>
);

export default Home;
