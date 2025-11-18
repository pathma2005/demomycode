const mypromise = new Promise((resolve, reject) => {
  const name = prompt("Enter the Name:");
  setTimeout(() => {
    const emoji = ["😎", "😵", "💩", "😍", "🤥", "☠️", "🤑"];
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
let promise = new pro();

