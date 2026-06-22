import './CharacterCard.scss';

import { Check, Cross, Edit } from '@/assets';
import { CharacterCard as CharacterCardComponent } from '@/components';
import type { CharacterCardProps as CharacterCardComponentProps } from '@/components/characterCard/types';

export type CharacterCardWidgetProps = CharacterCardComponentProps & {
  avatar: string;
  onEdit: () => void;
  onCloseEdit: () => void;
};

export function CharacterCard({
  name,
  gender,
  species,
  location,
  status,
  avatar,
  isEditMode,
  onEdit,
  onCloseEdit,
  onSave
}: CharacterCardWidgetProps) {
  return (
    <article className='character-card'>
      <img
        src={avatar}
        alt={name}
        className='character-card__avatar'
      />

      <CharacterCardComponent
        name={name}
        gender={gender}
        species={species}
        location={location}
        status={status}
        isEditMode={isEditMode}
        onSave={onSave}
      />

      {!isEditMode ? (
        <button
          type='button'
          className='character-card__edit'
          aria-label={`Edit ${name}`}
          onClick={onEdit}
        >
          <Edit aria-hidden />
        </button>
      ) : (
        <div className='character-card__actions'>
          <button
            type='button'
            className='character-card__action character-card__action--cancel'
            aria-label={`Cancel editing ${name}`}
            onClick={onCloseEdit}
          >
            <Cross aria-hidden />
          </button>
          <button
            type='button'
            className='character-card__action character-card__action--save'
            aria-label={`Save ${name}`}
            onClick={onSave}
          >
            <Check aria-hidden />
          </button>
        </div>
      )}
    </article>
  );
}
