import React, { useContext } from "react";

import { Card } from "../cards/card"
import { PokemonContext } from "./PokemonContext";

const Pokemon = () => {
    const {pokemon, loading, onClick} = useContext(PokemonContext);

    return (
        <div className="get-pokemon__main">
            {!loading ?  
                <Card initialState={pokemon} onClick={onClick}/> :
                'Esta cargando'   
            }
        </div>
    )
}

export { Pokemon }