import { Status as StatusIndicator } from '@/components';
import { STATUS_LABELS } from '@/shared/enums';

import type { CharacterCardViewProps } from './types';

const formatEnumLabel = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

export function CharacterCardView({ character }: CharacterCardViewProps) {
  const { name, gender, species, status, location } = character;

  return (
    <div className='character-card__body'>
      <h6 className='character-card__name'>{name}</h6>

      <div className='character-card__field'>
        <p className='character-card__field-label'>Gender</p>
        <p className='character-card__field-value'>{formatEnumLabel(gender)}</p>
      </div>

      <div className='character-card__field'>
        <p className='character-card__field-label'>Species</p>
        <p className='character-card__field-value'>
          {formatEnumLabel(species)}
        </p>
      </div>

      <div className='character-card__field'>
        <p className='character-card__field-label'>Location</p>
        <p className='character-card__field-value'>{location.name}</p>
      </div>

      <div className='character-card__field'>
        <p className='character-card__field-label'>Status</p>
        <p className='character-card__field-value character-card__field-value--status'>
          <span>{STATUS_LABELS[status]}</span>
          <StatusIndicator status={status} />
        </p>
      </div>
    </div>
  );
}
