import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { CircularProgress, Typography } from '@mui/material';

import Layout from '@/components/Layout/Layout';
import SearchPage from '@/components/SearchPage/SearchPage';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
    const { replace } = useRouter();
    const { token } = useAuth();

    useEffect(() => {
        if (!token) {
            void replace('/login');
        }
    }, [token]);

    return (
        <Layout>
            <SearchPage />
        </Layout>
    );
}
