import { Link } from 'react-router-dom';
import { Clock, BarChart3, ArrowUpRight } from 'lucide-react';
import { formatPrice } from '../../data/courses';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const { slug, title, category, level, weeks, price, icon: Icon, image, blurb, skills, youngTechy } = course;
  const free = price === 0;

  return (
    <article className="course-card">
      <div className="course-media">
        <img
          src={image.src(640)}
          srcSet={`${image.src(420)} 420w, ${image.src(640)} 640w, ${image.src(900)} 900w`}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px"
          alt={image.alt}
          loading="lazy"
          decoding="async"
          width="640"
          height="440"
        />
        <span className={`course-price${free ? ' is-free' : ''}`}>{formatPrice(price)}</span>
        {youngTechy && <span className="course-flag">Young &amp; Techy track</span>}
      </div>

      <div className="course-body">
        <div className="course-top">
          <span className="course-icon" aria-hidden="true">
            <Icon />
          </span>
          <span className="course-category">{category}</span>
        </div>

        <h3 className="course-title">{title}</h3>
        <p className="course-blurb">{blurb}</p>

        <ul className="course-skills" role="list" aria-label="You will learn">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div className="course-foot">
          <ul className="course-meta" role="list">
            <li>
              <Clock aria-hidden="true" /> {weeks} weeks
            </li>
            <li>
              <BarChart3 aria-hidden="true" /> {level}
            </li>
          </ul>
          <Link
            to={`/contact?course=${slug}`}
            className="course-link"
            aria-label={`Enrol in ${title}`}
          >
            Enrol <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
