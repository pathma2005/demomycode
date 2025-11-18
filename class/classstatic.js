// class static methods is defined with the static keyword 
// static method is called without instantiang their class and cannot be called through a class instance
// you cannot call the static method on an object class
class flower{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    hello(){
        return "name:"+this.name+"color:"+this.color;
    }
    static flowers(){
        return "this flower is just look like wow"
    }
}
const flow=new flower("rose","red")
console.log(flow.hello())
console.log(flower.flowers())
// another example for static method
class Student{
    constructor(name,phoneno,age,rollno){
        this.name=name;
        this.phoneno=phoneno;
        this.age=age;
        this.rollno=rollno;
    }
    stu1(){
        return "name:"+this.name+"phoneno:"+this.phoneno+"age:"+this.age+"rollno:"+this.rollno;
    }
    static stu2(){
        return "student data"
    }
}
const stu3=new Student("sri",1234567890,20,1234);
console.log(stu3.stu1());
console.log(Student.stu2())
