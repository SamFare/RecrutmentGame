"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerFactory = function () {
  function PlayerFactory() {
    _classCallCheck(this, PlayerFactory);
  }

  _createClass(PlayerFactory, [{
    key: "build",
    value: function build(canvas) {
      var playerHeight = 50;
      var playerWidth = 25;
      var model = new KeyboardListenerModel((canvas.width - playerWidth) / 2, canvas.height - playerHeight, new Boundry(-(playerWidth / 2), canvas.width - playerWidth / 2, 0, canvas.height));
      var sprite = new CharacterSprite(playerHeight, playerWidth, canvas.getContext("2d"));

      return new Character(model, sprite);
    }
  }]);

  return PlayerFactory;
}();