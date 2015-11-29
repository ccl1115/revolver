(function() {
  'use strict';

  function Welcome() {

  }

  Welcome.prototype.create = function () {
    var centerX = this.game.width * 0.5;
    var centerY = this.game.height * 0.5;
    this.add.text(centerX, centerY, '开始游戏', {
        font: '20px Arial',
        fill: '#ffffff',
        align: 'center'
    });
  };

  Welcome.prototype.update = function () {

  };

  window['revolver'] = window['revolver'] || {};
  window['revolver'].Welcome = Welcome;

}());
