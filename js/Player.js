class Player {
  constructor(){
    this.index = null;
    this.distance = 200;
    this.name = null;
    this.rank= null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd(){
   var carsEnd= database.ref('carsAtEnd')
   carsEnd.on("value",(data)=>{
     this.rank= data.val();
   })
   
  }

  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd:rank
    })
  }

   // remove all players when reset
   removePlayers(){
    database.ref('players').remove().then(function() {
      console.log("Remove succeeded.")
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
  }
}
