import type { CharacterFilters, CharactersResponse } from '@/shared/types';

import { apiClient } from './apiClient';

type GetCharacterListProps = CharacterFilters & {
  signal?: AbortSignal;
};

export const getCharacterList = async ({
  signal,
  name,
  species,
  gender,
  status
}: GetCharacterListProps) => {
  const response = await apiClient().get<CharactersResponse>('/character', {
    signal,
    params: {
      ...(name && { name }),
      ...(species && { species }),
      ...(gender && { gender }),
      ...(status && { status })
    }
  });

  return response.data;
};
