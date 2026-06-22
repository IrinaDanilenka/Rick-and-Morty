import { Gender, Species, Status } from '@/shared/enums';

export type CharacterCardData = {
  name: string;
  gender: Gender;
  species: Species;
  location: string;
  status: Status;
};

export type CharacterCardFormValues = CharacterCardData;

export type CharacterCardProps = CharacterCardData & {
  isEditMode: boolean;
  onSave: () => void;
};

export type CharacterCardViewProps = CharacterCardData;

export type CharacterCardEditProps = CharacterCardData & {
  onSave: () => void;
};
