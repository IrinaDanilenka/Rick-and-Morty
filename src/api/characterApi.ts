import type { CharactersResponse } from "@/shared/types";

import { apiClient } from './apiClient';

export const getCharacterList = async () => {
    const response = await apiClient().get<CharactersResponse>('/character');
    return response.data;
};