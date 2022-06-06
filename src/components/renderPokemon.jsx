import React, { useEffect } from "react";
import { useState } from "react";
import { useAxios } from "./utils/useAxios";

import { Card } from "./cards/card";
import { Pokemon } from "./randomPokemon"

const RenderPokemon = () => {
    const [query, setQuery] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [loading, setLoading] = useState(false);
    const [usedInput, setUsedInput] = useState(false)

    const url = `https://pokeapi.co/api/v2/pokemon/${query}`.toLocaleLowerCase();

    const request = useAxios();

    const search = async(e) => {
        if(e.key === 'Enter') {
            await request(url, setPokemon, setLoading)
            setUsedInput(true)
        }
    };

    return (
        <div>
            <input 
            type="text" 
            className=""
            placeholder="Seacher"
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
            onKeyPress={search}
            />
            {
                (usedInput && query !== '') ? 
                    (
                        !loading ? 
                            <Card initialState={pokemon}/> :
                            'Esta cargando'
                    ) : 
                   <Pokemon />
            }
        </div>
    );
}

export { RenderPokemon }