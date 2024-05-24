/* the consts is stated below as showing it is a reference to a 'document' which took me close to 2 hours to figure out why is was not working
i did not realize in my html i must specify the exact javascript file. it exists as ./js/app.js
sure wish i had asked for help on that part
*/

const mkTiles = document.querySelectorAll('.tile');

/* my variables */

let isTileTurnedover = false;
let freezeTiles = false;
let firstTile, secondTile;

/* this is the logic behind the turning of the tiles*/ 

function turnoverTile() {
    if (freezeTiles) return;
    if(this === firstTile) return;
    this.classList.add('turnover');

    if (!isTileTurnedover) {
        isTileTurnedover = true;
        firstTile = this;
        return;
    }

    secondTile = this;
    freezeTiles = true;

    doCharactersMatch();
  }
/* this is the logic behind what happens when the tiles reveal the same charater */

  function doCharactersMatch() {

/*.dataset is a reference to the data-tile tag in the html identifying each div/tile*/

    if (firstTile.dataset.tile === secondTile.dataset.tile) {
        turnTilesOff();
        return;
    }

    revertTiles();
  }
/*used to turn off the selected tile, meaning i cannot keep turning it over
once it has been clicked */

  function turnTilesOff (){
    firstTile.removeEventListener('click', turnoverTile);
    secondTile.removeEventListener('click', turnoverTile);
    resetTiles();
  }
  
/*when the tiles do not match, the tiles will be flipped back, including a 
timed delay provided by a settimeout function*/

  function revertTiles(){
    freezeTiles = true;
    setTimeout(() => {
        firstTile.classList.remove('turnover');
        secondTile.classList.remove('turnover');
        resetTiles();
    }, 1000);
  }

/*this is so the same card cannot be chose twice to result in true*/

  function resetTiles() {
    [isTileTurnedover, freezeTiles] = [false, false];
    [firstTile, secondTile] = [null, null];
  }

/*math.floor and math.random functions to execute the position of the tile
everytime you refresh the game*/

  (function fiftyTwoPickUp (){
    mkTiles.forEach(mkTile =>{
        let randomizeTiles = Math.floor(Math.random() * 12);
        mkTile.style.order = randomizeTiles;
    });
  })();

/* looping thru the tiles of the game, once a tile is clicked,
the first function on this file*/

mkTiles.forEach(mkTile => mkTile.addEventListener('click', turnoverTile));

