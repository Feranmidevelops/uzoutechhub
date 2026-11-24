import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollManager from './ScrollManager';

const Layout = () => (
  <>
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <ScrollManager />
    <Header />
    <main id="main" tabIndex={-1}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
