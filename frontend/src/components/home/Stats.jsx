import CountUp from '../ui/CountUp';
import Reveal from '../ui/Reveal';
import './Stats.css';

const stats = [
  { end: 42, label: 'certified graduates' },
  { end: 2, label: 'Young & Techy cohorts completed' },
  { end: 6, label: 'beginner-friendly skill tracks' },
  { end: 12, label: 'courses to grow into' },
];

const Stats = () => (
  <section className="stats-section" aria-label="Uzou in numbers">
    <div className="container">
      <Reveal className="stats-panel">
        <dl className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>
                <CountUp end={s.end} />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

export default Stats;
