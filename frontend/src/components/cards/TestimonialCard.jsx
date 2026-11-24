import { Star, Quote } from 'lucide-react';
import './TestimonialCard.css';

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

const TestimonialCard = ({ testimonial }) => {
  const { name, track, quote, rating = 5, featured, photo } = testimonial;

  return (
    <figure className={`testimonial-card${featured ? ' is-featured' : ''}`}>
      <div className="testimonial-top">
        <Quote className="testimonial-mark" aria-hidden="true" />
        <div className="testimonial-stars" role="img" aria-label={`Rated ${rating} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} aria-hidden="true" className={i < rating ? 'is-on' : ''} />
          ))}
        </div>
      </div>

      <blockquote>
        <p>{quote}</p>
      </blockquote>

      <figcaption className="testimonial-author">
        {photo ? (
          <img src={photo} alt="" className="testimonial-avatar" width="48" height="48" loading="lazy" />
        ) : (
          <span className="testimonial-avatar" aria-hidden="true">
            {initials(name)}
          </span>
        )}
        <span>
          <span className="testimonial-name">{name}</span>
          <span className="testimonial-track">{track}</span>
        </span>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
