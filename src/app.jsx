import React from "react";
import "./app.css"
import { RenderPokemon } from "./components/renderPokemon";
import { PokemonProvider } from "./components/Pokemon/PokemonContext";

const App = () => {
    return (
        <div>
           <PokemonProvider>
                <RenderPokemon />
           </PokemonProvider>
        </div>
    )
}

export { App };