const mkTiles = document.querySelectorAll('.tile');


let isTileTurnedover = false;
let firstTile, secondTile;


function turnoverTile() {
    this.classList.add('turnover');

    if (!isTileTurnedover) {
        isTileTurnedover = true;
        firstTile = this;
    }
  }
  
mkTiles.forEach(mkTile => mkTile.addEventListener('click', turnoverTile));

