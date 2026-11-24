import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SearchX, ArrowRight, Gift } from 'lucide-react';
import PageHero from '../components/PageHero';
import CourseCard from '../components/cards/CourseCard';
import Reveal from '../components/ui/Reveal';
import { courses, categories, formatPrice } from '../data/courses';
import { images } from '../data/images';
import '../components/home/CoursePreview.css';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/Courses.css';

const freeCount = courses.filter((c) => c.price === 0).length;

const Courses = () => {
  usePageTitle('Courses');

  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const inCategory = category === 'All' || c.category === category;
      const matches =
        !q ||
        [c.title, c.blurb, c.category, c.level, formatPrice(c.price), c.youngTechy ? 'Young & Techy' : '', ...c.skills].some((text) => text.toLowerCase().includes(q));
      return inCategory && matches;
    });
  }, [category, query]);

  // The clear button disappears once there are results again, so put the
  // keyboard focus somewhere useful: the search box.
  const clear = () => {
    setCategory('All');
    setQuery('');
    searchRef.current?.focus();
  };

  return (
    <>
      <PageHero
        kicker={`${courses.length} courses · all online`}
        title="Find the track that fits you"
        lead="Design, code, data and digital business. Start free with a Young & Techy track or go deeper with a paid course taught live by people who do the work."
        image={images.studyGroup}
        secondImage={images.frontend}
      >
        <p className="courses-free-note">
          <Gift aria-hidden="true" /> {freeCount} tracks are free for teenagers through Young &amp; Techy
        </p>
      </PageHero>

      <section className="section courses-page">
        <div className="container">
          <div className="courses-toolbar">
            <label className="search-field">
              <span className="visually-hidden">Search courses</span>
              <Search aria-hidden="true" />
              <input
                ref={searchRef}
                type="search"
                placeholder="Search by course or skill, e.g. Figma"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>

            <div className="filter-pills" role="group" aria-label="Filter courses by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className="pill"
                  aria-pressed={category === cat}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <h2 className="visually-hidden">All courses</h2>

          <p className="courses-count" role="status">
            Showing {results.length} of {courses.length} courses
          </p>

          {results.length > 0 ? (
            <ul className="course-grid" role="list">
              {results.map((course, i) => (
                <li key={`${category}-${course.slug}`} className="course-grid-item" style={{ '--i': i }}>
                  <CourseCard course={course} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="courses-empty">
              <SearchX aria-hidden="true" />
              <h2>No courses match that yet</h2>
              <p>Try another word or category, or tell us what you’d like to learn.</p>
              <button type="button" className="btn btn-ghost" onClick={clear}>
                Clear search and filters
              </button>
            </div>
          )}

          <Reveal className="courses-help">
            <div>
              <h2>Not sure where to start?</h2>
              <p>Tell us what you enjoy and we’ll suggest a track that suits you.</p>
            </div>
            <Link to="/contact" className="btn">
              Ask for advice <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Courses;
