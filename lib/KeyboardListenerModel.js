"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyboardListenerModel = function () {
  function KeyboardListenerModel(x, y, boundry) {
    _classCallCheck(this, KeyboardListenerModel);

    this.x = x;
    this.y = y;
    this.boundry = boundry;
    this.speed = 10;
  }

  _createClass(KeyboardListenerModel, [{
    key: "setBoundry",
    value: function setBoundry(boundry) {
      this.boundry = boundry;
    }
  }, {
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
    key: "getSpeed",
    value: function getSpeed() {
      return this.speed;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      this.speed = speed;
    }
  }, {
    key: "react",
    value: function react(keys) {
      if (37 in keys) {
        var tmp = this.x;
        if (this.boundry.isInBoundry(tmp -= this.speed)) {
          this.x -= this.speed;
        }
      }
      if (39 in keys) {
        var tmp = this.x;
        if (this.boundry.isInBoundry(tmp += this.speed)) {
          this.x += this.speed;
        }
      }
    }
  }]);

  return KeyboardListenerModel;
}();