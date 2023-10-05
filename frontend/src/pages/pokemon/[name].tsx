import React from 'react';

import { useRouter } from 'next/router';

import DetailsPage from '@/components/DetailsPage/DetailsPage';
import { usePokemon } from '@/hooks/usePokemon';
import styles from '@/styles/Home.module.css';

const PokemonPage = () => {
    const router = useRouter();

    const pokemon = usePokemon(router.query.name! as string);

    return (
        <main className={`${styles.main}`}>
            <DetailsPage pokemon={pokemon} />
        </main>
    );
};

export default PokemonPage;
