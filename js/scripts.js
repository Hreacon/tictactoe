function Space(x,y) {
  this.x = x;
  this.y = y;
  this.markedAs = '';
}

Space.prototype.mark = function(player) {
  this.markedAs = player;
}

function Player(id) {
  this.id = id;

}

function Board() {
  this.spaces = [];
  for(var y=1;y<=3;y++){
    this.spaces[y] = [];
    for(var x=1;x<=3;x++) {
      this.spaces[y][x] = new Space(x,y);
    }
  }
}

Board.prototype.getSpace = function(x,y) {
  return this.spaces[y][x];
}

Board.prototype.getAllSpaces = function() {
  var output = [];
  for(var y=1;y<=3;y++) {
    for(var x=1;x<=3;x++) {
      output.push(this.spaces[y][x]);
    }
  }
  return output;
}

Board.prototype.checkWin = function() {
  // get the first space
  // check adjacent spaces
  var win = false;
  for(var x = 1;x<=3;x++) {
    if(this.spaces[1][x].markedAs.length > 0) { // space 1,1 is marked
      if(this.spaces[2][x].markedAs === this.spaces[1][x].markedAs)
        if(this.spaces[3][x].markedAs === this.spaces[1][x].markedAs)
          win=true;
    }
  }
  for(var y = 1;y<=3;y++) {
    if(this.spaces[y][1].markedAs.length > 0) {
      if(this.spaces[y][2].markedAs === this.spaces[y][1].markedAs)
        if(this.spaces[y][3].markedAs === this.spaces[y][1].markedAs)
          win=true;
    }
  }

  if(this.spaces[2][2].markedAs.length > 0) {
      if(this.spaces[1][1].markedAs === this.spaces[2][2].markedAs)
        if(this.spaces[3][3].markedAs === this.spaces[2][2].markedAs)
          win=true;
  }

  if(this.spaces[2][2].markedAs.length > 0) {
      if(this.spaces[3][1].markedAs === this.spaces[2][2].markedAs)
        if(this.spaces[1][3].markedAs === this.spaces[2][2].markedAs)
          win=true;
  }

  return win;
}

function Game() {
  this.playerX = new Player('X');
  this.playerY = new Player('O');
  this.currentPlayer = this.playerX;
  this.board = new Board();
}

Game.prototype.whoseTurn = function () {
  return this.currentPlayer.id;
}

Game.prototype.nextTurn = function() {
  if( this.currentPlayer === this.playerX ) {
    this.currentPlayer = this.playerY;
  } else {
    this.currentPlayer = this.playerX;
  }
}

Game.prototype.mark = function(x,y) {
  this.board.getSpace(x,y).mark(this.currentPlayer.id);
  this.nextTurn();
}

Game.prototype.getSpaces = function() {
  var spaces = this.board.getAllSpaces();
  var output = '';
  spaces.forEach(function(space) {
    output += '<div x="' + space.x + '" y="'+space.y+'" class="space">' + space.markedAs + '</div>';
  })
  return output;
}

$(document).ready(function() {
  var game = new Game();
  game.mark(3,3);
  game.mark(1,1);
  $('.board').html(game.getSpaces());

  $('.board div').each(function() {
    $(this).click(function() {
      alert($(this).attr('y'));
    })
  })
})
