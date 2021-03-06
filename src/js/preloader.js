(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {
    preload: function () {
      this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
      this.load.setPreloadSprite(this.asset);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.loadResources();

      this.ready = true;
    },

    loadResources: function () {
      // load your assets here
      this.onLoadComplete();
    },

    create: function () {

    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('welcome');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['revolver'] = window['revolver'] || {};
  window['revolver'].Preloader = Preloader;
}());
