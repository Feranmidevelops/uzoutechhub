import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ currentPage, setPage }) => {
  return (
	<nav className="nav">
	  <div className="nav-brand">TechHub Pro</div>
	  <ul className="nav-links">
		{['home', 'courses', 'testimonials', 'about'].map(p => (
		  <li key={p} className={currentPage === p ? 'active' : ''} onClick={() => setPage(p)}>
			{p.charAt(0).toUpperCase() + p.slice(1)}
		  </li>
		))}
	  </ul>
	</nav>
  );
};

export default Navigation;