import React from "react";
import MetricsCard from "../components/MetricsCard";
import About from "./About";
import Testimonials from "./Testimonials";
import "../styles/Home.css";

const Home = () => (
  <div className="home">
    <h1>UZOU TECH HUB </h1>
    <h2>Summer School Program</h2>
    <p>
      Through Young & Techy, we’re committed to making tech education
      accessible, practical, and engaging for the next generation guiding them
      as they explore their interests and begin their tech career journeys.
    </p>
    <div className="goals">
      <h2>Our Programs</h2>
      <p>
        Young & Techy Digital Skill Training Young & Techy is a flagship
        foundational program of Uzou TechEd, designed to give teenagers a head
        start in the tech world, completely free. This annual online initiative
        equips students with relevant digital and tech skills, preparing them
        for future opportunities in the technology space. The program runs for 5
        weeks and features a beginner-friendly curriculum tailored to young
        learners. It covers core concepts across 6 skill tracks and includes 2
        productivity-focused courses to help participants build strong work
        habits alongside technical knowledge.
      </p>
      <h2>Cohort Highlights</h2>
      <ul>
        <li>
          Cohort 1 Tracks Covered: Graphic Design, Photography Duration: October
          21 – November 23, 2024 Certified Graduates: 12 students
        </li>
        <li>
          Cohort 2 Tracks Covered: 4 Skill Tracks Duration: April 14 – May 18,
          2025 Certified Graduates: 30 studentsy
        </li>
        <li>Partner with leading tech companies</li>
      </ul>
    </div>
    <div className="metrics">
      <MetricsCard value="5000+" label="Students Trained" />
      <MetricsCard value="95%" label="Job Placement" />
      <MetricsCard value="50+" label="Expert Instructors" />
    </div>


    <section id="about">
        <About />
      </section>

  

      <section id="testimonials">
        <Testimonials />
      </section>
  </div>
);

export default Home;
