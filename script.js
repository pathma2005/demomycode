let mypromise=new Promise(function(myResolve,myrejected){
    if(10>5){
        setTimeout(()=>{
            myResolve("promise resolved");
        
        })    }else{
        myResolve("promise rejected");
    }
},3000);
mypromise.then(function(value){
    console.log("hi sri",mypromise)
    console.log("hello world",value)
    mypromise.catch(function(value){
        console.log("promise rejected",value);
        console.log("bye world")
    })
});
// async await use this fetch api
async function fetchata(){
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await response.json();
    console.log(data);

}
fetchata();






