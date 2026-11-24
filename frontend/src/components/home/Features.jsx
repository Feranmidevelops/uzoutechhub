import { Rocket, Users, MonitorPlay, Award } from 'lucide-react';
import Reveal from '../ui/Reveal';
import './Features.css';

const features = [
  {
    icon: Rocket,
    title: 'Learn by building',
    text: 'Every week ends with something real: a poster, a website, a dashboard you can show.',
  },
  {
    icon: Users,
    title: 'Mentors in your corner',
    text: 'Small groups, friendly tutors and a community that answers when you get stuck.',
  },
  {
    icon: MonitorPlay,
    title: 'Live and online',
    text: 'Join from anywhere in Africa. Live classes, recordings and a supportive group chat.',
  },
  {
    icon: Award,
    title: 'Certificate and portfolio',
    text: 'Finish a track to earn a certificate and projects that prove what you can do.',
  },
];

const Features = () => (
  <section className="section features">
    <div className="container">
      <Reveal className="section-head center">
        <h2>Why young Africans learn with Uzou</h2>
        <p>Practical, beginner-friendly and built around the skills employers and clients are hiring for.</p>
      </Reveal>

      <ul className="features-grid" role="list">
        {features.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 90}>
            <div className="feature-card">
              <span className="feature-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Features;
