import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/NotFound.css';

const NotFound = () => (
  <section className="not-found container">
    <p className="not-found-code" aria-hidden="true">404</p>
    <h1>This page took a different track</h1>
    <p>The page you’re looking for doesn’t exist or has moved.</p>
    <Link to="/" className="btn">
      <ArrowLeft aria-hidden="true" /> Back to home
    </Link>
  </section>
);

export default NotFound;
