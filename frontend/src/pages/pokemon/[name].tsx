import React from 'react';

import { useRouter } from 'next/router';

import { CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { usePokemon } from '@/hooks/usePokemon';
import styles from '@/styles/Home.module.css';

const PokemonPage = () => {
    const router = useRouter();

    const pokemon = usePokemon(router.query.name! as string);

    return (
        <main className={`${styles.main}`}>
            <Grid container spacing={2} columns={2}>
                <Grid item xs={2}>
                    <Typography variant={'h3'} textAlign={'center'}>
                        Pokemon details
                    </Typography>
                </Grid>
                {pokemon.isLoading ? (
                    <CircularProgress size={50} />
                ) : (
                    <>
                        <Grid item xs={2} textAlign={'center'}>
                            <img
                                src={pokemon?.data?.sprites?.front_default}
                                alt="pokemon-picture"
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant={'body1'} textAlign={'end'}>
                                Name:
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant={'body1'}>
                                {pokemon?.data?.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} textAlign={'end'}>
                            <Typography variant={'body1'}>Weight:</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant={'body1'}>
                                {pokemon?.data?.weight}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} textAlign={'end'}>
                            <Typography variant={'body1'}>Height:</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant={'body1'}>
                                {pokemon?.data?.height}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant={'body1'} textAlign={'end'}>
                                Abilities:{' '}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            {pokemon?.data?.abilities.map(
                                (item: any, index: number) => {
                                    if (!item.is_hidden) {
                                        return (
                                            <Typography
                                                variant={'body1'}
                                                key={index}
                                            >
                                                {item.ability.name}
                                            </Typography>
                                        );
                                    }
                                },
                            )}
                        </Grid>
                    </>
                )}
            </Grid>
        </main>
    );
};

export default PokemonPage;
