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
}();"use strict";

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
}();"use strict";

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
  }]);

  return SkillSprite;
}();"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Boundry = function () {
  function Boundry(xMin, xMax, yMin, yMax) {
    _classCallCheck(this, Boundry);

    this.xMin = xMin;
    this.xMax = xMax;
    this.yMax = yMin;
    this.yMax = yMax;
  }

  _createClass(Boundry, [{
    key: "isInBoundry",
    value: function isInBoundry(x, y) {
      if (x >= this.xMin && x <= this.xMax) return true;else return false;
    }
  }]);

  return Boundry;
}();"use strict";

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

;"use strict";

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
}();"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharacterSprite = function () {
  function CharacterSprite(height, width, context) {
    _classCallCheck(this, CharacterSprite);

    this.height = height;
    this.width = width;
    this.context = context;
  }

  _createClass(CharacterSprite, [{
    key: "draw",
    value: function draw(x, y) {
      this.context.beginPath();
      this.context.rect(x, y, this.width, this.height);
      this.context.fill();
      this.context.closePath();
    }
  }]);

  return CharacterSprite;
}();"use strict";

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
}();"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(model, sprite) {
    _classCallCheck(this, Character);

    this.model = model;
    this.sprite = sprite;
  }

  _createClass(Character, [{
    key: "draw",
    value: function draw() {
      this.sprite.draw(this.model.getX(), this.model.getY());
    }
  }]);

  return Character;
}();"use strict";

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
}();"use strict";

var game = new Game(document.getElementById("gameCanvas"));
game.run();