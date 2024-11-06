var radius = 40;
var x = -radius;
var speed = 0.5;
let fillColor, fillColor2; // random color vars
let car1, car2; // instances cars

function setup() {
    createCanvas(600, 500);
    background(100);
    ellipseMode(RADIUS);

    // random colors
    fillColor = color(random(0, 255), random(0, 255), random(0, 255));
    fillColor2 = color(random(0, 255), random(0, 255), random(0, 255));

    //create car objects with random speeds
    car1 = new Car(fillColor, 60, random(0.5, 3));  
    car2 = new Car(fillColor2, 400, random(0.5, 3));
}

function draw() {
    background(0);

    // update cars
    fill(fillColor);
    car1.updateCar();
    car1.displayCar();

    fill(fillColor2);
    car2.updateCar();
    car2.displayCar();

    //check car won
    if (car1.x >= width) {
        victoryScreen(fillColor);
        noLoop();
    } else if (car2.x >= width) {
        victoryScreen(fillColor2);
        noLoop();
    }
}

// Car class
class Car {
    constructor(color, y, speed) {
        this.color = color;
        this.y = y;
        this.x = -radius;
        this.speed = speed;  //random speed for each car
    }
    // update position of object
    updateCar() {
        this.x += this.speed;
    }
    // show car
    displayCar() {
        fill(this.color);
        arc(this.x, this.y, radius, radius, 0.52, 5.76);
        ellipse(this.x - 20, this.y + 40, 10, 10);
        ellipse(this.x + 25, this.y + 40, 10, 10);
    }
}

//victory screen
function victoryScreen(winningColor) {
    background(winningColor);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Car Wins!", width / 2, height / 2);
}