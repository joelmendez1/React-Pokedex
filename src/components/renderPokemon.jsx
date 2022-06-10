import React from "react";
import { useState, useContext } from "react";
import { useAxios } from "./utils/useAxios";
import { usePrevious } from "./utils/functions";
import { Card } from "./cards/card";
import { Pokemon } from "./Pokemon/randomPokemon"
import "./renderPokemon.css"
import { PokemonContext } from "./Pokemon/PokemonContext";

const RenderPokemon = () => {
    const randomPokemon = useContext(PokemonContext);

    const [query, setQuery] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [loading, setLoading] = useState(false);
    const [usedInput, setUsedInput] = useState(false)

    const url = `https://pokeapi.co/api/v2/pokemon/${query}`.toLocaleLowerCase();

    const request = useAxios();
    const getPreviousValue = usePrevious(pokemon);

    //Sets a previous pokemon state if the query isn't valid.
    const prevValue = pokemon ? getPreviousValue : randomPokemon.pokemon;

    const search = async(e) => {
        if(e.key === 'Enter') {
            await request(url, setPokemon, setLoading, prevValue)
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
                    <Pokemon />
            }
        </div>
    );
}

export { RenderPokemon }