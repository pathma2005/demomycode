// class inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    details() {
        return "name:" + this.name + " age:" + this.age;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    showGrade() {
        return this.details() + " grade:" + this.grade;
    }
}

let stu1 = new Student("sri", 20, "A");
console.log(stu1.details());
console.log(stu1.showGrade());
// class inhertance
class Flower {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    flowers() {
        return "name:" + this.name + " color:" + this.color;
    }
}

class Rose extends Flower {
    constructor(name, color, price) {
        super(name, color);
        this.price = price;
    }

    showPrice() {
        return this.flowers() + " price:" + this.price;
    }
}

let rose1 = new Rose("rose", "red", 20);
console.log(rose1.flowers());
console.log(rose1.showPrice());
// class with modules export
class Bike {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    bikes() {
        return "name:" + this.name + " model:" + this.model;
    }
}

module.exports = Bike;

const bike1 = new Bike("ktm", "duke");
console.log(bike1.bikes());
// getters useing in class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get details() {
        return "name:" + this.name + " age:" + this.age;
    }
}

const animal1 = new Animal("dog", 5);
console.log(animal1.details);
// sttters useing in class
class Animals {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    animalInfo() {
        return "name:" + this.name + " breed:" + this.breed;
    }

    set setName(newName) {
        this.name = newName;
    }
}

const animal2 = new Animals("dog", "puppy");
animal2.setName = "cat";
console.log(animal2.animalInfo());
console.log(animal2.name);
// uesd both getters and setters in class
class DecorItem {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }

    get itemDetails() {
        return "type:" + this.type + " price:" + this.price;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }
}

const item1 = new DecorItem("vase", 50);
console.log(item1.itemDetails);

item1.setPrice = 60;
console.log(item1.itemDetails);
