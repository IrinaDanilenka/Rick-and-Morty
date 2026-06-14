import { useForm } from 'react-hook-form';

import { optionsGender, optionsSpecies, optionsStatus } from '@/mockData/mock';
import { Gender, Species, type Status } from '@/shared/enums';

import { FormInput } from '../formInput/FormInput';
import { FormSelect } from '../formSelect/FormSelect';
import { type DefaultOptionComponentProps } from '../select/Select';
import { Status as StatusIndicator } from '../status/Status';
import type { CharacterCardEditProps, CharacterCardFormValues } from './types';

const StatusOptionComponent = ({
  option
}: DefaultOptionComponentProps<Status>) => {
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
      <FormInput
        name='name'
        control={control}
        placeholder='Name'
        variant='underlined'
        className='character-card__name-input'
      />

      <div className='character-card__field'>
        <FormSelect<CharacterCardFormValues, Gender>
          name='gender'
          control={control}
          options={optionsGender}
          placeholder='Gender'
          size='small'
          label='Gender'
          className='character-card__field-select'
        />
      </div>

      <div className='character-card__field'>
        <FormSelect<CharacterCardFormValues, Species>
          name='species'
          control={control}
          options={optionsSpecies}
          placeholder='Species'
          size='small'
          label='Species'
          className='character-card__field-select'
        />
      </div>

      <div className='character-card__field'>
        <p className='character-card__field-label'>Location</p>
        <FormInput
          name='location'
          control={control}
          placeholder='Location'
          variant='underlined'
          className='character-card__field-input'
        />
      </div>

      <div className='character-card__field'>
        <FormSelect<CharacterCardFormValues, Status>
          name='status'
          control={control}
          options={optionsStatus}
          placeholder='Status'
          size='small'
          label='Status'
          className='character-card__field-select'
          OptionComponent={StatusOptionComponent}
        />
      </div>
    </form>
  );
}
