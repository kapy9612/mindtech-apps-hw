import useSWR from 'swr';

import { getRequest } from '@/utils/requests';

export const usePokemonTypes = (type?: string) => {
    return useSWR<any>(['types', type], () =>
        getRequest(
            type
                ? `https://pokeapi.co/api/v2/type/${type}`
                : 'https://pokeapi.co/api/v2/type',
        ),
    );
};
