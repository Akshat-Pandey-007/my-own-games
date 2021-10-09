class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      f1 = createSprite(150,600,60,60);
      f2 = createSprite(450,600,60,60);
      f1.addAnimation("fighting",f1_img);
      f1.addAnimation("standing",f1_stand);
      f2.addAnimation("fighting",f2_img);
      f2.addAnimation("standing",f2_stand);
      f2.scale = 1.6
      f1.scale = 1.6
      f = [f1,f2];
    }
  
    play(){
      form.hide();
      f1.changeAnimation("standing",f1_stand);
      f2.changeAnimation("standing",f2_stand);

      Player.getPlayerInfo();
      //Player.get_rank();
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(bg_img, 0,0,680,500);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 100 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
          
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
        y = 500-150;
          f[index-1].x = x;
          f[index-1].y = y;
         
          if (index === player.index){
           // cars[index - 1].shapeColor = "red";
           fill("green");
           ellipse(x,y,50,50);
           text(allPlayers[plr].name,x,y+60);
            //camera.position.x = 600/2;
            //camera.position.y = cars[index-1].y;
            if(keyIsDown(UP_ARROW) && player.index !== null){
              f[index-1].changeAnimation("fighting",f1_img);
              //f2.changeAnimation("fighting",f2_img);
        console.log("f1")
        //f1.x = 10;
             // player.distance +=10
              //player.update();
             
            }
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      
  
     /* if(player.distance > 3660){
        player.lp++
        player.rank = player.lp;
        gameState = 2;
      }*/
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }