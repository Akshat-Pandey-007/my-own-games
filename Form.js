class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.rbutton = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("my own game");
      this.title.position(600/2 - 50, 0);
      this.rbutton.position(600-70,10);
  
      this.input.position(600/2 - 40 , 500/2 - 80);
      this.button.position(600/2 + 30, 500/2);
  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(600/2 - 70, 500/4);
      });
      this.rbutton.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }