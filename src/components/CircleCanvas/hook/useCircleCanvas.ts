import {useCallback, useEffect, useRef} from 'react';

import {MonthType, Nullable} from '../common/types/CommonTypesForCircleCanvas';

interface useCircleCanvasParams {
  monthMarker?: MonthType,
  radius: number,
  speedY: number,
  speedX: number,
  color: string
}

interface useCircleCanvasResult {
  shouldRender: boolean,
  canvasRef:  React.MutableRefObject<Nullable<HTMLCanvasElement>>,
}

/**
 * Хук для управления анимацией снежинок на canvas.
 *
 * @param {useCircleCanvasParams} params - Параметры хука.
 * @param {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11} [params.monthMarker] - Месяц,
 * когда canvas должен быть видим. Если не указан, canvas отображается всегда.
 * @param {number} params.radius - Максимальный радиус снежинок.
 * @param {number} params.speedY - Скорость падения снежинок по вертикали.
 * @param {number} params.speedX - Скорость горизонтального движения снежинок.
 * @param {string} params.color - Цвет снежинок.
 * @returns {Object} Объект с состояниями и ссылкой для canvas.
 * @property {boolean} shouldRender - Указывает, нужно ли рендерить canvas.
 * @property {React.RefObject<HTMLCanvasElement>} canvasRef - Ссылка на элемент canvas.
 *
 * @example
 * import { useCircleCanvas } from './useCircleCanvas';
 *
 * const App = () => {
 *   const { shouldRender, canvasRef } = useCircleCanvas({
 *     monthMarker: 11, // Декабрь
 *     radius: 5,
 *     speedY: 1,
 *     speedX: 0.5,
 *     color: '#FFFFFF',
 *   });
 *
 *   if (!shouldRender) return null;
 *
 *   return <canvas ref={canvasRef} />;
 * };
 */
export const useCircleCanvas = ({
  monthMarker,
  radius,
  speedY,
  speedX,
  color,
}: useCircleCanvasParams): useCircleCanvasResult => {
  const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null);
  const circles = useRef<any[]>([]);
  const animationFrameId = useRef<Nullable<number>>(null);

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

  return {
    shouldRender,
    canvasRef,
  };
};
