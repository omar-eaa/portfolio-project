import { useEffect, useState } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To manage the mobile menu toggle

  const handleScroll = () => {
    setIsSticky(window.scrollY > document.querySelector('.front-page').offsetHeight);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-container ${isSticky ? 'sticky-header' : ''}`}>
      <a className="logo-name" href="">Omar.<span>dev</span></a>

      {/* Hamburger icon for mobile */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>

      {/* Navigation links */}
      <nav className={`link-container ${isMenuOpen ? 'active' : ''}`}>
        <ul className="ul-container">
          <li className="li-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="li-item">
            <a className="nav-link" href="#aboutMeLink">About</a>
          </li>
          <li className="li-item">
            <a className="nav-link" href="#portfolioLink">Portfolio</a>
          </li>
          <li className="li-item">
            <a className="nav-link" href="#contactLink">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
