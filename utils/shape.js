class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    generateSVG() {
        return `<${this.type} width='100' height='100' fill='${this.color} />`;
    }
}

class Triagle extends Shape {
    constructor(color) {
        super('polygon', color);
    }
    generateSVG() {
        return `<polygon points='50,0 100,100 0,100' ${super.generateSVG().slice(1)}`;
    }
}

class Circle extends Shape {
    constructor(color) {
        super('circle', color);
    }
    generateSVG() {
        return `<circle cx='50' cy='50' r='50' ${super.generateSVG().slice(1)}`;
    }
}

class Square extends Shape {
    constructor(color) {
        super('rect', color);
    }
    generateSVG() {
        return `<rect width='100' height='100' ${super.generateSVG().slice(1)}`;
    }
}

module.exports = {
    Shape,
    Triagle,
    Circle,
    Square,
};