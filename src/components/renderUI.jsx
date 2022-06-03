import React, { useState } from "react";

import '../styles/renderUI.css'
import classes from '../classes.json'

// const pokemonTypes = ['bug', 'psychic', 'fire', 'electric', 'steel', 'normal', 'dark', 'water', 'rock', 'grass', 'fighting', 'poison', 'dragon', 'ice', 'ground', 'fairy']


const RenderUI = (props) => {
    const {name, sprites, types} = props.initialState
    const [saved, setSaved] = useState(false)

    const pokemonType = types[0].type.name
    const artWork = sprites.other['official-artwork']['front_default']

    const checkBackground = (pokemonType, classes) => {
        for(let [index, element] of classes.entries()) {
            if(pokemonType === element.class) {
                return `linear-gradient(${element.background.firstColor}, ${element.background.secondColor})`
            }
        }
    }

    const savedPokemons = []

    const savePokemon = (args) => {

        if(localStorage.getItem('savedPokemons') === null) {
            savedPokemons.push(args);

            localStorage.setItem('savedPokemons', JSON.stringify(savedPokemons));
        } else {
            const items = JSON.parse(localStorage.getItem('savedPokemons'));

            let pokemonNames =  items.map(element => element.name)

            if(!pokemonNames.includes(args.name)) {
                items.push(args)

                localStorage.setItem('savedPokemons', JSON.stringify(items))
                console.log(`El pokemon ${args.name} se ha guardado con exito`)
            } else {

                console.log(`El pokemon ${args.name} ya esta guardado`)
            }
        }
    }

    return (
        <div>
            <div className="render-ui" style={{background: checkBackground(pokemonType, classes)}}>
                <button onClick={() => savePokemon({name, pokemonType, artWork})}>save</button>
                <div className="render-ui__text">
                    <h1>{name}</h1>
                    <p>{pokemonType}</p>
                </div>
                <img src={artWork} alt={sprites} />
            </div>
        </div>
    )
}

export { RenderUI }