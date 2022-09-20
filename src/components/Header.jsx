import React, {useState, useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import choppingCart from '@icons/icon_shopping_cart.svg';
import DesktopMenu from '@components/DesktopMenu';
import OrderList from '@containers/OrderList';
import AppContext from '@context/AppContext';
import styles from "@styles/Header.module.scss";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrderList, setToggleOrderList] = useState(false);
    const {state} = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleToggleOrderList = (event) => {
        event.preventDefault()
        setToggleOrderList(!toggleOrderList)
    }

    return (
        <header className={styles.navbar}>
        <div className={styles["nav-left"]}>
            {/* <Image className={styles["nav-left_menulogo"]} src={menu} alt="menu" /> */}
            <Link href={"/"}>
                <Image className={styles["nav-left_logo"]} src={logo} alt="logo" />
            </Link>
            <ul className={styles["nav-left_list"]}>
                <li className={styles["nav-left_item"]}>
                    <a href="/">ALL</a>
                </li>
                <li className={styles["nav-left_item"]}>
                    <a href="/">Clothes</a>
                </li>
                <li className={styles["nav-left_item"]}>
                    <a href="/">Furniture</a>
                </li>
                <li className={styles["nav-left_item"]}>
                    <a href="/">Toys</a>
                </li>
                <li className={styles["nav-left_item"]}>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>

        <div className={styles["nav-right"]}>
            <ul className={styles["nav-right_list"]}>
                <li className={styles["nav-right_menu"]} onClick={handleToggle}>
                    {state.email}
                </li>
                <li className={styles["nav-right_cart"]} onClick={handleToggleOrderList}>
                    <a href="/">
                        <figure className={styles["nav-right_icon"]}>
                            <Image src={choppingCart} alt="" />
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null  }
                        </figure>
                    </a>
                </li>
            </ul>
        </div>
        
        {toggle && <DesktopMenu />}
        {toggleOrderList && <OrderList />}
    </header>
            

    );
}







export default Header;