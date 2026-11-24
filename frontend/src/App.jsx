import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
