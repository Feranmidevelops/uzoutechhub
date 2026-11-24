import { Link } from 'react-router-dom';
import { Mail, Video, ArrowUpRight } from 'lucide-react';
import Logo from '../Logo';
import InstagramIcon from '../icons/InstagramIcon';
import { site, navLinks } from '../../data/site';
import './Footer.css';

const programs = [
  { to: '/#young-and-techy', label: 'Young & Techy' },
  { to: '/#tech-discuss', label: 'The Tech Discuss' },
  { to: '/courses', label: 'All courses' },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{site.description}</p>
          <ul className="footer-social" role="list">
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${site.instagram.handle}`}>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`}>
                <Mail aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h2>Explore</h2>
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2>Programs</h2>
          <ul role="list">
            {programs.map((p) => (
              <li key={p.label}>
                <Link to={p.to}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Say hello</h2>
          <ul role="list">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                {site.instagram.handle} <ArrowUpRight aria-hidden="true" />
              </a>
            </li>
            <li className="footer-live">
              <Video aria-hidden="true" /> Live sessions on Google Meet, 8pm WAT
            </li>
          </ul>
        </div>
      </div>

      <p className="footer-word" aria-hidden="true">
        UZOU
      </p>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>
          Photos from{' '}
          <a href="https://unsplash.com/?utm_source=uzoutechedhub&utm_medium=referral" target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
