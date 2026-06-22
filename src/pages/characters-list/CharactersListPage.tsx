import './CharactersListPage.scss';

import { useState } from 'react';

import avatarImage from '@/assets/avatar.png';
import { Gender, Species, Status } from '@/shared/enums';
import { CharacterCard } from '@/widgets';
import { CharactersFilter } from '@/widgets/charactersFilter/CharactersFilter';

import logoMainPage from '../../assets/logo_main_page.png';

export function CharactersListPage() {
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
    <>
      <div className='characters-list'>
        <img
          src={logoMainPage}
          alt='main page logo'
          className='characters-list__logo'
        />
      </div>

      <CharactersFilter />

      <div className='characters-list__cards'>
        <CharacterCard
          name='Rick Sanchez'
          gender={Gender.MALE}
          species={Species.HUMAN}
          location='Earth'
          status={Status.ALIVE}
          avatar={avatarImage}
          isEditMode={isEditMode}
          onEdit={onEditCharacter}
          onCloseEdit={onCloseEditCharacter}
          onSave={onSaveCharacter}
        />
      </div>
    </>
  );
}
