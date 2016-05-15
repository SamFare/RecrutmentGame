"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(model, sprite) {
    _classCallCheck(this, Character);

    this.model = model;
    this.sprite = sprite;
    this.HitBox = new HitBox(this.model.getX(), this.model.getY(), this.sprite.getHeight(), this.sprite.getWidth());
  }

  _createClass(Character, [{
    key: "draw",
    value: function draw() {
      this.HitBox = new HitBox(this.model.getX(), this.model.getY(), this.sprite.getHeight(), this.sprite.getwidth());
      this.sprite.draw(this.model.getX(), this.model.getY());
    }
  }]);

  return Character;
}();