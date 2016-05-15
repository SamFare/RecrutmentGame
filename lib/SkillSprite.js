"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SkillSprite = function () {
  function SkillSprite(height, width, context) {
    _classCallCheck(this, SkillSprite);

    this.height = height;
    this.width = width;
    this.context = context;
  }

  _createClass(SkillSprite, [{
    key: "draw",
    value: function draw(x, y) {
      this.context.beginPath();
      this.context.rect(x, y, this.width, this.height);
      this.context.fill();
      this.context.closePath();
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }]);

  return SkillSprite;
}();