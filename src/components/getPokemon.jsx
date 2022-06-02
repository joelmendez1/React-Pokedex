import React, { useEffect } from "react";
import { useState } from "react";
import { useAxios } from "./useAxios";

import { RenderUI } from "./renderUI";

const randomPokemon = (max, min) => {
    const randomInt = (Math.floor(Math.random() * (max - min) + min))
    return `https://pokeapi.co/api/v2/pokemon/${randomInt}`
}

const GetPokemon = () => {
    const [pokemon, setPokemon] = useState({name: 'default', sprites: 'default'})
    const [loading, setLoading] = useState(true)   

    const request = useAxios()

    useEffect(() => {
        request(randomPokemon(1, 800), setPokemon, setLoading)
    }, [])

    return (
        <div className="get-pokemon__main">
            {!loading ?  
                <RenderUI initialState={pokemon} /> : 
                'Esta cargando'   
            }
            <button onClick={() => request(randomPokemon(1, 800), setPokemon, setLoading)}>Get a random pokemon</button>
        </div>
    )
}

export { GetPokemon }