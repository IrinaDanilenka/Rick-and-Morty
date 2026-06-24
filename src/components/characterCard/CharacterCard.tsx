import { CharacterCardEdit } from './CharacterCardEdit';
import { CharacterCardView } from './CharacterCardView';
import type { CharacterCardProps } from './types';

export function CharacterCard({
  character,
  isEditMode,
  onSave
}: CharacterCardProps) {
  return isEditMode ? (
    <CharacterCardEdit
      character={character}
      onSave={onSave}
    />
  ) : (
    <CharacterCardView character={character} />
  );
}
