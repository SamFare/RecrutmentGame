"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
  }

  _createClass(Game, [{
    key: "run",
    value: function run() {
      var player = new PlayerFactory().build(this.canvas);
      var skill = new SkillFactory().build(this.canvas);

      new KeyboardInputSource().regesterObserver(player.model);

      this.nextLoop([player, skill]);
    }
  }, {
    key: "nextLoop",
    value: function nextLoop(drawables) {
      var _this = this;

      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      drawables.forEach(function (drawable) {
        drawable.draw();
      });

      setTimeout(function (time) {
        _this.nextLoop(drawables);
      }, 10);
    }
  }]);

  return Game;
}();