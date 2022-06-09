import React from "react";
import { GiCardRandom } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "./card.css"
import classes from '../../classes.json'
import { checkBackground, toogleLike } from "../utils/functions";

const Card = (props) => {
    const {name, sprites, types} = props.initialState
    const pokemonType = types[0].type.name
    const artWork = sprites.other.dream_world.front_default

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