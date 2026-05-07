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

function reverse(segment) {
  const begin = new Point(
    segment.getEndPoint().getX(),
    segment.getEndPoint().getY()
  );

  const end = new Point(
    segment.getBeginPoint().getX(),
    segment.getBeginPoint().getY()
  );

  return new Segment(begin, end);
}

/* проверка */
const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

console.log(
  segment.beginPoint.x,
  segment.beginPoint.y,
  segment.endPoint.x,
  segment.endPoint.y
); // 1 10 11 -3

console.log(
  reversedSegment.beginPoint.x,
  reversedSegment.beginPoint.y,
  reversedSegment.endPoint.x,
  reversedSegment.endPoint.y
); // 11 -3 1 10