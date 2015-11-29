(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      var escKey = this.input.keyboard.addKey(Phaser.Keyboard.ESC);
      escKey.onDown.add(this.onEscKeyDown, this);
    },

    update: function () {

    },

    onInputDown: function () {
    },

    onEscKeyDown: function() {
      this.game.state.start('menu');
    }
  };

  window['revolver'] = window['revolver'] || {};
  window['revolver'].Game = Game;
}());
