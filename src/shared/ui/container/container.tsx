import React from 'react';

import styles from './container.module.scss';

type Props = {
  children: any;
};

const Container = (props: Props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
