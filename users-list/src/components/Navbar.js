import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [activeLink, setActiveLink] = useState('new-users');

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
