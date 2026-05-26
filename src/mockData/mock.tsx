import type { CharacterStatus } from '@/components/status/Status';

export const optionsStatus: { label: string; value: CharacterStatus }[] = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' }
];

export const optionsGender: { label: string; value: string }[] = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Genderless', value: 'genderless' },
  { label: 'Unknown', value: 'unknown' }
];

export const optionsSpecies: { label: string; value: string }[] = [
  { label: 'Human', value: 'human' },
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' }
];
