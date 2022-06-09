import React from "react";
import { useState } from "react";
import { useAxios } from "./utils/useAxios";
import { PokemonProvider } from "./Pokemon/PokemonContext";
import { Card } from "./cards/card";
import { Pokemon } from "./Pokemon/randomPokemon"
import "./renderPokemon.css"

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
        <div className="render-ui">
            <div className="render-ui_searcher">
                <h1>What Pokemon are you looking for?</h1>
                <input
                type="text"
                className=""
                placeholder={`🔍 SEARCH POKEMON`}
                value={query}
                onChange={(e) => {setQuery(e.target.value)}}
                onKeyPress={search}
            />
            </div>
            {
                (usedInput && query !== '') ? 
                    (
                        !loading ? 
                            <Card initialState={pokemon}/> :
                            'Esta cargando'
                    ) : 
                   <PokemonProvider>
                       <Pokemon />
                   </PokemonProvider>
            }
        </div>
    );
}

export { RenderPokemon }