import { isAxiosError } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

import { getCharacterList } from '@/api';
import { showErrorToast } from '@/components';
import type { Character, CharacterFilters } from '@/shared/types';

const getFiltersKey = (filters: CharacterFilters) =>
  [filters.name, filters.species, filters.gender, filters.status].join('|');

export function useLoadCharacters(filters: CharacterFilters = {}) {
  const filtersKeyRef = useRef(getFiltersKey(filters));
  const pageRef = useRef(1);
  const isLoadingMoreRef = useRef(false);
  const loadMoreBlockedRef = useRef(false);
  const loadMoreControllerRef = useRef<AbortController | null>(null);

  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const { name, species, gender, status } = filters;
    const requestFiltersKey = getFiltersKey(filters);

    filtersKeyRef.current = requestFiltersKey;
    pageRef.current = 1;
    isLoadingMoreRef.current = false;
    loadMoreBlockedRef.current = false;
    loadMoreControllerRef.current?.abort();

    const controller = new AbortController();

    const loadFirstPage = async () => {
      setIsInitialLoading(true);
      setIsLoadingMore(false);
      setCharacterList([]);
      setHasMore(true);

      try {
        const data = await getCharacterList({
          signal: controller.signal,
          page: 1,
          name,
          species,
          gender,
          status
        });

        if (requestFiltersKey !== filtersKeyRef.current) {
          return;
        }

        setCharacterList(data.results);
        setHasMore(data.info.next !== null);
        pageRef.current = 1;
      } catch (error) {
        if (isAxiosError(error) && error.code === 'ERR_CANCELED') {
          return;
        }

        if (requestFiltersKey !== filtersKeyRef.current) {
          return;
        }

        setCharacterList([]);
        setHasMore(false);
        showErrorToast(
          'Ошибка',
          'Не удалось загрузить список персонажей'
        );
      } finally {
        if (!controller.signal.aborted && requestFiltersKey === filtersKeyRef.current) {
          setIsInitialLoading(false);
        }
      }
    };

    loadFirstPage();

    return () => {
      controller.abort();
      loadMoreControllerRef.current?.abort();
    };
  }, [filters]);

  const loadMore = useCallback(async () => {
    if (
      !hasMore ||
      isInitialLoading ||
      isLoadingMoreRef.current ||
      loadMoreBlockedRef.current
    ) {
      return;
    }

    const { name, species, gender, status } = filters;
    const requestFiltersKey = filtersKeyRef.current;
    const nextPage = pageRef.current + 1;

    isLoadingMoreRef.current = true;
    setIsLoadingMore(true);
    pageRef.current = nextPage;

    loadMoreControllerRef.current?.abort();
    const controller = new AbortController();
    loadMoreControllerRef.current = controller;

    try {
      const data = await getCharacterList({
        signal: controller.signal,
        page: nextPage,
        name,
        species,
        gender,
        status
      });

      if (controller.signal.aborted || requestFiltersKey !== filtersKeyRef.current) {
        return;
      }

      setCharacterList((prev) => [...prev, ...data.results]);
      setHasMore(data.info.next !== null);
    } catch (error) {
      if (isAxiosError(error) && error.code === 'ERR_CANCELED') {
        return;
      }

      if (requestFiltersKey !== filtersKeyRef.current) {
        return;
      }

      pageRef.current = nextPage - 1;

      if (isAxiosError(error) && error.response?.status === 404) {
        setHasMore(false);
        return;
      }

      loadMoreBlockedRef.current = true;
      window.setTimeout(() => {
        loadMoreBlockedRef.current = false;
      }, 2000);

      showErrorToast(
        'Ошибка',
        'Не удалось загрузить список персонажей'
      );
    } finally {
      if (!controller.signal.aborted && requestFiltersKey === filtersKeyRef.current) {
        isLoadingMoreRef.current = false;
        setIsLoadingMore(false);
      }
    }
  }, [filters, hasMore, isInitialLoading]);

  return {
    characterList,
    hasMore,
    isInitialLoading,
    isLoadingMore,
    loadMore
  };
}
