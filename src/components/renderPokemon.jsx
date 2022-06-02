import React, { useEffect } from "react";
import { useState } from "react";
import { useAxios } from "./useAxios";

import { RenderUI } from "./renderUI";
import { GetPokemon } from "./getPokemon";

const Pokemon = () => {
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
                            <RenderUI initialState={pokemon}/> :
                            'Esta cargando'
                    ) : 
                    <GetPokemon />
           }
        </div>
    );
}

export { Pokemon }