// moules is defined as the fundamental feture in the js modlues are code files that can be import the varibles and function another files
// use the import an export to change the functionalities between modules
// how to use the module are use the spreated files modules used to key value of import and then export 
export function login(email,password){
  if (email==="pathu@gmail.com"&&password==="123"){
    return "login successfully"
  }else{
    return "your mail an pass is incorrect"
  }
}
// calculator using the module
export function adding(a,b){
    return a+b;
}
export function multi(a,b){
    return a*b;
}
// another example using defalut
var x=10;
export function getuserData(){
    return {
        name:"sri",
    };
}
export const data={
     name:"himani",
     id:"1234"
};
const main=()=>{
    console.log("name and id is sleceted")
}
export default main;


