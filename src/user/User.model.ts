// tslint:disable-next-line no-var-requires
const UUID = require('uuidjs');

export default class User {
  public id: string;
  public name: string;

  constructor(name: string) {
    this.id = UUID.generate();
    this.name = name;
  }
}
