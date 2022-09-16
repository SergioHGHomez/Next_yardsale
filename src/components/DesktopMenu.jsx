import React from "react";
import styles from '@styles/DesktopMenu.module.scss'

const DesktopMenu = () => {
  return (
    <div className={styles.DesktopMenu}>
      <ul className={styles["DesktopMenu_ul"]}>
        <li>
          <a href="">My orders</a>
        </li>
        <li>
          <a href="">My account</a>
        </li>
        <li>
          <a href="/login">sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
