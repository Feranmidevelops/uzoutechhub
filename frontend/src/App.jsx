import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
	switch (page) {
	  case 'about': return <About />;
	  case 'courses': return <Courses />;
	  case 'testimonials': return <Testimonials />;
	  default: return <Home />;
	}
  };

  return (
	<>
	  <Navigation currentPage={page} setPage={setPage} />
	  {renderPage()}
	</>
  );
};

export default App;