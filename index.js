function loadPage() {
    console.log("page has loaded, run the program")
}

loadPage()

function renderPokemon(character) {
    console.log(`Rendering ${character}`)
}

renderPokemon("Mewtoo")

function compareFunctions(firstFunction, secondFunction){
    const first = firstFunction()
    const second = secondFunction()     
    
    if (first > second) {
        return "First function is higher!"
        } else if (second > first){
        return "Second function is higher!"
        }else {
        return "DRAW!"
        }
}

 console.log(compareFunctions(() => 1, () => 10) )
 console.log(compareFunctions(() => 10, () => 1) )
 console.log(compareFunctions(() => 10, () => 10) )