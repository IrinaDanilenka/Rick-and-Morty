import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { getCharacterList } from '@/api';
import { showErrorToast } from '@/components';
import type { Character, CharacterFilters } from '@/shared/types';

export function useLoadCharacters(filters: CharacterFilters = {}) {
  const { name, species, gender, status } = filters;
  const [isLoading, setIsLoading] = useState(true);
  const [characterList, setCharacterList] = useState<Character[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const loadCharacterList = async () => {
      setIsLoading(true);

      try {
        const data = await getCharacterList({
          signal: controller.signal,
          name,
          species,
          gender,
          status
        });
        setCharacterList(data.results);
      } catch (error) {
        if (isAxiosError(error) && error.code === 'ERR_CANCELED') {
          return;
        }

        setCharacterList([]);
        showErrorToast(
          'Ошибка',
          'Не удалось загрузить список персонажей'
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadCharacterList();

    return () => controller.abort();
  }, [name, species, gender, status]);

  return { characterList, isLoading };
}
