import { Clock, Video, UserRound } from 'lucide-react';
import Reveal from '../ui/Reveal';
import InstagramIcon from '../icons/InstagramIcon';
import { images } from '../../data/images';
import { techDiscuss } from '../../data/events';
import { site } from '../../data/site';
import './TechDiscuss.css';

const TechDiscuss = () => (
  <section className="section tech-discuss" id="tech-discuss">
    <div className="container td-grid">
      <div className="td-copy">
        <Reveal>
          <span className="kicker">
            <span className="td-live-dot" aria-hidden="true" /> Free monthly live session
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            The <span className="td-script">Tech</span> Discuss
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p>
            Every month we bring young people together with practitioners to talk about where tech is going and
            how to stay ahead. Bring your questions, it’s free.
          </p>
        </Reveal>
        <Reveal as="ul" delay={220} className="td-meta" role="list">
          <li>
            <Clock aria-hidden="true" /> {techDiscuss.time}
          </li>
          <li>
            <Video aria-hidden="true" /> {techDiscuss.platform}
          </li>
        </Reveal>
        <Reveal delay={280}>
          <a href={site.instagram.url} className="btn" target="_blank" rel="noopener noreferrer">
            <InstagramIcon width="18" height="18" /> Follow for the next edition
          </a>
        </Reveal>
      </div>

      <div className="td-board">
        <Reveal className="td-photo">
          <img src={images.liveSession.src(800)} alt={images.liveSession.alt} loading="lazy" width="800" height="1000" />
          <span className="td-photo-tag">
            <span className="td-live-dot" aria-hidden="true" /> Live on Google Meet
          </span>
        </Reveal>

        <ul className="td-editions" role="list" aria-label="Recent editions">
          {techDiscuss.editions.map((ed, i) => (
            <Reveal as="li" key={ed.theme} delay={120 + i * 120} className="td-edition">
              <span className="td-date" aria-hidden="true">
                <span>{ed.day}</span>
                <small>{ed.shortMonth}</small>
              </span>
              <span className="td-edition-body">
                <span className="td-edition-month">{ed.month} edition</span>
                <span className="td-edition-theme">{ed.theme}</span>
                <span className="td-edition-host">
                  <UserRound aria-hidden="true" /> Hosted by {ed.host}
                </span>
                <span className="visually-hidden">{ed.date}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TechDiscuss;
