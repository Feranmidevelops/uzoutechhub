import Reveal from '../ui/Reveal';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => (
  <section className="section testimonials-section" id="stories">
    <div className="container">
      <Reveal className="section-head center">
        <h2>Stories from our graduates</h2>
        <p>Young people who started with curiosity and finished with skills, projects and confidence.</p>
      </Reveal>

      <ul className="testimonial-grid" role="list">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 90} className={t.featured ? 'is-featured' : ''}>
            <TestimonialCard testimonial={t} />
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Testimonials;
