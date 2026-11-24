import { ClipboardPen, MonitorPlay, Hammer, GraduationCap } from 'lucide-react';
import Reveal from '../ui/Reveal';
import './HowItWorks.css';

const steps = [
  { icon: ClipboardPen, title: 'Apply', text: 'Pick a track and send a short application. It takes two minutes.' },
  { icon: MonitorPlay, title: 'Learn live', text: 'Join live online classes with tutors and a group that keeps you going.' },
  { icon: Hammer, title: 'Build projects', text: 'Practise every week on real briefs and get feedback on your work.' },
  { icon: GraduationCap, title: 'Get certified', text: 'Finish your track, earn a certificate and keep growing with us.' },
];

const HowItWorks = () => (
  <section className="section how">
    <div className="container">
      <Reveal className="section-head center">
        <h2>How it works</h2>
        <p>From your first class to your first portfolio piece in a few short weeks.</p>
      </Reveal>

      <ol className="how-steps" role="list">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 110} className="how-step">
            <span className="how-icon" aria-hidden="true">
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
