


var state = new Kiwi.State('Play');

state.preload = function () {
    
    this.addImage('sky', './assets/img/anime/sky-bg.png');

};

state.create = function () {

	// Adds image to the state as a background.
	this.sky = new Kiwi.GameObjects.Sprite(this, this.textures.sky, 0, 0);
	this.addChild(this.sky);
  
};


var gameOptions = {
	width: 768,
	height: 512
};

var game = new Kiwi.Game('game-container', 'LoadImage', state, gameOptions);


