"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyboardInputSource = function () {
  function KeyboardInputSource() {
    var _this = this;

    _classCallCheck(this, KeyboardInputSource);

    this.keysDown = {};
    this.observers = [];

    addEventListener("keydown", function (event) {
      _this.keysDown[event.keyCode] = true;
      _this.trigger();
    }, false);

    addEventListener("keyup", function (event) {
      delete _this.keysDown[event.keyCode];
    }, false);
  }

  _createClass(KeyboardInputSource, [{
    key: "regesterObserver",
    value: function regesterObserver(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "trigger",
    value: function trigger() {
      var _this2 = this;

      this.observers.forEach(function (observer) {
        observer.react(_this2.keysDown);
      });
    }
  }]);

  return KeyboardInputSource;
}();

;