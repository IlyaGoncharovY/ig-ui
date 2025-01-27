import React, {HTMLAttributes, ReactNode} from 'react';
import clsx from 'clsx';

import {useInfiniteScrollWrapper} from './hook/useInfiniteScrollWrapper';

import s from './InfiniteScrollWrapper.module.css';

export interface InfiniteScrollWrapperProps<T> extends HTMLAttributes<HTMLDivElement> {
    /**
     * Дочерние элементы, которые будут обёрнуты.
     */
    children: ReactNode;
    /**
     * Функция для загрузки дополнительных данных.
     */
    loadMore: () => Promise<T>;
    /**
     * Указывает, есть ли еще данные для загрузки.
     */
    hasMore: boolean;
    /**
     * Компонент для отображения загрузчика.
     */
    loader?: ReactNode;
    /**
     * Дополнительные CSS классы для контейнера.
     */
    className?: string;
}

/**
 * InfiniteScrollWrapper компонент для организации бесконечного скролла.
 * @param {ReactNode} children - Дочерние элементы, которые будут обёрнуты.
 * @param {() => Promise<T>} loadMore - Функция для загрузки дополнительных данных.
 * @param {boolean} hasMore - Указывает, есть ли еще данные для загрузки.
 * @param {ReactNode} [loader] - Компонент для отображения загрузчика.
 * @param {string} [className] - Дополнительные классы CSS для контейнера.
 * @param {HTMLAttributes<HTMLDivElement>} props - Дополнительные атрибуты контейнера.
 * @returns {JSX.Element} Компонент обёртки с бесконечным скроллом.
 * @example
 * // Пример использования:
 * import { InfiniteScrollWrapper } from 'goncharov-ui/dist/components/InfiniteScrollWrapper';
 * import { useState } from 'react';
 *
 * const App = () => {
 *   const [hasMore, setHasMore] = useState<boolean>(true);
 *   const [data, setData] = useState<string[]>([]);
 *
 *   const fetchMoreData = async () => {
 *     const newItems = await fetch('/api/items?page=2').then((res) => res.json());
 *     setData((prev) => [...prev, ...newItems]);
 *     if (newItems.length === 0) {
 *       setHasMore(false);
 *     }
 *   };
 *
 *   return (
 *     <InfiniteScrollWrapper
 *       loadMore={fetchMoreData}
 *       hasMore={hasMore}
 *       loader={<div>Loading...</div>}
 *       className="custom-class"
 *     >
 *       <ul>
 *         {data.map((item, index) => (
 *           <li key={index}>{item}</li>
 *         ))}
 *       </ul>
 *     </InfiniteScrollWrapper>
 *   );
 * };
 */
export const InfiniteScrollWrapper = <T,>({
  children,
  loadMore,
  hasMore,
  loader,
  className,
  ...props
}: InfiniteScrollWrapperProps<T>): JSX.Element => {

  const {observerRef} = useInfiniteScrollWrapper({hasMore, loadMore});

  return (
    <div className={clsx(s.infiniteScrollContainer, className)} {...props}>
      {children}
      {hasMore && loader && <div className={clsx(s.loaderContainer, className)}>{loader}</div>}
      <div ref={observerRef} className={s.observer} />
    </div>
  );
};
