import React from 'react';

import { useRouter } from 'next/router';

import { Card, CardContent, Skeleton, Typography } from '@mui/material';

const PokemonCard = ({ item }: any) => {
    const { push } = useRouter();
    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    maxWidth: 250,
                    width: '100%',
                    height: '100%',
                }}
                onClick={() => push(`/pokemon/${item.name}`)}
            >
                {!item ? (
                    <>
                        <CardContent>
                            <Skeleton />
                        </CardContent>
                    </>
                ) : (
                    <>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="body1"
                                style={{ marginBottom: 0 }}
                            >
                                {item.name}
                            </Typography>
                        </CardContent>
                    </>
                )}
            </Card>
        </>
    );
};

export default PokemonCard;
