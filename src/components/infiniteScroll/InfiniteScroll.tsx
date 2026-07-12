import './InfiniteScroll.scss';

import { useEffect, useRef } from 'react';

import { Loader } from '../loader/Loader';

type InfiniteScrollProps = {
  children: React.ReactNode;
  hasMore: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
};

const ROOT_MARGIN_PX = 200;

const isNearViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();

  return rect.top <= window.innerHeight + ROOT_MARGIN_PX;
};

export function InfiniteScroll({
  children,
  hasMore,
  isLoadingMore,
  onLoadMore
}: InfiniteScrollProps) {
  const loadTriggerRef = useRef<HTMLDivElement>(null);
  const onLoadMoreRef = useRef(onLoadMore);
  const isLoadingMoreRef = useRef(isLoadingMore);
  const wasIntersectingRef = useRef(false);

  useEffect(() => {
    onLoadMoreRef.current = onLoadMore;
  }, [onLoadMore]);

  useEffect(() => {
    isLoadingMoreRef.current = isLoadingMore;
  }, [isLoadingMore]);

  useEffect(() => {
    if (!hasMore) {
      wasIntersectingRef.current = false;
      return;
    }

    const loadTrigger = loadTriggerRef.current;

    if (!loadTrigger) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = Boolean(entries[0]?.isIntersecting);

        if (
          isIntersecting &&
          !wasIntersectingRef.current &&
          !isLoadingMoreRef.current
        ) {
          onLoadMoreRef.current();
        }

        wasIntersectingRef.current = isIntersecting;
      },
      {
        rootMargin: `${ROOT_MARGIN_PX}px`
      }
    );

    observer.observe(loadTrigger);

    return () => observer.disconnect();
  }, [hasMore]);

  useEffect(() => {
    if (!hasMore || isLoadingMore) {
      return;
    }

    const loadTrigger = loadTriggerRef.current;

    if (!loadTrigger) {
      return;
    }

    const frameId = requestAnimationFrame(() => {
      if (isLoadingMoreRef.current || !isNearViewport(loadTrigger)) {
        return;
      }

      onLoadMoreRef.current();
    });

    return () => cancelAnimationFrame(frameId);
  }, [hasMore, isLoadingMore]);

  return (
    <div className='infinite-scroll'>
      {children}

      {hasMore && (
        <div
          ref={loadTriggerRef}
          className='infinite-scroll__load-trigger'
          aria-hidden='true'
        />
      )}

      {isLoadingMore && (
        <div className='infinite-scroll__loader'>
          <Loader size={120} />
        </div>
      )}
    </div>
  );
}
