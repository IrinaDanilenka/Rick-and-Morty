import './CharactersListPage.scss';

import { useState } from 'react';

import { Search } from '@/assets';
import avatarImage from '@/assets/avatar.png';
import {
  type CharacterStatus,
  Input,
  Status as StatusBadge
} from '@/components';
import { optionsGender, optionsSpecies, optionsStatus } from '@/mockData/mock';
import { Gender, Species, Status } from '@/shared/enums';
import { CharacterCard } from '@/vidgets';

import logoMainPage from '../../assets/logo_main_page.png';
import {
  type DefaultOptionComponentProps,
  Select
} from '../../components/select/Select';

const StatusOptionComponent = ({
  option
}: DefaultOptionComponentProps<CharacterStatus>) => {
  return (
    <div className='status-option'>
      <span className='status-option__label'>{option.label}</span>
      <StatusBadge status={option.value} />
    </div>
  );
};

export function CharactersListPage() {
  const [gender, setGender] = useState<string | ''>('');
  const [species, setSpecies] = useState<string | ''>('');
  const [status, setStatus] = useState<CharacterStatus | ''>('');
  const [location, setLocation] = useState<string | ''>('');
  const [characterName, setCharacterName] = useState<string | ''>('');

  const onChangeCharacterGender = (value: string) => {
    setGender(value);
  };

  const onChangeCharacterSpecies = (value: string) => {
    setSpecies(value);
  };

  const onChangeCharacterStatus = (value: CharacterStatus) => {
    setStatus(value);
  };

  const onChangeLocation = (value: string) => {
    setLocation(value);
  };

  const onEditCharacter = () => {
    console.log('onEditCharacterCard');
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

      <div className='characters-list__filters'>
        <Select
          options={optionsGender}
          value={gender}
          placeholder='Select a gender'
          size='big'
          label='Gender'
          onChange={onChangeCharacterGender}
        />

        <Select
          options={optionsSpecies}
          value={species}
          placeholder='Select a species'
          size='big'
          label='Species'
          onChange={onChangeCharacterSpecies}
        />

        <Select
          options={optionsStatus}
          value={status}
          placeholder='Select a status'
          size='small'
          label='Status'
          OptionComponent={StatusOptionComponent}
          onChange={onChangeCharacterStatus}
        />

        <Input
          placeholder='Location'
          value={location}
          variant='underlined'
          onChange={onChangeLocation}
        />

        <Input
          placeholder='Filter by name...'
          value={characterName}
          variant='bordered'
          onChange={setCharacterName}
          icon={<Search />}
        />
      </div>

      <div className='characters-list__cards'>
        <CharacterCard
          name='Rick Sanchez'
          gender={Gender.MALE}
          species={Species.HUMAN}
          location='Earth'
          status={Status.ALIVE}
          avatar={avatarImage}
          onEdit={onEditCharacter}
        />
      </div>
    </>
  );
}
