class Room {
  constructor(name, length, width, capacity = 15) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.capacity = capacity;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return this.length * 2 + this.width * 2;
  }
  available = true;
  //extra just added on
  location = "Las Vegas";
  distance = 2021;
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20, 18);
room2.available = false;
room2.location = "New York";
room2.distance = 632;

console.log(room1);
console.log(room2);
console.log(room1.getPerimeter());
console.log(room2.getPerimeter());
console.log(room1.getArea());
console.log(room2.getArea());
