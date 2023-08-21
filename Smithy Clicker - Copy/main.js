var gameData = {
    Daggers: 0,
    daggerPerClick: 1
}

function smithDagger() {
    gameData.Daggers += gameData.daggerPerClick
    document.getElementById("daggersSmithed").innerHTML = gameData.Daggers + " Daggers Smithed"
}


