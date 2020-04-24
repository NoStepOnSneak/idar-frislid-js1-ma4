fetch("https://api.rawg.io/api/games/4200")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    createGameDetails(json);
})
.catch(function(error) {
    console.log(error);
});


function createGameDetails(game) {
    document.querySelector("h1").innerHTML = game.name;
    document.querySelector(".image").style.backgroundImage = `url('${game.background_image}')`;
    document.querySelector(".description").innerHTML = game.description;
}