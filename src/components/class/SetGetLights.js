// ES6 get and set
class SetGetLights {

  _lights: any;

  constructor() {
    this._lights = '';
  }

  get _getLight() {
    return this._lights;
  }

  set _setLight(newData: any) {
    this._lights = newData; // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    return this._lights;
  }
}

export default SetGetLights;
