import useSWR from 'swr';

import { getRequest } from '@/utils/requests';

export const usePokemon = (name: string | null) => {
    return useSWR<any>(
        () => (!!name ? name : null),
        () => getRequest(`https://pokeapi.co/api/v2/pokemon/${name}`),
    );
};
