import React, { ChangeEvent, useState, FC } from 'react';

import s from './AnimateBG.module.css';

export interface AnimateBGProps {
    /**
     * Количество символов в input и делитель.
     */
    inputLength?: number;
    /**
     * Цвет фона для заполнения bg.
     */
    backgroundColor?: string;
    /**
     * Тип инпута.
     */
    inputType?: React.HTMLInputTypeAttribute;
    /**
     * Кастомный компонент для ввода.
     */
    customInput?: React.ReactElement<{
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
        maxLength: number;
    }>;
}

/**
 * AnimateBG компонент для интерактивного ввода фоновой анимации.
 * @param {number} [inputLength=4] - Максимальная длина поля ввода.
 * @param {string} [backgroundColor='#4a4a4a'] - Цвет фона анимированной панели.
 * @param {React.HTMLInputTypeAttribute} [inputType='text'] - Тип поля ввода.
 * @param {React.ReactElement} [customInput] - Кастомный компонент для ввода.
 * @returns {JSX.Element} Контейнер для ввода анимированного фона.
 * @example
 * import { AnimateBG } from "goncharov-ui/AnimateBG";
 *
 * // Пример использования с кастомным input:
 * <AnimateBG
 *   inputLength={8}
 *   backgroundColor="pink"
 *   customInput={<input className="custom-input" placeholder="Custom input" />}
 * />
 *
 * // Стандартный input:
 * <AnimateBG inputLength={10} backgroundColor="lightblue" inputType="text" />
 */
export const AnimateBG: FC<AnimateBGProps> = ({
  inputLength = 4,
  backgroundColor = '#4a4a4a',
  inputType = 'text',
  customInput,
}: AnimateBGProps): JSX.Element => {
  const [currentLength, setCurrentLength] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentLength(e.currentTarget.value.length);
  };

  return (
    <div
      className={s.animateBgContainer}
      style={{
        '--background-width': `${(currentLength / inputLength) * 100}%`,
        '--background-color': backgroundColor,
      } as React.CSSProperties}
    >
      {customInput ? (
        React.cloneElement(customInput, {
          onChange: handleChange,
          maxLength: inputLength,
        })
      ) : (
        <input
          type={inputType}
          maxLength={inputLength}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
