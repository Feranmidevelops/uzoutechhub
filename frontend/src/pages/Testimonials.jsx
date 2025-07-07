import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Emaniru Emmanuella",
    course: " Graphic Design track",
    text: " I want to sincerely appreciate the Uzou TechEd Academy Team for the opportunity to undergo this 5-week training. Initially, I thought graphic design would be difficult, but I soon discovered how easy and enjoyable it could be.",
    image: "/assets/jane.jpg",
  },
  {
    name: "Ngwuli Melvin",
    course: "Fullstack Engineer at Microsoft",
    text: "Their curriculum is hands-on and up to date.",
    image: "/assets/john.jpg",
  },
  {
    name: "Oshioke George",
    course: "AI Specialist at OpenAI",
    text: "I built my first AI model thanks to TechHub Pro!",
    image: "/assets/emily.jpg",
  },
  {
    name: "Eunice Hamilton",
    course: "Social Marketer",
    text: "I built my first AI model thanks to TechHub Pro!",
    image: "/assets/emily.jpg",
  },
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
