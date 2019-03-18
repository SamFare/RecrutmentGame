import Game from './Game.js'

document.addEventListener("DOMContentLoaded",()=>{
    const game = new Game(document.getElementById('gameCanvas'));
    game.run();
 });