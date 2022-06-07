import React from "react";
import { useState, useEffect } from "react";

import { useAxios } from "./utils/useAxios";
import "./homePage.css"

import { RenderPokemon } from "./renderPokemon"
import { Pokemon } from "./randomPokemon";





const HomePage = () => {
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(false)

    const request = useAxios()

    // useEffect(() => {
    //     request('https://pokeapi.co/api/v2/pokemon-species/charmander', setInfo, setLoading)
    // }, [])
    // Link hacia las evoluciones 


    return (
        <div>
            <RenderPokemon />
        </div>
    )
}

export { HomePage }