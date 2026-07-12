import './CharactersListPage.scss';

import { useState } from 'react';

import { logoMainPage } from '@/assets';
import { InfiniteScroll, Loader } from '@/components';
import { useLoadCharacters } from '@/hooks';
import type { CharacterFilters } from '@/shared/types';
import { CharacterCard, CharactersFilter } from '@/widgets';

const initialFilters: CharacterFilters = {};

export function CharactersListPage() {
  const [filters, setFilters] = useState<CharacterFilters>(initialFilters);
  const {
    characterList,
    hasMore,
    isInitialLoading,
    isLoadingMore,
    loadMore
  } = useLoadCharacters(filters);
  const [isEditMode, setIsEditMode] = useState(false);

  const onEditCharacter = () => {
    setIsEditMode(true);
  };

  const onCloseEditCharacter = () => {
    setIsEditMode(false);
  };

  const onSaveCharacter = () => {
    setIsEditMode(false);
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
                isEditMode={isEditMode}
                onEdit={onEditCharacter}
                onCloseEdit={onCloseEditCharacter}
                onSave={onSaveCharacter}
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
