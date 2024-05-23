const mkTiles = document.querySelectorAll('.tile');


let isTileTurnedover = false;
let freezeTiles = false;
let firstTile, secondTile;


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
    resetTiles();
  }

  function revertTiles(){
    freezeTiles = true;
    setTimeout(() => {
        firstTile.classList.remove('turnover');
        secondTile.classList.remove('turnover');
        resetTiles();
    }, 1000);
  }

  function resetTiles() {
    [isTileTurnedover, freezeTiles] = [false, false];
    [firstTile, secondTile] = [null, null];
  }

  (function fiftyTwoPickUp (){
    mkTiles.forEach(mkTile =>{
        let randomizeTiles = Math.floor(Math.random() * 12);
        mkTile.style.order = randomizeTiles;
    });
  })();

mkTiles.forEach(mkTile => mkTile.addEventListener('click', turnoverTile));

