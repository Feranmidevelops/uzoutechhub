import Reveal from './ui/Reveal';
import './PageHero.css';

// Opening banner for inner pages: words on the left, one or two photos on
// the right over a green shape.
const PageHero = ({ kicker, title, lead, children, image, secondImage }) => (
  <section className="page-hero">
    <div className="container page-hero-grid">
      <div className="page-hero-copy">
        {kicker && (
          <span className="kicker hero-in" style={{ '--i': 0 }}>
            {kicker}
          </span>
        )}
        <h1 className="hero-in" style={{ '--i': 1 }}>
          {title}
        </h1>
        {lead && (
          <p className="page-hero-lead hero-in" style={{ '--i': 2 }}>
            {lead}
          </p>
        )}
        {children && (
          <div className="page-hero-extra hero-in" style={{ '--i': 3 }}>
            {children}
          </div>
        )}
      </div>

      {image && (
        <Reveal className="page-hero-media">
          <span className="page-hero-shape" aria-hidden="true" />
          <img
            className="page-hero-photo"
            src={image.src(900)}
            alt={image.alt}
            width="900"
            height="700"
            fetchPriority="high"
          />
          {secondImage && (
            <img
              className="page-hero-photo-small"
              src={secondImage.src(500)}
              alt={secondImage.alt}
              width="500"
              height="500"
              loading="lazy"
            />
          )}
        </Reveal>
      )}
    </div>
  </section>
);

export default PageHero;
