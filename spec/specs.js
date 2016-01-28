describe('Space', function () {
  it("will return the space y-coordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.y).to.equal(2);
  });
  it("will return the space x-coordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.x).to.equal(1);
  });
  it('knows which player marks it', function() {
    var testSpace = new Space(2,2);
    testSpace.mark('X');
    expect(testSpace.markedAs).to.equal('X');
  });
});

describe('Player', function() {
  it('tells you which player it is', function() {
    var testPlayer = new Player('X');
    expect(testPlayer.id).to.equal('X');
  });
});

describe('Game', function() {
  it('returns X when it is player Xs turn', function () {
    var testGame = new Game();
    expect(testGame.whoseTurn()).to.equal('X');
  });

});

describe('Board', function() {
  it('provides a space given coords', function() {
    var testBoard = new Board();
    testBoard.getSpace(1,1).mark('X');
    expect(testBoard.getSpace(1,1).markedAs).to.equal('X');
  });
  it('returns true if three spaces in a row contain the same mark', function() {
    var testBoard = new Board();
    testBoard.getSpace(3,1).mark('X');
    testBoard.getSpace(2,2).mark('X');
    testBoard.getSpace(1,3).mark('X');
    expect(testBoard.checkWin()).to.equal(true);
  });
});
