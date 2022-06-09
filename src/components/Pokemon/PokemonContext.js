import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { randomUrl } from "../utils/functions";

const PokemonContext = createContext();

const PokemonProvider = (props) => {
    const [pokemon, setPokemon] = useState({name: 'default', sprites: 'default'});
    const [loading, setLoading] = useState(true);

    const request = useAxios();

    useEffect(() => {
        request(randomUrl(1, 300), setPokemon, setLoading)
    }, []);

    const onClick = () => {
        request(randomUrl(1, 800), setPokemon, setLoading)
    }

    return (
        <PokemonContext.Provider value={{
           pokemon,
           loading,
           onClick
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider };