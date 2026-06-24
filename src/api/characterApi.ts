import { apiClient } from '@/api/apiClient';
import type { CharactersResponse } from "@/shared/types";

export const getCharacterList = async () => {
    const response = await apiClient().get<CharactersResponse>('/character');
    return response.data;
};