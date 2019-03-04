export default class KeyboardInputSource {
  constructor() {
    this.keysDown = {};
    this.observers = [];

    addEventListener("keydown", event =>  {
	     this.keysDown[event.keyCode] = true;
       this.trigger();
     }, false);

    addEventListener("keyup", event =>  {
	      delete this.keysDown[event.keyCode];
     }, false);
  }

  regesterObserver(observer) {
    this.observers.push(observer)
  }

  trigger() {
    this.observers.forEach(observer => {
      observer.react(this.keysDown);
    });
  }




};
