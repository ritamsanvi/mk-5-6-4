class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    car1 = createSprite(20, 170);
    car1.addImage("car1", car1_img);
    car1.scale=0.5;
    car2 = createSprite(20, 100);
    car2.addImage("car2", car2_img);
    car2.scale=0.5;
    cars = [car1, car2];
    balls= [ball1,ball2];
  }

  play() {
    form.hide();

    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if (allPlayers !== undefined) {
      background(rgb(198, 135, 103));
      image(track, -20, height / 2, displayWidth - 60, height / 2);

      image(net2Img, height / 2, 80, 150, 150);
      image(net1Img, height, 80, 150, 150);

      //var display_position = 100;

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 10;
      var y = height / 2;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        y = y + 100;
        //use data form the database to display the cars in y direction
        x = /* width  */allPlayers[plr].distance;
        console.log("x: " +x);
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        // console.log(index, player.index)


        if (index === player.index) {
         // stroke(10);
          //fill("red");
         // ellipse(x, y, 60, 60);
         // console.log("cars [] length: " + cars.length);
          balls[index-1]= players[index-1];
         // camera.position.y = displayHeight / 2;
         // camera.position.x = cars[index - 1].x;
        }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
      drawSprites();
    }

    //if ( && player.index !== null) {
    //  player.distance += 10
      player.update();
   // }

       console.log("net2Img")
       console.log("net2Img")
    /*  if(player.distance > 3860){
       gameState = 2;
       player.rank +=1;
      Player.updateCarsAtEnd(player.rank);
     }
     */

  }

  end() {
    console.log("Game Ended");
    console.log(player.rank)
  }
}
