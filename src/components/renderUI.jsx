import React from "react";

import '../styles/renderUI.css'
import classes from '../classes.json'

// const pokemonTypes = ['bug', 'psychic', 'fire', 'electric', 'steel', 'normal', 'dark', 'water', 'rock', 'grass', 'fighting', 'poison', 'dragon', 'ice', 'ground']


const RenderUI = (props) => {
    const {name, sprites, types} = props.initialState

    const pokemonType = types[0].type.name
    const artWork = sprites.other['official-artwork']['front_default']

    const checkBackground = (pokemonType, classes) => {
        
        for(let [index, element] of classes.entries()) {
            if(pokemonType === element.class) {
                return `linear-gradient(${element.background.firstColor}, ${element.background.secondColor})`
            }
        }
    }

    return (
        <div className="render-ui" style={{background: checkBackground(pokemonType, classes)}}>
            <div className="render-ui__text">
                <h1>{name}</h1>
                <p>{pokemonType}</p>
            </div>
            <img src={artWork} alt={sprites} />
        </div>
    )
}

export { RenderUI }