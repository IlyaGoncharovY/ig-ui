import React, {ButtonHTMLAttributes, FC} from 'react';
import clsx from 'clsx';

import s from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Дополнительные CSS классы для кнопки.
     */
    className?: string;
    /**
     * Размер кнопки: small, medium или large.
     */
    size?: 'small' | 'medium' | 'large';
}

/**
 * Button компонент для повторного использования элементов пользовательского интерфейса.
 * @param {React.ReactNode} children - Содержимое, отображаемое внутри кнопки.
 * @param {string} [className] - Дополнительные классы CSS для стилизации.
 * @param {'small' | 'medium' | 'large'} [size='medium'] - Размер кнопки.
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props - Дополнительные атрибуты кнопок.
 * @returns {JSX.Element} Стилизованный компонент кнопки.
 * @example
 * // Пример использования:
 * import {Button} from "goncharov-ui/dist/components/Button";
 * <Button size="large" onClick={() => console.log('Clicked!')}>
 *   Click Me
 * </Button>
 */
export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  size = 'medium',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(s.buttonContainer, s[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
