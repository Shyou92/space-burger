import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Main = (props: Props) => {
  return <section>{props.children}</section>;
};

export default Main;
