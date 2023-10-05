import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { CircularProgress, Typography } from '@mui/material';

import SearchPage from '@/components/SearchPage/SearchPage';
import { useAuth } from '@/hooks/useAuth';
import styles from '@/styles/Home.module.css';

export default function Home() {
    const { replace } = useRouter();
    const { token } = useAuth();

    if (!token) {
        useEffect(() => {
            void replace('/login');
        }, []);
        return (
            <main className={`${styles.main}`}>
                <Typography variant={'body1'}>
                    Redirecting...
                    <CircularProgress size={15} />
                </Typography>
            </main>
        );
    }

    return (
        <main className={`${styles.main}`}>
            <SearchPage />
        </main>
    );
}
