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

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;

  this.getBeginPoint = function () {
    return this.beginPoint;
  };

  this.getEndPoint = function () {
    return this.endPoint;
  };
}

const p1 = new Point(1, 2);
const p2 = new Point(3, 4);

const s = new Segment(p1, p2);

console.log(s.getBeginPoint());
console.log(s.getEndPoint());