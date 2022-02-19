import React from 'react';
import H2 from 'shared/ui/h2/h2';
import Navlink from 'shared/ui/Link/Link';
import styles from './navbar.module.scss';
import Account from 'shared/images/account.svg';
import Construct from 'shared/images/construct.svg';
import Feed from 'shared/images/feed.svg';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <section className={styles.overlay}>
      <H2 text={'Меню'} />
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <Navlink to='/account' src={Account} text='Личный кабинет'>
            <ul className={styles.navbarSubList}>
              <Navlink to='/account' src={Account} text='Профиль' />
              <Navlink to='/account' src={Account} text='История заказов' />
              <Navlink to='/account' src={Account} text='Выход' />
            </ul>
          </Navlink>
          <Navlink to='/account' src={Construct} text='Конструктор бургеров' />
          <Navlink to='/account' src={Feed} text='Лента заказов' />
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
