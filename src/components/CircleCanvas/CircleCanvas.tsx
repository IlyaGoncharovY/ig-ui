import React, {FC, useCallback, useEffect, useRef} from 'react';

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
    monthMarker?: number;
}

/**
 * Компонент для отображения анимации снежинок поверх содержимого.
 * @param {number} [radius=5] - Радиус снежинок.
 * @param {number} [speedY=1] - Скорость падения снежинок.
 * @param {number} [speedX=0.5] - Горизонтальная скорость движения снежинок.
 * @param {string} [color='#6d6d6d'] - Цвет снежинок.
 * @param {number} [monthMarker] - Месяц, когда компонент будет отрисовываться.
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const circles = useRef<any[]>([]);
  const animationFrameId = useRef<number | null>(null);

  // Условный рендеринг в зависимости от месяца
  const currentMonth = new Date().getMonth();
  const shouldRender = monthMarker === undefined || monthMarker === currentMonth;

  const createCircle = useCallback(() => ({
    x: Math.random() * window.innerWidth,
    y: -50,
    radius: Math.random() * radius + 5,
    speedY: Math.random() * speedY,
    speedX: Math.random() * speedX,
    offsetX: 0,
  }), [radius, speedY, speedX]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    circles.current.forEach((circle) => {
      circle.y += circle.speedY;
      circle.offsetX += circle.speedX;
      circle.x += Math.sin(circle.offsetX / 50) * 2;

      context.beginPath();
      context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();
      context.closePath();
    });

    circles.current = circles.current.filter(
      (circle) => circle.y < window.innerHeight + 50,
    );

    if (Math.random() < 0.02) {
      circles.current.push(createCircle());
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, [color, createCircle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [shouldRender, animate]);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      className={s.circleContainer}
    />
  );
};
