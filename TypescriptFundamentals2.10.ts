interface Shapes {
    calculateArea (): number;
}

class Circle implements Shapes {
    pie : number = 3.14;
    radius : number;
    constructor (radius: number)
    {
        this.radius = radius;
    }
    calculateArea(): number {
        return this.pie * this.radius * this.radius;
    }
    
}
class Square implements Shapes {
    side : number;
    constructor (side: number)
    {
        this.side = side;
    }
    calculateArea(): number {
        return this.side * this.side;
    }
    
}

class Rectangle implements Shapes {
    length : number;
    width : number;
    constructor (length: number, width : number)
    {
        this.length = length;
        this.width = width;
    }
    calculateArea(): number {
        return  this.length * this.width;
    }
}

var circle = new Circle(5);
var area =circle.calculateArea();
console.log(`Area of circle is: ${area}`);

var square = new Square(6);
var area =square.calculateArea();
console.log(`Area of square is: ${area}`);

var rectangle = new Rectangle(5,6);
var area =rectangle.calculateArea();
console.log(`Area of rectangle is: ${area}`);



