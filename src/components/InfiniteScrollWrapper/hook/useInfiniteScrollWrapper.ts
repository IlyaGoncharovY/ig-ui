import {useEffect, useRef} from 'react';

import {Nullable} from '../common/types/CommonTypesForInfiniteScrollWrapper';

interface useInfiniteScrollWrapperParams<T> {
    hasMore: boolean,
    loadMore: () => Promise<T>
}

interface useInfiniteScrollWrapperResult {
    observerRef: React.MutableRefObject<Nullable<HTMLDivElement>>
}

/**
 * Хук для организации бесконечного скролла.
 * @template T - Тип данных, которые загружаются.
 * @param {useInfiniteScrollWrapperParams<T>} params - Параметры для настройки хука.
 * @returns {Object} Объект с ссылкой для наблюдателя.
 * @property {React.RefObject<HTMLDivElement>} observerRef - Ссылка на наблюдаемый элемент.
 *
 * @example
 * const { observerRef } = useInfiniteScrollWrapper({
 *   hasMore: true,
 *   loadMore: async () => fetchMoreData(),
 * });
 */
export const useInfiniteScrollWrapper = <T>({
  hasMore,
  loadMore,
}: useInfiniteScrollWrapperParams<T>): useInfiniteScrollWrapperResult => {

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = observerRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loadMore, hasMore]);

  return {
    observerRef,
  };
};
