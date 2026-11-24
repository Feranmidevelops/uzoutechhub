import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import CourseCard from '../cards/CourseCard';
import { courses, categories } from '../../data/courses';
import './CoursePreview.css';

const CoursePreview = () => {
  const [active, setActive] = useState('All');

  const visible = useMemo(
    () => (active === 'All' ? courses : courses.filter((c) => c.category === active)).slice(0, 6),
    [active]
  );

  return (
    <section className="section course-preview" id="courses">
      <div className="container">
        <div className="cp-head">
          <Reveal className="section-head">
            <h2>Popular courses</h2>
            <p>Start free with a Young &amp; Techy track or go deeper with a paid course. All online, all hands-on.</p>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/courses" className="btn btn-ghost">
              View all {courses.length} courses <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="filter-pills" role="group" aria-label="Filter courses by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className="pill"
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="course-grid" role="list">
          {visible.map((course, i) => (
            <li key={`${active}-${course.slug}`} className="course-grid-item" style={{ '--i': i }}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoursePreview;
