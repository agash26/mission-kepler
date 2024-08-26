import React from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.searchContainer}>
      <span className={styles.searchIcon}>🔍</span>
      <input
        type="text"
        placeholder="Search Users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;