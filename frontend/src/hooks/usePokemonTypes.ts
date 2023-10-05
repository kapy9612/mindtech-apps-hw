import useSWR from 'swr';

import { getRequest } from '@/utils/requests';

export const usePokemonTypes = (type?: string) => {
    return useSWR<any>(['types', type], () =>
        getRequest(type ? `/type/${type}` : '/type'),
    );
};
