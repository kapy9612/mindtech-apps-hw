import React from 'react';

export type Person = {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
    url: string;
    created: string;
    edited: string;
};

export type PeopleDataType = {
    count: number;
    previous: string;
    next: string;
    results: Person[];
};

export type PeopleCardType = {
    media: string;
    item: Person;
};

export type CustomModalType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    films: string[];
    homeworld: string;
};

export type FilterRowType = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Planet = {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
};

export type ParamsType = {
    page?: number;
    search?: string;
};
