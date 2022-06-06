import React, { useState } from "react";

import classes from '../../classes.json'
import "./card.css"
import { BsFillSuitHeartFill } from "react-icons/bs";

import { checkBackground, savePokemon, deleteSavedPokemon } from "../utils/functions";

const Card = (props) => {
    const {name, sprites, types} = props.initialState
    const pokemonType = types[0].type.name
    const artWork = sprites.other.dream_world.front_default

    return (
        <div>
            <div className="card_ui" style={checkBackground(pokemonType, classes, 'background', 'radial', 'circle')}>
                <div className="card_buttons">
                    {/* <button onClick={() => deleteSavedPokemon(name)}>Dislike</button> */}
                    <BsFillSuitHeartFill className="card_heart" size={30} onClick={() => savePokemon({name, pokemonType, artWork})}/> 
                </div> 
                <figure>
                    { artWork && <img src={artWork} alt={sprites}/> }
                </figure>
                <div className="card_text">
                    <div className="card_text-basic_info">
                        <h1>{name}</h1>
                        <p className="card_text-pokemon_type" >{pokemonType}</p>
                        <nav>
                            <p>stats</p>
                            <p>moves</p>
                            <p>evolution</p>
                            {/* <Stats />
                            <Moves />
                            <Evolution /> */}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card }