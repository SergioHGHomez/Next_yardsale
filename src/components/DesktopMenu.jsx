import React from 'react';
import styles from '@styles/DesktopMenu.module.scss';
import Link from 'next/link';

const DesktopMenu = () => {
  return (
    <div className={styles.DesktopMenu}>
      <ul className={styles['DesktopMenu_ul']}>
        <li>
          <Link href={"/"}>
            <p>My orders</p>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <p>My orders</p>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <p>sign out</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
