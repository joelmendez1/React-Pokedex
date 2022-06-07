//Compares pokemonTypE and classes to get a particular element and sets a two colors based on that particular element.
//Tag, type and direction are html and css elements used to dinamically add a background color.

const checkBackground = (pokemonType, classes, tag, type, direction = 'circle') => {
    let firstColor = '';
    let secondColor = '';

    for(let [index, element] of classes.entries()) {
        if(pokemonType === element.class) {
                firstColor = element.background.firstColor;
                secondColor = element.background.secondColor
            }
        }

    switch(tag) {
        case 'background':
            return {
                [tag]: `${type}-gradient(${direction}, ${firstColor} 0%, ${secondColor} 100%)`
            }
        case 'border-color':
            console.log(firstColor)
            return {
                [tag]: `saturate ${firstColor}`
            }
    }
}

//Saves in the localStorage all the pokemons who gets a like

const likedPokemons = []

const savePokemon = (args) => {
    const retrieveLikedPokemons = JSON.parse(localStorage.getItem('likedPokemons'));

    if(retrieveLikedPokemons === null) {
        likedPokemons.push(args);

        localStorage.setItem('likedPokemons', JSON.stringify(likedPokemons));
    } else {
        const items = retrieveLikedPokemons

        let pokemonNames =  items.map(element => element.name)

        if(!pokemonNames.includes(args.name)) {
            items.push(args)

            localStorage.setItem('likedPokemons', JSON.stringify(items))

        } else {
            console.log(`El pokemon ${args.name} ya esta guardado`)
        }
    }
}

//Actually it doesn't strictly remove an element from the localstorage, insted it filters all the elements from the localstorage array who doesn't match a particular element.

const deleteSavedPokemon = (name) => {
    const newList = JSON.parse(localStorage.getItem('likedPokemons')).filter(element => element.name !== name)
    localStorage.setItem('likedPokemons', JSON.stringify(newList))
}

//It must toogle both (delete and save) functions and set an state.

const toogleLike = (name, pokemonType, artWork) => {
    const retrieveLikedPokemons = JSON.parse(localStorage.getItem('likedPokemons'));

    if(retrieveLikedPokemons === null) {
        savePokemon({name, pokemonType, artWork});
        console.log('Likeado');
    } else {
        const pokemones = retrieveLikedPokemons.map(element => element.name);

        switch(pokemones.includes(name)) {
            case true:
                deleteSavedPokemon(name);
                break
            case false:
                savePokemon({name, pokemonType, artWork});
                break
        }
    }
}

export { checkBackground, toogleLike }