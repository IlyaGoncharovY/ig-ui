import React, {FC} from 'react';

import {useCircleCanvas} from './hook/useCircleCanvas';
import {MonthType} from './common/types/CommonTypesForCircleCanvas';

import s from './CircleCanvas.module.css';

export interface CircleCanvasProps {
    /**
     * Радиус снежинок.
     * @default {5}
     */
    radius?: number;

    /**
     * Скорость падения снежинок.
     * @default {1}
     */
    speedY?: number;

    /**
     * Горизонтальная скорость движения снежинок.
     * @default {0.5}
     */
    speedX?: number;

    /**
     * Цвет снежинок.
     * @default {'#6d6d6d'}
     */
    color?: string;

    /**
     * Месяц, когда компонент будет отрисовываться.
     * Если не указан, компонент отображается всегда.
     * @example
     * 0 === Январь
     * 1 === Февраль
     * 2 === Март
     * 3 === Апрель
     * 4 === Май
     * 5 === Июнь
     * 6 === Июль
     * 7 === Август
     * 8 === Сентябрь
     * 9 === Октябрь
     * 10 === Ноябрь
     * 11 === Декабрь
     */
    monthMarker?: MonthType;
}

/**
 * Компонент для отображения анимации снежинок поверх содержимого.
 * @param {number} [radius=5] - Радиус снежинок.
 * @param {number} [speedY=1] - Скорость падения снежинок.
 * @param {number} [speedX=0.5] - Горизонтальная скорость движения снежинок.
 * @param {string} [color='#6d6d6d'] - Цвет снежинок.
 * @param {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11} [monthMarker] - Месяц, когда компонент будет отрисовываться.
 * Если не указан, компонент отображается всегда.
 * @returns {JSX.Element | null} Canvas с анимацией снежинок.
 * @example
 * import {CircleCanvas} from "goncharov-ui/components/CircleCanvas";
 *
 * // Пример использования:
 * // props опцинальны
 * <CircleCanvas
 *   radius={5} - Радиус снежинок.
 *   speedY={1} - Скорость падения снежинок.
 *   speedX={0.5} - Горизонтальная скорость движения снежинок.
 *   color={'#6d6d6d'} - Цвет снежинок.
 *   monthMarker={4} - Месяц, когда компонент будет отрисовываться.
 *   Если не указан, компонент отображается всегда.
 * />
 */

export const CircleCanvas: FC<CircleCanvasProps> = ({
  radius = 5,
  speedY = 1,
  speedX = 0.5,
  color = '#6d6d6d',
  monthMarker,
}:CircleCanvasProps): JSX.Element | null => {

  const {shouldRender, canvasRef} = useCircleCanvas({
    monthMarker, radius, speedY, speedX, color,
  });

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      className={s.circleContainer}
    />
  );
};
