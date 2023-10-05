import { useEffect, useState } from 'react';

import { PeopleDataType } from '@/utils/types';

const ITEMS_PER_PAGE = 25;
export const useNavigation = (data: any) => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    const slicingFunctionality = (data: any) => {
        return data?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    };

    useEffect(() => {
        if (data?.length) {
            setCount(Math.ceil(data.length / 25));
        }
    }, [data]);

    return {
        count,
        page,
        setPage,
        slicingFunctionality,
    };
};
