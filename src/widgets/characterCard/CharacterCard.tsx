import './CharacterCard.scss';

import { Check, Cross, Edit } from '@/assets';
import {
  CharacterCard as CharacterCardComponent,
  type CharacterCardFormValues,
  getCharacterFormId
} from '@/components';
import type { Character } from '@/shared/types';

export type CharacterCardWidgetProps = {
  character: Character;
  isEditMode: boolean;
  onEdit: () => void;
  onCloseEdit: () => void;
  onSave: (values: CharacterCardFormValues) => void;
  onNameClick: () => void;
};

export function CharacterCard({
  character,
  isEditMode,
  onEdit,
  onCloseEdit,
  onSave,
  onNameClick
}: CharacterCardWidgetProps) {
  const { id, name, image } = character;

  return (
    <article className='character-card'>
      <img
        src={image}
        alt={name}
        className='character-card__avatar'
      />

      <CharacterCardComponent
        character={character}
        isEditMode={isEditMode}
        onSave={onSave}
        onNameClick={onNameClick}
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
            type='submit'
            form={getCharacterFormId(id)}
            className='character-card__action character-card__action--save'
            aria-label={`Save ${name}`}
          >
            <Check aria-hidden />
          </button>
        </div>
      )}
    </article>
  );
}
