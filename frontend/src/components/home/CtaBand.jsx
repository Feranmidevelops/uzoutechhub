import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { images } from '../../data/images';
import './CtaBand.css';

const CtaBand = () => (
  <section className="section cta-band">
    <div className="container">
      <Reveal className="cta-panel">
        <img
          className="cta-photo"
          src={images.communityOutdoors.src(1200)}
          srcSet={`${images.communityOutdoors.src(640)} 640w, ${images.communityOutdoors.src(1200)} 1200w, ${images.communityOutdoors.src(1600)} 1600w`}
          sizes="(max-width: 1280px) 94vw, 1240px"
          alt=""
          loading="lazy"
          width="1600"
          height="900"
        />
        <div className="cta-content">
          <h2>Start your tech journey</h2>
          <p>Tell us what you want to learn. We’ll help you pick the right track and let you know when applications open.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn">
              Apply now <ArrowRight aria-hidden="true" />
            </Link>
            <Link to="/courses" className="btn btn-ghost">
              Browse courses
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBand;
