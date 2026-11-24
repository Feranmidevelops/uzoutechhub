import CourseCard from '../components/cards/CourseCard';
import ContactForm from '../components/ContactForm';
import { courses } from '../data/courses';
import '../components/home/CoursePreview.css';

const Courses = () => (
  <section className="section">
    <div className="container">
      <div className="section-head">
        <h1>Our courses</h1>
        <p>Every course is online, hands-on and built for beginners who want real skills.</p>
      </div>
      <ul className="course-grid" role="list">
        {courses.map((course, i) => (
          <li key={course.slug} className="course-grid-item" style={{ '--i': i }}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 64 }}>
        <ContactForm page="courses" courses={courses.map((c) => ({ id: c.slug, title: c.title }))} />
      </div>
    </div>
  </section>
);

export default Courses;
