import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import './Marquee.css';

const items = [
  'Graphic Design',
  'Web Development',
  'UI/UX',
  'AI Tools',
  'Data Analysis',
  'Photography',
  'Digital Marketing',
  'Video Editing',
];

const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

// A green band of skills that scrolls sideways. The second copy of the
// list makes the loop seamless and is hidden from screen readers. The
// button lets anyone stop the motion (hover pauses it too).
const Marquee = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="marquee-wrap" aria-label="Skills we teach">
      <div className={`marquee${paused ? ' is-paused' : ''}`}>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-list" role="list" aria-hidden={copy === 1 || undefined}>
              {items.map((item) => (
                <li key={item}>
                  {item}
                  <Star />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="marquee-toggle"
        aria-pressed={paused}
        aria-label={paused ? 'Play the scrolling skills band' : 'Pause the scrolling skills band'}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </button>
    </section>
  );
};

export default Marquee;
