import React, {ButtonHTMLAttributes, FC} from 'react';

import s from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${s.buttonContainer} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
