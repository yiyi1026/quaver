<template>
  <!-- <div class="home">
    <h1>Home</h1>
  </div> -->
  <div >
    <span id="menuFrame">
      <div class='menu'>
        Don't Stop ! Quaver ♪
      </div>
      <div class='menu '>
        <img class='quaver' src='../../static/img/1.png'/>
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
    handleClick: function(event){
      console.log(event.currentTarget.name);
      window.location = "#/quaver?s="+event.currentTarget.name;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.menu{
  text-align:center;
  padding-top: 30px;
}

.quaver{
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
	background-color:#bcbcbc;
	-moz-border-radius:5px;
	-webkit-border-radius:5px;
	border-radius:5px;
	border:0px solid #c2c2c2;
	display:inline-block;
	cursor:pointer;
	color:#333333;
	font-family:Trebuchet MS;
	font-size:15px;
	font-weight:bold;
	padding:11px 23px;
	text-decoration:none;
}
.menuButton:hover {
	background-color:#666666;
	/* background-color:#d3d3d3; */
}
.menuButton:active {
	position:relative;
	top:2px;
}
.menuButton:focus {
	outline: 0;
}
</style>
