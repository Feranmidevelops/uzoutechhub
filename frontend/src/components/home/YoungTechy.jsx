import { Link } from 'react-router-dom';
import { CircleCheck, ArrowRight, Gift } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { images } from '../../data/images';
import './YoungTechy.css';

const highlights = [
  '5 weeks, fully online and completely free',
  '6 beginner-friendly skill tracks',
  '2 productivity courses for strong work habits',
  'A certificate when you complete your track',
];

const cohorts = [
  { name: 'Cohort 1', dates: 'Oct 21 – Nov 23, 2024', detail: 'Graphic Design, Photography', grads: '12 graduates' },
  { name: 'Cohort 2', dates: 'Apr 14 – May 18, 2025', detail: '4 skill tracks', grads: '30 graduates' },
  { name: 'Cohort 3', dates: 'Coming soon', detail: 'Applications open shortly', grads: 'Join the list', next: true },
];

const YoungTechy = () => (
  <section className="section young-techy" id="young-and-techy">
    <div className="container yt-grid">
      <Reveal className="yt-media">
        <figure className="yt-photo yt-photo-main">
          <img
            src={images.teensGroup.src(900)}
            alt={images.teensGroup.alt}
            loading="lazy"
            width="900"
            height="700"
          />
        </figure>
        <figure className="yt-photo yt-photo-small">
          <img src={images.pairLaptop.src(600)} alt={images.pairLaptop.alt} loading="lazy" width="600" height="600" />
        </figure>
        <div className="yt-badge">
          <Gift aria-hidden="true" />
          <span>
            <strong>100% free</strong>
            for teenagers
          </span>
        </div>
      </Reveal>

      <div className="yt-copy">
        <Reveal>
          <span className="kicker">Our flagship program</span>
        </Reveal>
        <Reveal delay={80}>
          <h2>Young &amp; Techy gives teens a free head start</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="yt-lead">
            Our annual online program equips teenagers with digital and tech skills, so they can explore what
            they love and start their tech journey early, guided by people who care.
          </p>
        </Reveal>

        <Reveal as="ul" delay={220} className="yt-list" role="list">
          {highlights.map((item) => (
            <li key={item}>
              <CircleCheck aria-hidden="true" /> {item}
            </li>
          ))}
        </Reveal>

        <Reveal as="ol" delay={280} className="yt-cohorts" aria-label="Cohorts so far">
          {cohorts.map((c) => (
            <li key={c.name} className={c.next ? 'is-next' : ''}>
              <span className="yt-cohort-name">{c.name}</span>
              <span className="yt-cohort-dates">{c.dates}</span>
              <span className="yt-cohort-detail">{c.detail}</span>
              <span className="yt-cohort-grads">{c.grads}</span>
            </li>
          ))}
        </Reveal>

        <Reveal delay={340}>
          <Link to="/contact?course=young-and-techy" className="btn">
            Get notified for Cohort 3 <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

export default YoungTechy;
