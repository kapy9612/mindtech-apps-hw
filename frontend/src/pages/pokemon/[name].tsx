import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import DetailsPage from '@/components/DetailsPage/DetailsPage';
import Layout from '@/components/Layout/Layout';
import { useAuth } from '@/hooks/useAuth';
import { usePokemon } from '@/hooks/usePokemon';

const PokemonPage = () => {
    const { query, replace } = useRouter();
    const { token } = useAuth();

    const pokemon = usePokemon(query.name! as string);

    useEffect(() => {
        if (!token) {
            void replace('/login');
        }
    }, [token]);

    return (
        <Layout>
            <DetailsPage pokemon={pokemon} />
        </Layout>
    );
};

export default PokemonPage;
