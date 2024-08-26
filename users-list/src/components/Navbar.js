import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import SearchBar from './SearchBar';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [activeLink, setActiveLink] = useState('new-users');

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.navbar}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.navLinks}>
        <button
          className={`${styles.navLink} ${activeLink === 'new-users' ? styles.active : ''}`}
          onClick={() => handleNavClick('new-users')}
        >
          New Users
        </button>
        <button
          className={`${styles.navLink} ${activeLink === 'voters' ? styles.active : ''}`}
          onClick={() => handleNavClick('voters')}
        >
          Voters
        </button>
        <button
          className={`${styles.navLink} ${activeLink === 'editors' ? styles.active : ''}`}
          onClick={() => handleNavClick('editors')}
        >
          Editors
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
