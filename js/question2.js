fetch("https://api.rawg.io/api/games")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    createGames(json);
})
.catch(function(error) {
    console.log(error);
});

function createGames(json) {
    const games = json.results;
    console.log(games, "running");

    var html = "";

    games.forEach(game => {
        html += `<div class="game">
    <h2>${game.name}</h2>
    <img src="${game.background_image}" alt="${game.name}" />
    </div>`
    });

    document.querySelector(".results").innerHTML = html;
}