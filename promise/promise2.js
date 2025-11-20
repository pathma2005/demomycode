const mypromise = new Promise((resolve, reject) => {
  const name = prompt("Enter the Name:");
  setTimeout(() => {
    const emoji = ["😎", "😵", "😭", "😍", "🤥", "👻", "🤑"];
    const randomIndex = parseInt(Math.random() * emoji.length);
    let emo = emoji[randomIndex];
    if (emo) {
      const random = {
        name,
        emo,
      };
      resolve(random);
    } else {
      reject("emoji is not getting");
    }
  }, 3000);
});
mypromise
  .then((value) => {
    console.log(`${value.name}${value.emo}`);
  })
  .catch((error) => {
    console.log("its show error" + error);
  });
// using login page in the promise
function login(){
  return new Promise((resolve,reject)=>{
    const username=prompt("Enter the Email");
    const password=prompt("Enter the password");
    setTimeout(()=>{
      const correctusername="pathu123@gmail.com"
      const correctpasswor="sri";
      if(username===correctusername&&password===correctpasswor){
        resolve("login successfully"+username);
      }else{
        reject("pls give correct email and password");
      }
    },3000)
  })
}
login()
.then((value)=>{
  console.log(value)
})
.catch((error)=>{
  console.log("error",error)
})


