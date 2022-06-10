import React, { useState } from "react";

import "./card.css"
import classes from '../../classes.json'

import { GiCardRandom } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Stats } from "../card-characteristics/stats/stats";
import { Moves } from "../card-characteristics/moves/moves";
import { Evolution } from "../card-characteristics/evolution/evolution";

import { checkBackground, toogleLike } from "../utils/functions";

const Card = (props) => {
    const [itemHovered, setItemHovered] = useState('')

    const {name, sprites, types} = props.initialState
    const pokemonType = types[0].type.name
    const artWork = sprites.other.dream_world.front_default

    const componentsArr = [Stats, Moves, Evolution];

    const showElement = (event) => {
        if(event.target.textContent !== itemHovered){
            setItemHovered(event.target.textContent)
        };
    }

    return (
        <div>
            <div className="card_ui" style={checkBackground(pokemonType, classes, 'background', 'radial', 'circle')}>
                <div className="card_buttons">
                    <GiCardRandom
                    className="card_random-card"
                    size={40}
                    onClick={props.onClick}/>
                    <BsFillSuitHeartFill
                    className="card_heart"
                    size={30}
                    onClick={() => toogleLike(name, pokemonType, artWork)}/>
                </div>
                <figure>
                    { artWork && <img src={artWork} alt={sprites}/> }
                </figure>
                <div className="card_text">
                    <div className="card_text-basic_info">
                        <h1>{name}</h1>
                        <p className="card_text-pokemon_type" >{pokemonType}</p>
                        <nav>
                            <div className="button-wrapper">
                                <button onMouseOver={(e) => showElement(e)}>Stats</button>
                                <button onMouseOver={(e) => showElement(e)}>Moves</button>
                                <button onMouseOver={(e) => showElement(e)}>Evolution</button>
                            </div>
                           <div className="card_characteristics">
                                {/*This allows to dynamically render a determinated component from the "characteristics" folder*/}
                                {
                                    componentsArr.map((e) => {
                                        if(e.name === itemHovered) {
                                            return (
                                                e()
                                            )
                                        }
                                    })
                                }
                           </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card }