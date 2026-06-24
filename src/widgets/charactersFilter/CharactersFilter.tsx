import './CharactersFilter.scss';

import { useState } from 'react';

import { Search } from '@/assets';
import {
  type DefaultOptionComponentProps,
  Input,
  Select,
  Status as StatusBadge
} from '@/components';
import { optionsGender, optionsSpecies, optionsStatus } from '@/mockData/mock';
import { type Status } from '@/shared/enums';

const StatusOptionComponent = ({
  option
}: DefaultOptionComponentProps<Status>) => {
  return (
    <div className='status-option'>
      <span className='status-option__label'>{option.label}</span>
      <StatusBadge status={option.value} />
    </div>
  );
};

export function CharactersFilter() {
  const [gender, setGender] = useState<string | ''>('');
  const [species, setSpecies] = useState<string | ''>('');
  const [status, setStatus] = useState<Status | ''>('');
  const [characterName, setCharacterName] = useState<string | ''>('');

  const onChangeCharacterGender = (value: string) => {
    setGender(value);
  };

  const onChangeCharacterSpecies = (value: string) => {
    setSpecies(value);
  };

  const onChangeCharacterStatus = (value: Status) => {
    setStatus(value);
  };

  return (
    <div className='characters-list__filters'>
      <Input
        placeholder='Filter by name...'
        value={characterName}
        variant='bordered'
        onChange={setCharacterName}
        icon={<Search />}
      />

      <Select
        options={optionsSpecies}
        value={species}
        placeholder='Species'
        size='big'
        label=''
        onChange={onChangeCharacterSpecies}
      />

      <Select
        options={optionsGender}
        value={gender}
        placeholder='Gender'
        size='big'
        label=''
        onChange={onChangeCharacterGender}
      />

      <Select
        options={optionsStatus}
        value={status}
        placeholder='Status'
        size='big'
        label=''
        OptionComponent={StatusOptionComponent}
        onChange={onChangeCharacterStatus}
      />
    </div>
  );
}
