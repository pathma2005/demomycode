// class inheritance example
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    details(){
        return 'name:'+this.name+'age:'+this.age;
    }

}
class student extends person{
    constructor(name,age,grade){
     super(name,age);
     this.grade=grade;
    }
    showgrade(){
        return this.details()+'grade:'+this.grade;
    }
}
let stu1=new student("sri",20,"A");
console.log(stu1.details());
// 
console.log(stu1.showgrade());
// classess
class person1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
  bio(){
      return "name: " + this.name +" age: " + this.age
  }
    }
    const persons=new person1("sri",20)
    console.log(persons.bio());
    // class inheritance using extends keyword
    class flower{
        constructor(name,color){
            this.name=name;
            this.color=color;
        }
        flowers(){
            return "name:"+this.name+"color:"+this.color;
        }
    }
    class rose extends flower{
        constructor(name,color,price){
            super(name,color);
            this.price=price;
        }
        showprice(){
            return this.flowers()+"price:"+this.price;
        }
    }
    let rose1=new rose("rose","red",20);
    console.log(rose1.flowers());
    console.log(rose1.showprice());
// class using module exports
class bike{
    constructor(name,model){
        this.name=name;
        this.model=model;
    }
    bikes(){
        return "name:"+this.name+"module:"+this.model;
    }
}
module.export=bike;
const bike1=new bike("ktm","duke");
console.log(bike1.bikes());
//using getters in class
class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
get details(){
        return "name:"+this.name+"age:"+this.age;
    }
}
const animal1=new animal("dog",5);
console.log(animal1.details);
// using stter methids in class
class animals{
    constructor(name,breed){
        this.name=name;
        this.breed=breed;
    }
    set setName(newName){
        this.name=newName;
    }
}
const animal2=new animals("dog","puppy");
animal2.setName="cat";
console.log(animal2)
console.log(animal2.name);
