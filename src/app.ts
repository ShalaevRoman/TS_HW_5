showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

abstract class Shape {
    constructor(
        public color: string,
        public name: string
    ) {
    }
    protected static shapeInfo(info: string): string {
        return `Information about this shape - ${info}`;
    }
}

class Circle extends Shape {
    constructor(color: string, name: string, private radius: number) {
        super(color, name);
    }

    calculateArea(): string {
        const area = Math.PI * this.radius ** 2;
        return `Area of the ${this.name}: ${area.toFixed(2)}`;
    }
}

const ball = new Circle('blue', 'SuperBall', 20);
console.log(ball.name);
console.log(ball.calculateArea());

class Rectangle extends Shape {
    constructor(color: string, name: string, private length: number, private width: number) {
        super(color, name);
    }

    calculateArea(): string {
        const area = this.length * this.width;
        return `Area of the ${this.name}: ${area.toFixed(2)}`;
    }

    print(): void {
        console.log(`Formula for calculating the area of the ${this.name}: length * width`);
    }
}

class Square extends Shape {

    constructor(color: string, name: string, private side: number) {
        super(color, name);
    }

    calculateArea(): string {
        const area = this.side ** 2;
        return `Area of the ${this.name}: ${area.toFixed(2)}`;
    }

    print(): void {
        console.log(`Formula for calculating the area of the ${this.name}: side * side`);
    }
}

class Triangle extends Shape {

    constructor(color: string, name: string, private base: number, private height: number) {
        super(color, name);
    }

    calculateArea(): string {
        const area = (this.base * this.height) / 2;
        return `Area of the ${this.name}: ${area.toFixed(2)}`;
    }
}