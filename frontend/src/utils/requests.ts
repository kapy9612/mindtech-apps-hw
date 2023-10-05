import axios, { AxiosResponse, Method } from 'axios';

import { useAuth } from '@/hooks/useAuth';
import { ParamsType } from '@/utils/types';

const request = async <T>(
    method: Method,
    url: string,
    body: any,
    params?: any,
    headers?: any,
) => {
    try {
        const response: AxiosResponse<T> = await axios({
            method,
            url: url,
            headers: headers,
            data: body,
            params,
        });

        return response.data;
    } catch (e: any) {
        alert(e.response.data.message);
    }
};

export const getRequest = async <T>(url: string, params?: any) => {
    return await request<T>('get', url, params);
};

export const postRequest = async <T>(
    url: string,
    body?: any,
    params?: any,
    headers?: any,
) => {
    return await request<T>('post', url, body, params, headers);
};
