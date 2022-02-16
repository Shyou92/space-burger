import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Logo from 'shared/images/logo.svg';
import LogoMobile from 'shared/images/logoMobile.svg';

type Props = {
  onToggle: any;
  active: Boolean;
};

const Header = (props: Props) => {
  return (
    <section className={styles.header}>
      <div className={styles.sectionDesktop}>
        <div className={styles.sectionPanel}>
          <Link to='/construct' className={styles.construct}>
            Конструктор
          </Link>
          <Link to='/feed' className={styles.feed}>
            Лента заказов
          </Link>
        </div>
        <Link to='/'>
          <img src={Logo} alt='logo' className={styles.logo} />
        </Link>
        {/* <div className={styles.sectionPanel}> */}
        <Link to='/account' className={styles.account}>
          Личный кабинет
        </Link>
        {/* </div> */}
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
      </div>
    </section>
  );
};

export default Header;
