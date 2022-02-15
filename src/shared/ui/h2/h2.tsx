import React from 'react';
import classNames from 'classnames';
import style from './h2.module.scss';

type Props = {
  text: string;
  className?: string;
};

const H2 = (props: Props) => {
  const classes = classNames(style.title, props.className);

  return <h2 className={classes}>{props.text}</h2>;
};

export default H2;
