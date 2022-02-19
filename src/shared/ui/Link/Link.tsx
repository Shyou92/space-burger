import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './link.module.scss';

type Props = {
  to: string;
  src?: string;
  text?: string;
  className?: string;
  children?: ReactNode;
};

const Navlink = (props: Props) => {
  const classes = classNames(styles.account, props.className);
  return (
    <div>
      <NavLink to={props.to} className={classes}>
        <img src={props.src} className={styles.linkImage} alt='' />
        {props.text}
        {props.children}
      </NavLink>
    </div>
  );
};

export default Navlink;
