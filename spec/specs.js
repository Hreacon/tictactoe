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
  })
});

describe('Player', function() {
  it('tells you which player it is', function() {
    var testPlayer = new Player('X');
    expect(testPlayer.id).to.equal('X');
  })
})



// Player, Space, Board, Game
// create two players, assign X and O
// create a board, assign 9 spaces individual values (known coordinates)
// spaces should know if they contain X or O
// board should know if there are 3 X or O in a row
// game should toggle between player turns after each click
// only one mark allowed in each space
// during player X turn, only X's can be marked (vice versa for player O)
