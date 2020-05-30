module.exports = class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = y;
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  normalized() {
    var mag = this.magnitude();
    return new Vector3(this.x / mag, this.y / mag, this.z / mag);
  }

  distance(otherVec = Vector2) {
    var direction = new Vector3();
    direction.x = otherVec.x - this.x;
    direction.y = otherVec.x - this.y;
    direction.z = otherVec.x - this.z;
    return direction.magnitude();
  }

  consoleOutput() {
    return `(${this.x},${this.y},${this.z})`;
  }
};
