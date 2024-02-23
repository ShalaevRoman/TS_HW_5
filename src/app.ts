showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

// Створіть класи Circle, Rectangle, Square і Triangle.
//     У кожного з них є загальнодоступний метод calculateArea.
//     У кожної фігури є загальнодоступні властивості - колір і назва,
//     які не можна змінювати після створення.
//     У Square і Rectangle зі свого боку є ще додатковий метод print,
//     який виводить рядок із формулою розрахунку площі

class Shape {
    public readonly color: string;
    public readonly name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    protected static shapeInfo(info: string): string {
        return `Information about this shape - ${info}`
    }
}

class Circle extends Shape {
    private readonly radius: number;

    constructor(color: string, name: string, radius: number) {
        super(color, name);
        this.radius = radius;
    }

    calculateArea(): string {
        const area = Math.PI * this.radius ** 2;
        return `Area of the ${this.name}: ${area.toFixed(2)}`;
    }
}

class Rectangle extends Shape {
    private readonly length: number;
    private readonly width: number;

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
    private readonly side: number;

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
    private readonly base: number;
    private readonly height: number;

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