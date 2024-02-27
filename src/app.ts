showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

class Shape {
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
    private radius: number;

    constructor(color: string, name: string, radius: number) {
        super(color, name);
        this.radius = radius;
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
    private length: number;
    private width: number;

    constructor(color: string, name: string, length: number, width: number) {
        super(color, name);
        this.length = length;
        this.width = width;
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
    private side: number;

    constructor(color: string, name: string, side: number) {
        super(color, name);
        this.side = side;
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
    private base: number;
    private height: number;

    constructor(color: string, name: string, base: number, height: number) {
        super(color, name);
        this.base = base;
        this.height = height;
    }

    calculateArea(): string {
        const area = (this.base * this.height) / 2;
        return `Area of the ${this.name}: ${area.toFixed(2)}`;
    }
}