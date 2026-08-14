import './CharactersListPage.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router';

import { logoMainPage } from '@/assets';
import {
  type CharacterCardFormValues,
  InfiniteScroll,
  Loader
} from '@/components';
import { useLoadCharacters } from '@/hooks';
import type { Character, CharacterFilters } from '@/shared/types';
import { CharacterCard, CharactersFilter } from '@/widgets';

const initialFilters: CharacterFilters = {};

export function CharactersListPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<CharacterFilters>(initialFilters);
  const {
    characterList,
    hasMore,
    isInitialLoading,
    isLoadingMore,
    loadMore,
    updateCharacter
  } = useLoadCharacters(filters);
  const [editingCharacterId, setEditingCharacterId] = useState<number | null>(
    null
  );

  const onEditCharacter = (id: number) => {
    setEditingCharacterId(id);
  };

  const onCloseEditCharacter = () => {
    setEditingCharacterId(null);
  };

  const onSaveCharacter = (
    character: Character,
    values: CharacterCardFormValues
  ) => {
    updateCharacter(character.id, {
      name: values.name,
      gender: values.gender,
      species: values.species,
      status: values.status,
      location: { ...character.location, name: values.location }
    });
    setEditingCharacterId(null);
  };

  return (
    <div className='characters-list'>
      <img
        src={logoMainPage}
        alt='main page logo'
        className='characters-list__logo'
      />

      <CharactersFilter
        filters={filters}
        onFilterChange={setFilters}
      />

      {isInitialLoading ? (
        <Loader
          text='Loading characters...'
          size={475}
        />
      ) : characterList.length > 0 ? (
        <InfiniteScroll
          hasMore={hasMore}
          isLoadingMore={isLoadingMore}
          onLoadMore={loadMore}
        >
          <div className='characters-list__cards'>
            {characterList.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isEditMode={editingCharacterId === character.id}
                onEdit={() => onEditCharacter(character.id)}
                onCloseEdit={onCloseEditCharacter}
                onSave={(values) => onSaveCharacter(character, values)}
                onNameClick={() => navigate(`/character/${character.id}`)}
              />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <p className='characters-list__empty'>Characters list is empty...</p>
      )}
    </div>
  );
}
