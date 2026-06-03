import './CharacterCard.scss';

import { Edit } from '@/assets';
import { Status as StatusIndicator } from '@/components';
import { Gender, Species, Status, STATUS_LABELS } from '@/shared/enums';

export type CharacterCardProps = {
  name: string;
  gender: Gender;
  species: Species;
  location: string;
  status: Status;
  avatar: string;
  onEdit: () => void;
};

const formatEnumLabel = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

export function CharacterCard({
  name,
  gender,
  species,
  location,
  status,
  avatar,
  onEdit
}: CharacterCardProps) {
  return (
    <article className='character-card'>
      <img
        src={avatar}
        alt={name}
        className='character-card__avatar'
      />

      <div className='character-card__body'>
        <h6 className='character-card__name'>{name}</h6>

        <div className='character-card__field'>
          <p className='character-card__field-label'>Gender</p>
          <p className='character-card__field-value'>
            {formatEnumLabel(gender)}
          </p>
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

      <button
        type='button'
        className='character-card__edit'
        aria-label={`Edit ${name}`}
        onClick={onEdit}
      >
        <Edit aria-hidden />
      </button>
    </article>
  );
}
