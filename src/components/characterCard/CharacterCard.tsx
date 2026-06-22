import { CharacterCardEdit } from './CharacterCardEdit';
import { CharacterCardView } from './CharacterCardView';
import type { CharacterCardProps } from './types';

export function CharacterCard({
  name,
  gender,
  species,
  location,
  status,
  isEditMode,
  onSave
}: CharacterCardProps) {
  return isEditMode ? (
    <CharacterCardEdit
      name={name}
      gender={gender}
      species={species}
      location={location}
      status={status}
      onSave={onSave}
    />
  ) : (
    <CharacterCardView
      name={name}
      gender={gender}
      species={species}
      location={location}
      status={status}
    />
  );
}
