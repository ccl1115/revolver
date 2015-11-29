(function() {
  'use strict';

  var Lolipop = window['revolver'].Sprites.Lolipop;

  function Menu() {
  }

  Menu.prototype = {
    create: function () {
      var centerX = this.game.width * 0.5;
      var centerY = this.game.height * 0.5;

      this.drawBackground(0xff9909);

      this.game.time.events.repeat(Phaser.Timer.SECOND / 2, 10, function() {
        var rX = this.game.rnd.integerInRange(0, 400);
        var rR = this.game.rnd.integerInRange(-200, 200);
        var lolipop = new Lolipop(this.game,
           centerX + rX, this.game.height, 250 + rR, 10 + rR / 20, 250 + rR,
           [this.game.rnd.integer() & 0x00ffffff, this.game.rnd.integer() & 0x00ffffff]);
      }, this);


      var text = this.add.text(centerX, centerY,
        '转盘历险记', {font: '42px Arial', fill: '#ffffff', align: 'center'
      });
      text.anchor.set(0.5);

      var pause = this.add.text(this.game.width * 0.5, this.game.height * 0.5 + 50,
        '继续', {font: '20px Arial', fill: '#ffffff', align: 'center'
      });
      pause.anchor.set(0.5);
      this.input.onDown.add(this.onDown, this);
    },

    update: function () {
    },

    onDown: function () {
      this.game.state.start('game');
    },

    drawBackground: function(color) {
      var g = this.game.add.graphics(0, 0);
      g.beginFill(color, 1);
      g.drawRect(0, 0, this.game.width, this.game.height);
      g.endFill();
    }
  };

  window['revolver'] = window['revolver'] || {};
  window['revolver'].Menu = Menu;
}());
