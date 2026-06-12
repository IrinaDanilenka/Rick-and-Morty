import { Controller, useForm } from 'react-hook-form';

import { type CharacterStatus, Status as StatusIndicator } from '@/components';
import {
  type DefaultOptionComponentProps,
  Select
} from '@/components/select/Select';
import { optionsGender, optionsSpecies, optionsStatus } from '@/mockData/mock';

import { Input } from '../input/Input';
import type { CharacterCardEditProps, CharacterCardFormValues } from './types';

const StatusOptionComponent = ({
  option
}: DefaultOptionComponentProps<CharacterStatus>) => {
  return (
    <div className='status-option'>
      <span className='status-option__label'>{option.label}</span>
      <StatusIndicator status={option.value} />
    </div>
  );
};

export function CharacterCardEdit({
  name,
  gender,
  species,
  location,
  status,
  onSave
}: CharacterCardEditProps) {
  const { control, handleSubmit } = useForm<CharacterCardFormValues>({
    defaultValues: { name, gender, species, location, status }
  });

  return (
    <form
      className='character-card__body character-card__body--edit'
      onSubmit={handleSubmit(() => onSave())}
    >
      <Controller
        name='name'
        control={control}
        render={({ field }) => (
          <Input
            placeholder='Name'
            value={field.value}
            onChange={field.onChange}
            variant='underlined'
            className='character-card__name-input'
          />
        )}
      />

      <div className='character-card__field'>
        <Controller
          name='gender'
          control={control}
          render={({ field }) => (
            <Select
              options={optionsGender}
              value={field.value}
              onChange={field.onChange}
              placeholder='Gender'
              size='small'
              label='Gender'
              className='character-card__field-select'
            />
          )}
        />
      </div>

      <div className='character-card__field'>
        <Controller
          name='species'
          control={control}
          render={({ field }) => (
            <Select
              options={optionsSpecies}
              value={field.value}
              onChange={field.onChange}
              placeholder='Species'
              size='small'
              label='Species'
              className='character-card__field-select'
            />
          )}
        />
      </div>

      <div className='character-card__field'>
        <p className='character-card__field-label'>Location</p>
        <Controller
          name='location'
          control={control}
          render={({ field }) => (
            <Input
              placeholder='Location'
              value={field.value}
              onChange={field.onChange}
              variant='underlined'
              className='character-card__field-input'
            />
          )}
        />
      </div>

      <div className='character-card__field'>
        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <Select
              options={optionsStatus}
              value={field.value}
              onChange={field.onChange}
              placeholder='Status'
              size='small'
              label='Status'
              className='character-card__field-select'
              OptionComponent={StatusOptionComponent}
            />
          )}
        />
      </div>
    </form>
  );
}
