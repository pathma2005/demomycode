// callback function is passe the aruguments into another function ths technique allow a another function the function is finished after run another function like we calle the callback quae  
// which function called first that function will be run first 
// synetex of callback
function mypromise(give){
    console.log(give)
}
function myfunction(){
    mypromise("i give promise")
}
function myfun(){
    mypromise("i am not giving promise")
}
myfunction();
myfun();
// Passing Arguments Through a Callback
function mydisplay(result){
    console.log("result:",result)
}
function add(a,b,callback){
    setTimeout(()=>{
         const sum=a+b;
    callback(sum)
    },3000)
}
function multi(a,b,callback){
    const mul=a*b;
    callback(mul)
}
    add(10,20,mydisplay);
    multi(12,23,mydisplay);
//  
const add = (a, b, cb) => {
    const result = a + b;
    cb(result);
};

const mul = (a, b, cb) => {
    const result = a * b;
    cb(result);
};

const print = (value) => {
    console.log("Output:", value);
};
add(13,14,print)
mul(13, 49, print);   
// callback used to creat a login 
function login(cb) {
    const correctEmail = "sri@gmail.com";
    const correctPassword = "123";

    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    if (email === correctEmail && password === correctPassword) {
        cb(null, "Login successful");
    } else {
        cb("Incorrect email or password", null);
    }
}

function logged(error, success) {
    setTimeout(() => {
        if (error) {
            console.log("Error:", error);
        } else {
            console.log("Success:", success);
        }
    }, 3000);
}

login(logged);


