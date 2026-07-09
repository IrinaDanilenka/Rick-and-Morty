import type { Gender, Species, Status } from '@/shared/enums';

export interface CharacterLocation {
    name: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: CharacterLocation;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharactersResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export type CharacterFilters = {
    name?: string;
    species?: Species;
    gender?: Gender;
    status?: Status;
};