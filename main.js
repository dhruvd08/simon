const playButton = document.querySelector(".btn-play");
const howToPlayButton = document.querySelector(".btn-how-to-play");

playButton.addEventListener("click", () => {
    window.open("./game.html", "_self");
});

howToPlayButton.addEventListener("click", () => {
    window.open("./instructions.html", "_self");
});
