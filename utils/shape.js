class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    generateSVG() {
        return ` fill='${this.color}'/>`;
    }
}

class Triagle extends Shape {
    constructor(color) {
        super('polygon', color);
    }
    generateSVG() {
        return `<polygon points='150,20 220,180 80,180' ${super.generateSVG()}`;
    }
}

class Circle extends Shape {
    constructor(color) {
        super('circle', color);
    }
    generateSVG() {
        return `<circle cx='150' cy='100' r='80' ${super.generateSVG()}`;
    }
}

class Square extends Shape {
    constructor(color) {
        super('rect', color);
    }
    generateSVG() {
        return `<rect width='160' height='160' x='70' y='20' ${super.generateSVG()}`;
    }
}

module.exports = {
    Shape,
    Triagle,
    Circle,
    Square,
};