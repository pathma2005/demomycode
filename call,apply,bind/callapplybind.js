// call menas call the function now run this function immediately and use this object in js all function ar ethe object method
function greet(){
    console.log("hello",this.name);
}
const person={name:"sri"};
greet.call(person);
// big example of call
function data(name,age){
    console.log("name is",this.name);
    console.log("age is",this.age);
}
function info(city,phoneno){
    console.log("city is",this.city);
    console.log("phone is",this.phoneno)
}
const person1={name:"sri",age:22,city:"chennai",phoneno:1234567890};
data.call(person1);
info.call(person1)
// another example of call
const car={
    carBrand: function(){
        return this. brand+" "+this. model
    }
}
    const car1={
        brand:"ford",
        model:"mustang"
    }
const car2={
    brand:"chevrolet",
    model:"camaro",
}
console.log(car.carBrand.call(car1));
console.log(car.carBrand.call(car2));
// call method to pass the arguments
const bike={
    bikeBrand:function(color,price){
        return this. name+" "+this. type+" "+color+" "+price;
    }
}
const bike1={
    name:"yamaha",
    type:"r15",
}
console.log(bike.bikeBrand.call(bike1,"blue",150000));
// apply same as call but it take array as an argument run this function now but arguments should be in array form
function food(name,cost){
    console.log("food is",this.name);
    console.log("cost is",this.cost);
}
const item={name:"briyani",cost:250}
food.apply(item,["briyani",250])
// and then apply example is used in object method
