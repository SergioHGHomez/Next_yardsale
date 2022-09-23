import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import choppingCart from '@icons/icon_shopping_cart.svg';
import DesktopMenu from '@components/DesktopMenu';
import OrderList from '@containers/OrderList';
import AppContext from '@context/AppContext';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrderList, setToggleOrderList] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleOrderList = (event) => {
    event.preventDefault();
    setToggleOrderList(!toggleOrderList);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles['nav-left']}>
        <figure className={styles['nav-left_menulogo']}>
          <Image src={menu} alt="menu button" />
        </figure>
        <Link href={'/'}>
          <Image className={styles['nav-left_logo']} src={logo} alt="logo" />
        </Link>
        <ul className={styles['nav-left_list']}>
          <li className={styles['nav-left_item']}>
            <button className={styles['nav-left_filter-button']}>
              ALL
            </button>
          </li>
          <li className={styles['nav-left_item']}>
            <button className={styles['nav-left_filter-button']} >
              Headphones
            </button>
          </li>
          <li className={styles['nav-left_item']}>
            <button className={styles['nav-left_filter-button']}>
              Speakers
            </button>
          </li>
          <li className={styles['nav-left_item']}>
            <button className={styles['nav-left_filter-button']}>
              Cameras
            </button>
          </li>
          <li className={styles['nav-left_item']}>
            <button className={styles['nav-left_filter-button']}>
              Other
            </button>
          </li>
        </ul>
      </div>

      <div className={styles['nav-right']}>
        <ul className={styles['nav-right_list']}>
          <li className={styles['nav-right_menu']} onClick={handleToggle}>
            {state.email}
          </li>
          <li className={styles['nav-right_cart']} onClick={handleToggleOrderList}>
              <figure className={styles['nav-right_icon']}>
                <Image src={choppingCart} alt="" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
              </figure>
          </li>
        </ul>
      </div>

      {toggle && <DesktopMenu />}
      {toggleOrderList && <OrderList />}
    </header>
  );
};

export default Header;
