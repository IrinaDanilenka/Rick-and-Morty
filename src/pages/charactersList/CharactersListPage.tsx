import './CharactersListPage.scss';

import { useState } from 'react';

import { logoMainPage } from '@/assets';
import { Loader } from '@/components';
import { useLoadCharacters } from '@/hooks';
import { CharacterCard, CharactersFilter } from '@/widgets';

export function CharactersListPage() {
  const { characterList, isLoading } = useLoadCharacters();
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

      <CharactersFilter />

      {isLoading ? (
        <Loader
          text='Loading characters...'
          size={475}
        />
      ) : characterList.length > 0 ? (
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
      ) : (
        <p className='characters-list__empty'>Characters list is empty...</p>
      )}
    </div>
  );
}
