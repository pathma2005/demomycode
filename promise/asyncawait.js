// async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise
// always used a async before a function declaration 
// syntex of the async 
async function myfunction(){
    return "hello"
}
async function myfunction(){
    return Promise.resolve("hello")
}
// simple example of async 
async function getdata() {
  console.log("Hey");
  // return "Hello" // resolve
  throw "Oops"; //reject
}

console.log("A");
getdata()
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  });
console.log("C");
// aysnc and awat example
function login(username) {
    return new Promise((resolve, reject) => {
        console.log("Logging in...");

        setTimeout(() => {
            if (username === "pathu") {
                resolve({ userId: 101, name: "Pathmasri" });
            } else {
                reject("Invalid username!");
            }
        }, 2000);
    });
}
setTimeout(()=>{
    console.log("sri")
},3000)
function getProfile(userId) {
    return new Promise((resolve) => {
        console.log("Fetching profile...");

        setTimeout(() => {
            resolve({ age: 19, country: "India" });
        }, 1000);
    });
}

function getNotifications() {
    return new Promise((resolve) => {
        console.log("Loading notifications...");

        setTimeout(() => {
            resolve(["Message 1", "Message 2", "Message 3"]);
        }, 1000);
    });
}
async function getuserdata(){
    try{
        const user=await login("pathu")
        console.log("loggin success",user);
        const profile=await getProfile(user.userId);
        console.log("profile",profile)
        const wait=await getNotifications();
        console.log("notification success",wait)
    }catch (error){;
        console.log("error",error)
    }   
}
getuserdata();

