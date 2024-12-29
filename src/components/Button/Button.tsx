import React, {ButtonHTMLAttributes, FC} from 'react';

import s from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

/**
 * Button компонент для повторного использования элементов пользовательского интерфейса.
 * @param {React.ReactNode} children - Содержимое, отображаемое внутри кнопки.
 * @param {string} [className] - Дополнительные классы CSS для стилизации.
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props - Дополнительные атрибуты кнопок.
 * @returns {JSX.Element} Стилизованный компонент кнопки.
 * @example
 * // Пример использования:
 * import { Button } from "goncharov-ui"
 * <Button onClick={() => console.log('Clicked!')}>Click Me</Button>
 */
export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${s.buttonContainer} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
