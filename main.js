var gameData = {
    dagger: 0,
    daggerPerClick: 1,
    daggerPerClickCost: 10
  }
  
  function smithDagger() {
    gameData.dagger += gameData.daggerPerClick
    document.getElementById("daggerSmith").innerHTML = gameData.dagger + " Dagger Smith"
  }
  
  function buyddaggerPerClick() {
    if (gameData.dagger >= gameData.daggerPerClickCost) {
      gameData.dagger -= gameData.daggerPerClickCost
      gameData.daggerPerClick += 1
      gameData.daggerPerClickCost *= 2
      document.getElementById("daggerSmith").innerHTML = gameData.dagger + " Dagger Smith"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.daggerPerClick + ") Cost: " + gameData.daggerPerClickCost + " Dagger"
    }
  }
  
  var mainGameLoop = window.setInterval(function() {
    smithDagger()
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("SmithyClickerSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("SmithyClickerSave"))
if (savegame !== null) {
  gameData = savegame
}
