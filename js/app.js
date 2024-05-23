const mkTiles = document.querySelectorAll('.tile');


let isTileTurnedover = false;
let firstTile, secondTile;


function turnoverTile() {
    this.classList.add('turnover');

    if (!isTileTurnedover) {
        isTileTurnedover = true;
        firstTile = this;
        return;
    }

    secondTile = this;
    isTileTurnedover = false;

    doCharactersMatch();
  }

  function doCharactersMatch() {
    if (firstTile.dataset.tile === secondTile.dataset.tile) {
        turnTilesOff();
        return;
    }

    revertTiles();
  }

  function turnTilesOff (){
    firstTile.removeEventListener('click', turnoverTile);
    secondTile.removeEventListener('click', turnoverTile);
  }

  function revertTiles(){
    setTimeout(() => {
        firstTile.classList.remove('turnover');
        secondCard.classList.remove('turnover');
    }, 1000);
  }

mkTiles.forEach(mkTile => mkTile.addEventListener('click', turnoverTile));

