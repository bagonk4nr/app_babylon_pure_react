// ES6 get and set
class SetGetData {

  _data: any;

  constructor() {
    this._data = '';
  }

  get _getData() {
    return this._data;
  }

  set _setData(newData: any) {
    this._data = newData; // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    return this._data;
  }
}

export default SetGetData;
