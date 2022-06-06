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

const deleteSavedPokemon = (name) => {
    const newList = JSON.parse(localStorage.getItem('likedPokemons')).filter(element => element.name !== name)
    localStorage.setItem('likedPokemons', JSON.stringify(newList))
}

const toogleFunctionality = () => {
    
}

export { checkBackground, savePokemon, deleteSavedPokemon }