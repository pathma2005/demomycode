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
