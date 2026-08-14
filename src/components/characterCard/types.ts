import type { Gender, Species, Status } from '@/shared/enums';
import type { Character } from '@/shared/types';

export type CharacterCardFormValues = {
  name: string;
  gender: Gender;
  species: Species;
  location: string;
  status: Status;
};

export type CharacterCardProps = {
  character: Character;
  isEditMode: boolean;
  onSave: (values: CharacterCardFormValues) => void;
  onNameClick: () => void;
};

export type CharacterCardViewProps = {
  character: Character;
  onNameClick: () => void;
};

export type CharacterCardEditProps = {
  character: Character;
  onSave: (values: CharacterCardFormValues) => void;
};
