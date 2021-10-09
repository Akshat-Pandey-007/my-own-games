class Player {
    constructor(){
      this.index = null;
      this.name = null;
     // this.rank = 0;
      //this.lp = 0;
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
       // distance:this.distance,
        //rank:this.rank
    
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
     /*get_rank(){
       console.log(this.index);
       database.ref("lastposition").on("value",(data) => {
         this.lp = data.val();
         console.log("rank",this.lp);
       })*/
     //}
     
  
     
    }