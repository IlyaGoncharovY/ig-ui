import React, { ChangeEvent, useState, FC } from 'react';

import s from './AnimateBG.module.css';

export interface AnimateBGProps {
    inputLength?: number;
    backgroundColor?: string;
    inputType?: React.HTMLInputTypeAttribute;
}

/**
 * AnimateBG компонент для интерактивного ввода фоновой анимации.
 * @param {number} [inputLength=4] - Максимальная длина поля ввода.
 * @param {string} [backgroundColor='goldenrod'] - Цвет фона анимированной панели.
 * @param {React.HTMLInputTypeAttribute} [inputType='text'] - Тип поля ввода.
 * @returns {JSX.Element} Контейнер для ввода анимированного фона.
 * @example
 * // Пример использования:
 * import { AnimateBG } from "goncharov-ui"
 * <AnimateBG inputLength={8} backgroundColor="#6d6d6d" inputType="number" />
 */
export const AnimateBG: FC<AnimateBGProps> = ({
  inputLength = 4,
  backgroundColor = '#4a4a4a',
  inputType = 'text',
}: AnimateBGProps): JSX.Element => {
  const [currentLength, setCurrentLength] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentLength(e.currentTarget.value.length);
  };

  return (
    <div
      className={s.animateBgContainer}
      style={
                {
                  '--background-width': `${(currentLength / inputLength) * 100}%`,
                  '--background-color': backgroundColor,
                } as React.CSSProperties
      }
    >
      <input
        type={inputType}
        maxLength={inputLength}
        onChange={handleChange}
      />
    </div>
  );
};
