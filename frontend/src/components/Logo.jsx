import { Link } from 'react-router-dom';
import './Logo.css';

// The Uzou mark: a rounded green tile with a "U" cut through it.
export const LogoMark = ({ size = 36 }) => (
  <svg
    className="logo-mark"
    width={size}
    height={size}
    viewBox="0 0 40 40"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="3" y="3" width="34" height="34" rx="10" fill="none" stroke="currentColor" strokeWidth="3.5" />
    <path
      d="M13.5 11v10.5a6.5 6.5 0 0 0 13 0V11"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path d="M9 31 31 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
  </svg>
);

const Logo = ({ onClick }) => (
  <Link to="/" className="logo" aria-label="Uzou TechEd Hub home" onClick={onClick}>
    <LogoMark />
    <span className="logo-text" aria-hidden="true">
      <span className="logo-name">UZOU</span>
      <span className="logo-sub">TechEd Hub</span>
    </span>
  </Link>
);

export default Logo;
