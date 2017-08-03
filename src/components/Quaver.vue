<style scoped>



</style>

<template>
<div id="quaver">
  <canvas id="myCanvas" width="800" height="500">
        alternate content
    </canvas>
</div>
</template>

<script>
import * as StageData from '../utils/StageData';

export default {
  name: 'quaver',
  data() {
    return {
      ctx: null,
      stage: null,
      rects: [],
      // quaver: null,
      quaver: {
        jumpState: null,
        fallState: null,
        walkState: null
      },
      pose: null,
    }
  },
  computed: {},
  methods: {
    tick: function(event) {
      // let rect = this.rects[0];
      // let quaver = this.quaver;
      // let pose = this.pose;

      // var c = document.getElementById("myCanvas");
      // let ctx=c.getContext("2d");
      // ctx.translate(50,50);
      // quaver.x += 5;
      // this.stage.x -= 5;
      // this.pose = (this.pose + 0.4) % 2;
      // quaver.image = new createjs.Bitmap("../../static/img/" + Math.floor(pose + 1) + ".png").image;
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

    handleKeyDown: function(e) {
      e = e || window.event;
      if (e.keyCode == '38') {
        // up arrow
        this.quaver.jumpState = true;
        console.log("up");
      } else if (e.keyCode == '40') {
        // down arrow
        //why false????
        this.quaver.fallState = false;
        console.log("down");
      } else if (e.keyCode == '37') {
        // left arrow
        console.log("left");
      } else if (e.keyCode == '39') {
        // right arrow
        this.quaver.walkState = true;
        console.log("right");
      }
    },

    handleKeyUp: function(e) {
      e = e || window.event;
      // console.log(e);
      // console.log(this);

      if (e.keyCode == '38') {
        // up arrow
        this.quaver.jumpState = false;
        console.log("up keyup");

      } else if (e.keyCode == '40') {
        // down arrow
        // this.quaver.fallState = false;
        console.log("down keyup");
      } else if (e.keyCode == '37') {
        // left arrow
        console.log("left keyup");
      } else if (e.keyCode == '39') {
        this.quaver.walkState = false;
        console.log("right keyup");
      }
    },

    game: function() {
      // let rect = this.rects[0];
      let pose = this.pose;
      let quaver = this.quaver;
      // if (gameover) {
      //   gameover();
      // }
      // console.log(canvas);

      // this.stage.addChild(quaver);
      // this.stage.addChild(rect);

      if (this.isOnGround()) {
        this.quaver.fallState = false;
      } else {
        if (!this.quaver.jumpState)
          this.quaver.fallState = true;
      }

      if (quaver.fallState) {
        this.fall();
        if (quaver.outState) {
          quaver.velocity = 0;
        }
      }

      if (quaver.jumpState) {
        this.jump();
      }
      if (quaver.walkState) {
        this.walk();
      }
    },

    fall: function() {
      let quaver = this.quaver;
      let rects = this.rects;
      quaver.velocity += 0.29 * quaver.gravity;
      for(let i = 0; i < rects.length; i++) {
        let rect = rects[i];
        let q_rect = new createjs.Rectangle(quaver.x, quaver.y + quaver.velocity, 61, 86);
        let rect_rect = new createjs.Rectangle(rect.rectangle.x, rect.rectangle.y, rect.rectangle.width, rect.rectangle.height);

        if (rect_rect.intersects(q_rect)) {
          quaver.y = rect.rectangle.y - 86;
          return ;
        } 
      }
      quaver.y += quaver.velocity;
      if (quaver.y >= 600) {
        alert("GAME OVER");
        this.resetPosition();
        document.location.reload();
      }

    },

    walk: function() {
      this.quaver.x += 5;
      this.stage.x -= 5;
      if(!this.quaver.jumpState && !this.quaver.fallState){
        this.pose = (this.pose + 0.4) % 2;
        this.quaver.image = new createjs.Bitmap("../../static/img/" + Math.floor(this.pose + 2) + ".png").image;
      }
    },

    jump: function() {
      let quaver = this.quaver;
      quaver.fallState = false;
      quaver.velocity -= quaver.gravity;
      this.pose = (this.pose + 0.4) % 2;
      this.quaver.image = new createjs.Bitmap("../../static/img/" + Math.floor(this.pose + 4) + ".png").image;
      if (quaver.velocity < 0) {
        quaver.velocity = -quaver.velocity;
        quaver.jumpState = false;
        quaver.fallState = true;
        quaver.velocity = 25;
      }
      if (quaver.y < 0) {
        quaver.jumpState = false;
        quaver.fallState = true;
        quaver.velocity = 25;
      }
      quaver.y -= quaver.velocity;
    },

    resetPosition: function() {
      //looks super weird here!!!!
      this.quaver.y = 250;
    },
    isOnGround: function() {
      let quaver = this.quaver;
      let rects = this.rects;
      for(let i = 0; i < rects.length; i++) {
        let rect = rects[i];
        let q_rect = new createjs.Rectangle(quaver.x, quaver.y, 61, 86);
        let rect_rect = new createjs.Rectangle(rect.rectangle.x, rect.rectangle.y, rect.rectangle.width, rect.rectangle.height);
        if(rect_rect.intersects(q_rect)){
          return true;
        }
      }
      return false;
    }
  },
  mounted: function() {

    
    //Create a stage by getting a reference to the canvas
    this.stage = new createjs.Stage('myCanvas');
    var c = document.getElementById("myCanvas");
    this.ctx = c.getContext("2d");
    this.pose = 1;
    this.quaver = new createjs.Bitmap("../../static/img/" + this.pose + ".png");
    //Create a Shape DisplayObject.
    this.rects = StageData.getObstacleData('stage1');

    let rects = this.rects;
    let quaver = this.quaver;

    quaver.x = 100;
    quaver.y = 264;
    quaver.gravity = 2;
    quaver.velocity = 25;
    quaver.fallState = false;
    quaver.jumpState = false;
    // quaver.jumpState = true;
    //Add Shape instance to stage display list

    this.stage.addChild(quaver);
    rects.forEach( (rect) =>{
      this.stage.addChild(rect);
    })

    createjs.Ticker.addEventListener("tick", this.tick);
    createjs.Ticker.setFPS(24);
    // console.log(document);
    // let that = this;
    window.onkeydown = this.handleKeyDown.bind(this);
    window.onkeyup = this.handleKeyUp.bind(this);

  },
  beforeCreate(){
  },
  created: function() {

  }
}
</script>
