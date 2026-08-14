import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { getCharacter } from '@/api';
import { showErrorToast } from '@/components';
import type { Character } from '@/shared/types';

export function useLoadCharacter(id: number | null) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (id === null) {
      return;
    }

    const controller = new AbortController();

    const loadCharacter = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const data = await getCharacter({ id, signal: controller.signal });

        setCharacter(data);
      } catch (error) {
        if (isAxiosError(error) && error.code === 'ERR_CANCELED') {
          return;
        }

        setCharacter(null);
        setHasError(true);
        showErrorToast('Ошибка', 'Не удалось загрузить данные персонажа');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadCharacter();

    return () => {
      controller.abort();
    };
  }, [id]);

  if (id === null) {
    return { character: null, isLoading: false, hasError: true };
  }

  return { character, isLoading, hasError };
}
