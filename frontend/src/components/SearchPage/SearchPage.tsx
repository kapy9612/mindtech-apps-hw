import React, { ChangeEvent, useState } from 'react';

import { Grid, Pagination, Typography } from '@mui/material';

import FilterRow from '@/components/FilterRow/FilterRow';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { useNavigation } from '@/hooks/useNavigation';
import { usePokemonTypes } from '@/hooks/usePokemonTypes';

function SearchPage() {
    const [searchText, setSearchText] = useState('');
    const [type, setType] = useState('');

    const pokemon = usePokemonTypes(type);
    const filteredData = pokemon.data?.pokemon?.filter(
        (f: any) =>
            f?.pokemon?.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    const { count, page, setPage, slicingFunctionality } =
        useNavigation(filteredData);

    if (pokemon.error) {
        return (
            <Typography>An error occurred, please refresh the page.</Typography>
        );
    }

    return (
        <>
            <Typography variant={'h2'}>Pokemon search</Typography>
            <FilterRow
                searchText={searchText}
                setSearchText={setSearchText}
                type={type}
                setType={setType}
            />
            <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 10 }}>
                {slicingFunctionality(
                    pokemon.isLoading
                        ? Array.from(new Array(25))
                        : filteredData,
                )?.map((item: any, index: number) => (
                    <Grid item xs={2} key={index}>
                        <PokemonCard item={item?.pokemon} />
                    </Grid>
                ))}
                {!pokemon.isLoading && !pokemon.data?.pokemon && (
                    <Grid item xs={10}>
                        <Typography variant={'h5'}>
                            Please select a type...
                        </Typography>
                    </Grid>
                )}
            </Grid>
            <Pagination
                count={count}
                hideNextButton={page === count}
                hidePrevButton={page === 1}
                hidden={count === 0}
                page={page}
                onChange={(_event: ChangeEvent<unknown>, value: number) => {
                    setPage(value);
                }}
                disabled={pokemon.isLoading}
            />
        </>
    );
}

export default SearchPage;
