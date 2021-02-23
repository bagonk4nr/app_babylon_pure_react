// ES6 get and set
class SetGetScene {

  _scene: any;

  constructor() {
    this._scene = '';
  }

  get _getScene() {
    return this._scene;
  }

  set _setScene(newData: any) {
    this._scene = newData; // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    return this._scene;
  }
}

export default SetGetScene;
