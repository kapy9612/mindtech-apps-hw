import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { CircularProgress, Typography } from '@mui/material';

import DetailsPage from '@/components/DetailsPage/DetailsPage';
import Layout from '@/components/Layout/Layout';
import { useAuth } from '@/hooks/useAuth';
import { usePokemon } from '@/hooks/usePokemon';

const PokemonPage = () => {
    const { query, replace } = useRouter();
    const { token } = useAuth();

    const pokemon = usePokemon(query.name! as string);

    if (!token) {
        useEffect(() => {
            void replace('/login');
        }, []);
        return (
            <Layout>
                <Typography variant={'body1'}>
                    Redirecting...
                    <CircularProgress size={15} />
                </Typography>
            </Layout>
        );
    }

    return (
        <Layout>
            <DetailsPage pokemon={pokemon} />
        </Layout>
    );
};

export default PokemonPage;
