import './CharactersFilter.scss';

import { Search } from '@/assets';
import {
  type DefaultOptionComponentProps,
  Input,
  Select,
  Status as StatusBadge
} from '@/components';
import { optionsGender, optionsSpecies, optionsStatus } from '@/mockData/mock';
import { type Status } from '@/shared/enums';
import type { CharacterFilters } from '@/shared/types';

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

type CharactersFilterProps = {
  filters: CharacterFilters;
  onFilterChange: (filters: CharacterFilters) => void;
};

export function CharactersFilter({
  filters,
  onFilterChange
}: CharactersFilterProps) {
  const updateFilter = <K extends keyof CharacterFilters>(
    key: K,
    value: CharacterFilters[K]
  ) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className='characters-list__filters'>
      <Input
        placeholder='Filter by name...'
        value={filters.name ?? ''}
        variant='bordered'
        onChange={(value) => updateFilter('name', value)}
        icon={<Search />}
      />

      <Select
        options={optionsSpecies}
        value={filters.species ?? ''}
        placeholder='Species'
        size='big'
        label=''
        onChange={(value) => updateFilter('species', value)}
      />

      <Select
        options={optionsGender}
        value={filters.gender ?? ''}
        placeholder='Gender'
        size='big'
        label=''
        onChange={(value) => updateFilter('gender', value)}
      />

      <Select
        options={optionsStatus}
        value={filters.status ?? ''}
        placeholder='Status'
        size='big'
        label=''
        OptionComponent={StatusOptionComponent}
        onChange={(value) => updateFilter('status', value)}
      />
    </div>
  );
}
