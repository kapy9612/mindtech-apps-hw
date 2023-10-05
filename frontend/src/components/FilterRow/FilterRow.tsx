import React from 'react';

import { Skeleton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { usePokemonTypes } from '@/hooks/usePokemonTypes';
import { FilterRowType } from '@/utils/types';

const FilterRow = ({ searchText, setSearchText, type, setType }: any) => {
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const types = usePokemonTypes();

    return (
        <Grid container spacing={2} columns={10} alignItems={'center'}>
            <Grid item xs={10} sm={4}>
                {types.isLoading ? (
                    <Skeleton width={'100%'} height={40} />
                ) : (
                    <FormControl fullWidth size="small">
                        <InputLabel id="type-select-label">Type</InputLabel>
                        <Select
                            labelId="type-select-label"
                            id="type-select"
                            value={type}
                            label="Type"
                            onChange={handleChange}
                            size="small"
                        >
                            {types.data?.results.map(
                                (item: any, index: number) => (
                                    <MenuItem value={item.name} key={index}>
                                        {item.name}
                                    </MenuItem>
                                ),
                            )}
                        </Select>
                    </FormControl>
                )}
            </Grid>
            <Grid item xs={10} sm={4}>
                <TextField
                    id="outlined-basic"
                    label="Search in names"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </Grid>
            <Grid item xs={10} sm={2}>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Catched"
                />
            </Grid>
        </Grid>
    );
};

export default FilterRow;
