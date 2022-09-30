import React from 'react';
import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <div className={styles["NotFound_info"]}>
        <p className={styles["NotFound_text"]}>opps.. Error </p>
        <p className={styles["NotFound_text"]}>404</p>
        <p className={styles["NotFound_text"]}>page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
