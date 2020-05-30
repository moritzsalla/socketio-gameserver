var shortID = require('shortid');
var Vector2 = require('./vector3.js');

module.exports = class Player {
  constructor() {
    this.username = null;
    this.id = shortID.generate();
    this.position = new Vector2();
  }
};
