import React from 'react';
import styles from '../styles/UserCard.module.css';

const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <img src={user.image} alt={user.name} className={styles.avatar} />
      <div className={styles.details}>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.location}>{user.location}</p>
        <div className={styles.interests}>
          {user.interests.map((interest, index) => (
            <div key={index} className={styles.interest}>
              {interest}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
