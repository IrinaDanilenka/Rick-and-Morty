import { STATUS_LABELS } from '@/shared/enums';

import { Status as StatusIndicator } from '../status/Status';
import type { CharacterCardViewProps } from './types';

const formatEnumLabel = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

export function CharacterCardView({
  name,
  gender,
  species,
  location,
  status
}: CharacterCardViewProps) {
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
        <p className='character-card__field-value'>{location}</p>
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
