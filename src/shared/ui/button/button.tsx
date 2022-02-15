import React from 'react';
import classNames from 'classnames';
import style from './button.module.scss';

interface Props {
  onClick?: Function;
  text: string;
  disabled?: Boolean;
  className?: string;
}

const Button = (props: Props) => {
  const onClickAction = (event: React.MouseEvent) => {
    if (props.disabled) {
      event.preventDefault();
    }
    if (props.onClick) return props.onClick(event);
  };

  const classes = classNames(style.button, props.className);

  return (
    <button onClick={onClickAction} className={classes}>
      {props.text}
    </button>
  );
};

export default Button;
