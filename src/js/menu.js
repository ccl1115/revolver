(function() {
  'use strict';

  function Menu() {
    this.lolipop = null;
  }

  Menu.prototype = {
    create: function () {
      var centerX = this.game.width * 0.5;
      var centerY = this.game.height * 0.5;

      this.drawBackground(0xff9909)

      var g = this.drawLolipop(0, 0, 250, 10, 400, [0x334343, 0x328942]);
      var s = this.game.add.sprite(centerX, centerY + 125, g.generateTexture());

      s.anchor.setTo(0.5, 0.5);
      this.lolipop = s;
      this.scaleDown();

      var text = this.add.text(centerX, centerY,
        '转盘历险记', {font: '42px Arial', fill: '#ffffff', align: 'center'
      });
      text.anchor.set(0.5);

      var pause = this.add.text(this.game.width * 0.5, this.game.height * 0.5 + 50,
        '暂停', {font: '20px Arial', fill: '#cccccc', align: 'center'
      });
      pause.anchor.set(0.5);
      this.input.onDown.add(this.onDown, this);
    },

    update: function () {
      if (this.lolipop.scale < 0.8) {
        this.lolipop.scale += 0.05;
      } else if (this.lolipop.scale > 1.2) {
        this.lolipop.scale -= 0.05;
      }
    },

    onDown: function () {
      this.game.state.start('game');
    },

    drawLolipop: function(x, y, radius, width, height, colors) {
      if (colors instanceof Array && colors.length === 2) {
        var g = new Phaser.Graphics(0, 0);

        g.beginFill(colors[1], 1);
        g.drawRect(x - width / 2, y, width, height);
        g.endFill();

        g.lineStyle(0);
        g.beginFill(colors[0], 1);
        g.drawCircle(x, y, radius);
        g.endFill();

        return g;
      }
    },

    drawBackground: function(color) {
      var g = this.game.add.graphics(0, 0);
      g.beginFill(color, 1);
      g.drawRect(0, 0, this.game.width, this.game.height);
      g.endFill();
    },

    scaleDown: function() {
      var scaleDown = this.game.add.tween(this.lolipop.scale);
      scaleDown.to({ x: 0.9, y: 0.9 }, 1000, 'Linear', true);
      scaleDown.onComplete.add(this.scaleUp, this);
    },

    scaleUp: function() {
      var scaleUp = this.game.add.tween(this.lolipop.scale);
      scaleUp.to({ x: 1.1, y: 1.1 }, 1000, 'Linear', true);
      scaleUp.onComplete.add(this.scaleDown, this);
    }

  };

  window['revolver'] = window['revolver'] || {};
  window['revolver'].Menu = Menu;
}());
