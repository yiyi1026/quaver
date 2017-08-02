<template>
  <div id="quaver">
    <canvas id="myCanvas"
    width="800" height="500" >
		alternate content
	</canvas>
  </div>
</template>

<script>
export default {
  name: 'quaver',
  data() {
    return {
      stage: null,
      rect: null,
      quaver: null,
      pose: null,
    }
  },
  computed: {
  },
  methods: {
		tick: function(event) {
      let rect = this.rect;
      let quaver = this.quaver;
      let pose = this.pose;

      rect.x -= 5;
      this.pose = (this.pose + 0.4) % 2;
      quaver.image = new createjs.Bitmap("../../static/img/" + Math.floor(pose + 1) + ".png").image;
      //   quaver.x = 0;
      //   // stage.fall();
      // }
      // quaver.fallState = true;


      this.game();
      // if (rect.x < -400) {
      //   //   rect.x = 500;
      // }
      // if (quaver.y = 800) {
      //   quaver.velocity = 0;
      // }
      this.stage.update();
    },
    handleKeydown: function(e){
      e = e || window.event;

      if (e.keyCode == '38') {
          // up arrow
          console.log("up")
      }
      else if (e.keyCode == '40') {
          // down arrow
          console.log("down")
      }
      else if (e.keyCode == '37') {
        // left arrow
          console.log("left")
      }
      else if (e.keyCode == '39') {
        // right arrow
          console.log("right")
      }
    },
    game: function() {
      let rect = this.rect;
      let pose = this.pose;
      let quaver = this.quaver;
      // if (gameover) {
      //   gameover();
      // }

      this.stage.addChild(quaver);
      this.stage.addChild(rect);

      if (quaver.fallState) {
        this.fall();
        if (quaver.outState) {
          quaver.velocity = 0;
        }
      }

      if (quaver.jumpState) {
        this.jump();
      }

      // if (walking) {
      //   walk();
      // }
    },

    fall: function() {
      let quaver = this.quaver;
      quaver.velocity += 0.29 * quaver.gravity;
      quaver.y += quaver.velocity;
    },

    jump: function() {
      let quaver = this.quaver;
      quaver.fallState = false;
      quaver.velocity -= quaver.gravity;
      if (quaver.velocity < 0) {
        quaver.velocity = -quaver.velocity;
        quaver.jumpState = false;
        quaver.fallState = true;
      }
      if (quaver.y < 0) {
        quaver.jumpState = false;
        quaver.fallState = true;
      }
      quaver.y -= quaver.velocity;
    }
  },
  mounted: function () {
    console.log("ready")
    //Create a stage by getting a reference to the canvas
    this.stage = new createjs.Stage('myCanvas');
    this.pose = 1;
    this.quaver = new createjs.Bitmap("../../static/img/" + this.pose + ".png");
    //Create a Shape DisplayObject.
    this.rect = new createjs.Shape();
    this.rect.graphics.beginFill('333333').drawRect(0, 350, 400, 100);
    // rect.graphics.beginFill('333333').drawRect(0, 450, 800, 100);

    let rect = this.rect;
    let quaver = this.quaver;

    quaver.y = 264;
    quaver.gravity = 2;
    quaver.velocity = 25;
    quaver.fallState = false;
    quaver.jumpState = false;
    quaver.jumpState = true;
    //Add Shape instance to stage display list

    this.stage.addChild(quaver);
    this.stage.addChild(rect);

    createjs.Ticker.addEventListener("tick", this.tick);
    createjs.Ticker.setFPS(24);
  },
  created: function(){
    console.log("created")
  },
}
</script>

<style>
</style>
