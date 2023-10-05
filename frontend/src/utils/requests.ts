import axios, { AxiosResponse, Method } from 'axios';

import { ParamsType } from '@/utils/types';

const request = async <T>(method: Method, url: string, params?: any) => {
    const response: AxiosResponse<T> = await axios({
        method,
        baseURL: 'https://pokeapi.co/api/v2',
        url: url,
        params,
    });

    return response.data;
};

export const getRequest = async <T>(url: string, params?: any) => {
    return request<T>('get', url, params);
};
