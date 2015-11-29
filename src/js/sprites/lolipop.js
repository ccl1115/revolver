(function() {
  'use strict';

  function createTexture(radius, width, height, colors) {
    if (colors instanceof Array && colors.length === 2) {
      var g = new Phaser.Graphics(0, 0);

      g.beginFill(colors[1], 1);
      g.drawRect(- width / 2, 0, width, height);
      g.endFill();

      g.lineStyle(0);
      g.beginFill(colors[0], 1);
      g.drawCircle(0, 0, radius);
      g.endFill();

      return g.generateTexture();
    }
  }

  function Lolipop(game, x, y, radius, width, height, colors) {
    this.radius = radius;
    this.barWidth = width;
    this.barHeight = height;
    this.breath = false;
    this.scaleDelta = 0;

    var texture = createTexture(radius, width, height, colors);

    Phaser.Sprite.call(this, game, x, y, texture);
    this.anchor.setTo(0.5, 1);

    game.add.existing(this);

    this.y += this.game.height * 2;

    var tween = this.game.add.tween(this);
    tween.to({ y: y}, 1000 + this.game.rnd.integerInRange(-500, 500), 'Linear', true);
    tween.onComplete.add(this.startBreath, this);
  }

  Lolipop.prototype = Object.create(Phaser.Sprite.prototype);
  Lolipop.prototype.constructor = Lolipop;

  Lolipop.prototype.startBreath = function() {
    this.breath = true;
    this.scaleDelta = 0.005;
  };

  Lolipop.prototype.update = function() {
    if (this.breath) {
      if (this.scale.x < 0.95) {
        this.scaleDelta = 0.002;
      } else if (this.scale.x > 1.05) {
        this.scaleDelta = -0.002;
      }
      this.scale.x += this.scaleDelta;
      this.scale.y += this.scaleDelta;
    }

    if (this.x > -this.radius) {
      this.x -= this.radius / 100;
    } else {
      this.x = this.game.width + this.radius;
    }
  };

  window['revolver'] = window['revolver'] || {};
  window['revolver'].Sprites = window['revolver'].Sprites || {};

  window['revolver'].Sprites.Lolipop = Lolipop;

}());
