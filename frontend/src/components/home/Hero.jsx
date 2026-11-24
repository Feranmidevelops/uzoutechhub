import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Palette, CodeXml, Camera, ChartColumn } from 'lucide-react';
import { images } from '../../data/images';
import './Hero.css';

const Asterisk = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
    <path
      d="M20 3v34M3 20h34M8 8l24 24M32 8 8 32"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-dots" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <span className="kicker hero-in" style={{ '--i': 0 }}>
          <Sparkles aria-hidden="true" /> Free Young &amp; Techy cohorts for teens
        </span>

        <h1 className="hero-title hero-in" style={{ '--i': 1 }}>
          Learn tech.
          <br />
          <span className="text-green">Build your future.</span>
        </h1>

        <p className="hero-lead hero-in" style={{ '--i': 2 }}>
          Uzou TechEd Hub trains young Africans in design, code, data and digital skills through
          hands-on cohorts, live sessions and mentors who care.
        </p>

        <div className="hero-actions hero-in" style={{ '--i': 3 }}>
          <Link to="/contact" className="btn">
            Join the next cohort <ArrowRight aria-hidden="true" />
          </Link>
          <Link to="/courses" className="btn btn-ghost">
            Explore courses
          </Link>
        </div>

        <dl className="hero-proof hero-in" style={{ '--i': 4 }}>
          <div>
            <dt>Certified graduates</dt>
            <dd>42</dd>
          </div>
          <div>
            <dt>Skill tracks</dt>
            <dd>6</dd>
          </div>
          <div>
            <dt>Cost for teens</dt>
            <dd>₦0</dd>
          </div>
        </dl>
      </div>

      <div className="hero-visual">
        <div className="hero-shape" aria-hidden="true" />
        <Asterisk className="hero-asterisk" />

        <figure className="hero-photo hero-photo-main">
          <img
            src={images.heroLaptop.src(900)}
            srcSet={`${images.heroLaptop.src(600)} 600w, ${images.heroLaptop.src(900)} 900w, ${images.heroLaptop.src(1300)} 1300w`}
            sizes="(max-width: 900px) 62vw, 340px"
            alt={images.heroLaptop.alt}
            width="900"
            height="1100"
            fetchPriority="high"
          />
        </figure>

        <figure className="hero-photo hero-photo-small">
          <img
            src={images.heroFocus.src(500)}
            alt={images.heroFocus.alt}
            width="500"
            height="500"
          />
        </figure>

        <div className="hero-chip chip-live" style={{ '--f': 0 }}>
          <span className="live-dot" aria-hidden="true" />
          <span>
            <strong>The Tech Discuss</strong>
            <small>Live every month · 8pm WAT</small>
          </span>
        </div>

        <div className="hero-chip chip-cert" style={{ '--f': 1 }}>
          <span className="chip-icon" aria-hidden="true">
            <Award />
          </span>
          <span>
            <strong>Certificate</strong>
            <small>on every completed track</small>
          </span>
        </div>

        <div className="hero-chip chip-tracks" style={{ '--f': 2 }}>
          <span className="chip-icons" aria-hidden="true">
            <Palette />
            <CodeXml />
            <Camera />
            <ChartColumn />
          </span>
          <small>Design · Code · Media · Data</small>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
