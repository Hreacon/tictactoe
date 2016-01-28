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
