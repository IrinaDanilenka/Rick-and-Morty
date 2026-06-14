import { Gender, Species, Status } from '@/shared/enums';

export const optionsStatus: { label: string; value: Status }[] = [
  { label: 'Alive', value: Status.ALIVE },
  { label: 'Dead', value: Status.DEAD },
  { label: 'Unknown', value: Status.UNKNOWN }
];

export const optionsGender: { label: string; value: Gender }[] = [
  { label: 'Female', value: Gender.FEMALE },
  { label: 'Male', value: Gender.MALE },
  { label: 'Genderless', value: Gender.GENDERLESS },
  { label: 'Unknown', value: Gender.UNKNOWN }
];

export const optionsSpecies: { label: string; value: Species }[] = [
  { label: 'Human', value: Species.HUMAN },
  { label: 'Alien', value: Species.ALIEN },
  { label: 'Humanoid', value: Species.HUMANOID },
  { label: 'Animal', value: Species.ANIMAL },
  { label: 'Robot', value: Species.ROBOT }
];
