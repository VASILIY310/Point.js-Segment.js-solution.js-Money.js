function Point(x, y) {
  this.x = x;
  this.y = y;

  this.getX = function () {
    return this.x;
  };

  this.getY = function () {
    return this.y;
  };
}

const point = new Point(10, 20);

console.log(point.getX()); // 10
console.log(point.getY()); // 20