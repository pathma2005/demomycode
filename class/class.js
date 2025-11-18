// Simple Class
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    bio() {
        return "name: " + this.name + " age: " + this.age;
    }
}

const persons = new Person1("sri", 20);
console.log(persons.bio());
// basic class using extends the perent class and use the super keyword
class chocolated{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    choco(){
        return "name:"+this.name+"price:"+this.price;
    }
}
class darkchoco extends chocolated{
    constructor(name,price,flover){
     super(name,price);
     this.flover=flover;
    }
    choco(){
      return super.choco()+"flover:"+this.flover;
    }
}
let choco1=new darkchoco("kitkat",100,"sweet");
console.log(choco1.choco());


