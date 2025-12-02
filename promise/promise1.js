let a=10;
let mypromise=new Promise(function(resolve,reject){
    if(a==a){
        setTimeout(()=>{
 resolve("code is sucessfull run")
        },3000)
    }else{
        reject("error!")
    }3
});
mypromise
.then(function(value){
    console.log("hello",value)
})
.catch(function(value){
    console.log("hi",value)
});
// syntex of promise
const promise1=new Promise((resolve,reject)=>{
    console.log('A');
    setTimeout(()=>{
        if(4%2===0){
            resolve("success")
        }else{
            reject("error")
        }
    },3000)
});
promise1
.then((value)=>{
    console.log("hello",value)
})
.catch((e)=>{
    console.log("hi",e)
})


