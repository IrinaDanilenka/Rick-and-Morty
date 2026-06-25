import { useEffect, useState } from "react";

import { getCharacterList } from '@/api';
import { showErrorToast } from '@/components';
import type { Character } from "@/shared/types";

export function useLoadCharacters() {
    const [isLoading, setIsLoading] = useState(true);
    const [characterList, setCharacterList] = useState<Character[]>([]);

    useEffect(() => {
        const loadCharacterList = async () => {
            setIsLoading(true);
            try {
                const data = await getCharacterList();
                setCharacterList(data.results);
            } catch {
                setCharacterList([]);
                showErrorToast(
                    'Ошибка',
                    'Не удалось загрузить список персонажей'
                );
            } finally {
                setIsLoading(false);
            }
        };

        loadCharacterList();
    }, []);

    return { characterList, isLoading };
}