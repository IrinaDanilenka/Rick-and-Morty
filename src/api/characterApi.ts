import type { Gender, Species, Status } from '@/shared/enums';
import type { Character, CharacterFilters, CharactersResponse } from '@/shared/types';

import { apiClient } from './apiClient';

type GetCharacterListProps = CharacterFilters & {
  signal?: AbortSignal;
  page?: number;
};

const normalizeCharacter = (character: Character): Character => ({
  ...character,
  status: character.status.toLowerCase() as Status,
  gender: character.gender.toLowerCase() as Gender,
  species: character.species.toLowerCase() as Species
});

type GetCharacterProps = {
  id: number;
  signal?: AbortSignal;
};

export const getCharacter = async ({ id, signal }: GetCharacterProps) => {
  const response = await apiClient().get<Character>(`/character/${id}`, {
    signal
  });

  return normalizeCharacter(response.data);
};

export const getCharacterList = async ({
  signal,
  page = 1,
  name,
  species,
  gender,
  status
}: GetCharacterListProps) => {
  const response = await apiClient().get<CharactersResponse>('/character', {
    signal,
    params: {
      page,
      ...(name && { name }),
      ...(species && { species }),
      ...(gender && { gender }),
      ...(status && { status })
    }
  });

  return {
    ...response.data,
    results: response.data.results.map(normalizeCharacter)
  };
};
