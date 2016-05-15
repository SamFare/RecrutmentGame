"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HitBox = function () {
  function HitBox(x, y, height, width) {
    _classCallCheck(this, HitBox);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  _createClass(HitBox, [{
    key: "getXMax",
    value: function getXMax() {
      return this.x + this.width;
    }
  }, {
    key: "getXMin",
    value: function getXMin() {
      return this.x;
    }
  }, {
    key: "getYmin",
    value: function getYmin() {
      return this.y;
    }
  }, {
    key: "getYmax",
    value: function getYmax() {
      return this.y + this.height;
    }
  }]);

  return HitBox;
}();