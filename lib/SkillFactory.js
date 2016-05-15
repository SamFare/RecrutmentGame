"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SkillFactory = function () {
  function SkillFactory() {
    _classCallCheck(this, SkillFactory);
  }

  _createClass(SkillFactory, [{
    key: "build",
    value: function build(canvas) {
      return new Character(new AutomatedDropModel(0, 0), new SkillSprite(10, 10, canvas.getContext("2d")));
    }
  }]);

  return SkillFactory;
}();