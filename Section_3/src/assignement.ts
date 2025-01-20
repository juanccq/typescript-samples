interface Shape {
  name: string;
  area(): number;
}

class Circle implements Shape {
  public constructor(private radius: number){}

  get name(): string {
    return 'Circle';
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  public constructor(private length: number, private width: number) {}

  get name(): string {
    return 'Rectangle';
  }

  area(): number {
    return this.length * this.width;
  }
}


function logShapeAddition(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const shape = args[0];

    console.log(`Shape ${shape.name} added to the container. Size: ${shape.area()}`);

    originalMethod.apply(this, args)
  }

  return descriptor;
}

class ShapeContainer<T extends Shape> {
  private shapes: T[] = [];

  @logShapeAddition
  addShape(shape: T): void {
    this.shapes.push(shape);
  }

  calculateTotalArea(): number {
    return this.shapes.reduce((total, shape) => total + shape.area(), 0);
  }

  findLargestShape(): T | null {
    if(this.shapes.length === 0) {
      return null;
    }

    return this.shapes.reduce((largest, shape) => (shape.area() > largest.area() ? shape : largest), this.shapes[0]);
  }
}

const shapeContainer1 = new ShapeContainer<Shape>();
const circle1 = new Circle(5);
const rectangle1 = new Rectangle(3, 5);
const circle2 = new Circle(7);
const rectangle2  = new Rectangle(5, 2);

shapeContainer1.addShape(circle1);
shapeContainer1.addShape(rectangle1);
shapeContainer1.addShape(circle2);
shapeContainer1.addShape(rectangle2);

console.log(`The total are of all shapes: ${shapeContainer1.calculateTotalArea()}`);

const largestShape = shapeContainer1.findLargestShape();

if(largestShape) {
  console.log(`Shape with the largest area: ${largestShape.name}`);
}
else {
  console.log('No shapes in the container');
}
