var state = new Kiwi.State('Play');

state.preload = function () {
    
    // this.addImage('time', './assets/img/logo/heart.png' );
    this.myTime = new Kiwi.HUD.Widget.Time( this.game, '', 50, 50 );
    this.game.huds.defaultHUD.addWidget( this.myTime );

    this.myTime.style.color = 'black';
    this.myTime.start();

};

state.create = function () {





  
};


var gameOptions = {
	width: 768,
	height: 512
};

var game = new Kiwi.Game('game-container', 'Time', state, gameOptions);


