<template>
<!-- <div class="home">
    <h1>Home</h1>
    Please enable the microphone input on your Chrome browser.
    smaller voice to make the quaver to walk,
    louder voice to jump.
  </div> -->
<div>
  <span id="menuFrame">
      <div class='menu'>
        <h4>Don't Stop ! Quaver ♪</h4>
      </div>
      <div class='menu'>
        <h5 class='startMenuTips'>Please enable the microphone input on your Chrome browser.
        <br/>Tips: smaller voice to walk,
        <br/>
        louder voice to jump.</h5>
</div>
<div class='menu '>
  <img class='quaver' src='../../static/img/1.png' />
</div>
<div class='menu'>
  <button class='menuButton' v-on:click='handleClick' name='stage1'>Stage 1</button>
</div>
<div class='menu'>
  <button class='menuButton' v-on:click='handleClick' name='stage2'>Stage 2</button>
</div>
<div class='menu'>
  <button class='menuButton' v-on:click='handleClick' name='stage3'>Stage 3</button>
</div>
</span>
</div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    handleClick: function(event) {
      window.location = "#/quaver?s=" + event.currentTarget.name;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  padding-top: 30px;
  font-size: 24px;
}

h5 {
  font-size: 18px;
}

.menu {
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
}

.quaver {
  width: 50px;
  height: 68px;
}

#menuFrame {
  width: 800px;
  height: 500px;
  padding-left: 0;
  padding-right: 0;
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* background-color: #aaaaaa; */
  background-color: #e3e3e3;
}

.menuButton {
  background-color: #bcbcbc;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 0px solid #c2c2c2;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-family: Trebuchet MS;
  font-size: 15px;
  font-weight: bold;
  padding: 11px 23px;
  text-decoration: none;
}

.menuButton:hover {
  background-color: #666666;
  /* background-color:#d3d3d3; */
}

.menuButton:active {
  position: relative;
  top: 2px;
}

.menuButton:focus {
  outline: 0;
}
</style>
