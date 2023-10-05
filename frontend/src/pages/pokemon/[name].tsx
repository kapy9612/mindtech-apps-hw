import React, { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

import { CircularProgress, Typography } from '@mui/material';

import DetailsPage from '@/components/DetailsPage/DetailsPage';
import { useAuth } from '@/hooks/useAuth';
import { usePokemon } from '@/hooks/usePokemon';
import styles from '@/styles/Home.module.css';

const PokemonPage = () => {
    const { query, replace } = useRouter();
    const { token } = useAuth();

    const pokemon = usePokemon(query.name! as string);

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
            <DetailsPage pokemon={pokemon} />
        </main>
    );
};

export default PokemonPage;
