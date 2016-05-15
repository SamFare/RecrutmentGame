"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutomatedDropModel = function () {
  function AutomatedDropModel(x, y) {
    _classCallCheck(this, AutomatedDropModel);

    this.x = x;
    this.y = y;
    this.speed = 1;
    this.go();
  }

  _createClass(AutomatedDropModel, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }
  }, {
    key: "update",
    value: function update() {
      this.y += this.speed;
    }
  }, {
    key: "getSpeed",
    value: function getSpeed() {
      return this.speed;
    }
  }, {
    key: "go",
    value: function go() {
      var _this = this;

      setTimeout(function (goLoop) {
        _this.update();
        _this.go();
      }, 10);
    }
  }]);

  return AutomatedDropModel;
}();