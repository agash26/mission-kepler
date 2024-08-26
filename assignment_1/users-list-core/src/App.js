import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import styles from './styles/App.module.css';
import usersData from './data/users.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = usersData.filter(user => 
      user.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.location.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.interests.some(interest => 
        interest.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
    setFilteredUsers(filtered);
  }, [searchTerm]);

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Users</h1>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className={styles.content}>
        {filteredUsers.length > 0 ? (
          <div className={styles.cardsContainer}>
            {filteredUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>No users found</div>
        )}
      </main>
    </div>
  );
};

export default App;
