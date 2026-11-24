import {
  Target,
  Eye,
  TrendingUp,
  HeartHandshake,
  ShieldCheck,
  Handshake,
  Sprout,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Rocket,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/ui/Reveal';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CtaBand from '../components/home/CtaBand';
import { images } from '../data/images';
import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/About.css';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Talent development',
    text: 'Free and low-cost programs like Young & Techy that give teenagers a head start in digital skills.',
  },
  {
    icon: Briefcase,
    title: 'Career training',
    text: 'Hands-on courses in design, code, data and digital business, built around what employers hire for.',
  },
  {
    icon: Rocket,
    title: 'Technology innovation',
    text: 'Live sessions like The Tech Discuss that keep young people close to where technology is heading.',
  },
];

const values = [
  { icon: TrendingUp, title: 'Excellence & growth', text: 'We keep learning and improving, and hold our teaching to a high standard.' },
  { icon: HeartHandshake, title: 'Respect & inclusivity', text: 'Everyone is welcome, valued and heard, whatever their background.' },
  { icon: ShieldCheck, title: 'Integrity & accountability', text: 'We act honestly and openly, and own our responsibilities to our community.' },
  { icon: Handshake, title: 'Collaboration & teamwork', text: 'We believe shared effort and open communication lead to better work.' },
  { icon: Sprout, title: 'Empowerment & support', text: 'We encourage initiative and create chances for everyone to reach their potential.' },
  { icon: Lightbulb, title: 'Adaptability & innovation', text: 'We embrace change and look for creative answers to new needs.' },
];

const About = () => {
  usePageTitle('About');

  return (
    <>
      <PageHero
        kicker="About Uzou TechEd Hub"
        title="Growing Africa’s next tech talent"
        lead={site.description}
        image={images.mentor}
        secondImage={images.pairLaptop}
      />

      <section className="section">
        <div className="container mv-grid">
          <Reveal className="mv-card mv-mission">
            <span className="mv-icon" aria-hidden="true">
              <Target />
            </span>
            <h2>Our mission</h2>
            <p>
              To empower the next generation of technology innovators through hands-on, project-based tech education
              that builds creativity, problem-solving, collaboration and digital fluency.
            </p>
          </Reveal>
          <Reveal className="mv-card" delay={100}>
            <span className="mv-icon" aria-hidden="true">
              <Eye />
            </span>
            <h2>Our vision</h2>
            <p>
              To become a leading provider of technology education, and to help make Africa a home of technology
              consumers and creators who drive the next wave of innovation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section about-pillars">
        <div className="container pillars-grid">
          <Reveal className="pillars-photo">
            <img src={images.communityOutdoors.src(900)} alt={images.communityOutdoors.alt} loading="lazy" width="900" height="1000" />
          </Reveal>
          <div>
            <Reveal className="section-head">
              <h2>What we do</h2>
              <p>We start at the foundation: giving young people tools, teaching and confidence early.</p>
            </Reveal>
            <ul className="pillars-list" role="list">
              {pillars.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={i * 90} className="pillar">
                  <span className="pillar-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <h2>The values behind everything we do</h2>
            <p>How we work with students, staff and partners, at every level.</p>
          </Reveal>
          <ul className="values-grid" role="list">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 90}>
                <div className="value-card">
                  <span className="value-icon" aria-hidden="true">
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

      <Testimonials />
      <CtaBand />
    </>
  );
};

export default About;
