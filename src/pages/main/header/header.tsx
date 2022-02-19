import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Logo from 'shared/images/logo.svg';
import LogoMobile from 'shared/images/logoMobile.svg';
import Construct from 'shared/images/construct.svg';
import Feed from 'shared/images/feed.svg';
import Account from 'shared/images/account.svg';
import Navbar from './navbar/navbar';
import Navlink from 'shared/ui/Link/Link';
import { Link } from 'react-router-dom';

type Props = {
  onToggle: any;
  active: Boolean;
};

const Header = (props: Props) => {
  return (
    <section className={styles.header}>
      <div className={styles.sectionDesktop}>
        <div className={styles.sectionPanel}>
          <Navlink to='/construct' src={Construct} text='Конструктор' />
          <Navlink to='/feed' src={Feed} text='Лента&nbsp;заказов' />
        </div>
        <Link to='/'>
          <img src={Logo} alt='logo' className={styles.logo} />
        </Link>
        <Navlink to='/account' src={Account} text='Личный кабинет' />
      </div>
      <div className={styles.sectionMobile}>
        <Link to='/'>
          <img src={LogoMobile} alt='logo' className={styles.logoMobile} />
        </Link>
        <button
          className={
            props.active
              ? `${styles.burger} ${styles.active}`
              : `${styles.burger}`
          }
          onClick={props.onToggle}
          id='burger'
          aria-label='Open menu'
        >
          <span></span>
        </button>
        <Navbar />
      </div>
    </section>
  );
};

export default Header;
