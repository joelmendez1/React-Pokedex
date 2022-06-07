import React, { useEffect } from "react";
import { useState } from "react";
import { useAxios } from "./utils/useAxios";

import { Card } from "./cards/card";
import { GiCoinflip } from "react-icons/gi"

const randomInteger = (max, min) => {
    const randomInt = (Math.floor(Math.random() * (max - min) + min))
    return `https://pokeapi.co/api/v2/pokemon/${randomInt}`
}

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({name: 'default', sprites: 'default'});
    const [loading, setLoading] = useState(true);

    const request = useAxios()

    useEffect(() => {
        request(randomInteger(1, 300), setPokemon, setLoading)
    }, [])

    return (
        <div className="get-pokemon__main">
            {!loading ?  
                <Card initialState={pokemon}/> :
                'Esta cargando'   
            }
            <GiCoinflip
                    className="card_flip-a-coin"
                    size={50}
                    onClick={() => {
                        request(randomInteger(1, 800), setPokemon, setLoading)
                    }}
                />
        </div>
    )
}

export { Pokemon }