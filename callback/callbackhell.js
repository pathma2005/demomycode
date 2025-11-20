
// Callback Hell (also called the Pyramid of Doom) is a situation in JavaScript where too many callbacks are nested inside each other, making the code:

// Hard to read

// Hard to understand

// Hard to debug

// Hard to maintain

// It looks like a deep pyramid structure that keeps moving rightwards.
function selectMovie(movieName, callback) {
  setTimeout(() => {
    callback(`Movie: ${movieName}`);
  }, 500);
}

function getShowTimes(movie, callback) {
  setTimeout(() => {
    callback(["10:00 AM", "1:00 PM", "6:00 PM"]);
  }, 500);
}

function selectSeats(showTime, callback) {
  setTimeout(() => {
    callback(["A1", "A2"]);
  }, 500);
}

function lockSeats(seats, callback) {
  setTimeout(() => {
    callback(`Seats locked: ${seats.join(", ")}`);
  }, 500);
}

function makePayment(lockedSeats, callback) {
  setTimeout(() => {
    callback("Payment Successful ₹250");
  }, 500);
}

function generateTicket(paymentInfo, callback) {
  setTimeout(() => {
    callback(`Ticket Generated - ${paymentInfo}`);
  }, 500);
}

function sendEmail(ticket, callback) {
  setTimeout(() => {
    callback(`Email Sent with: ${ticket}`);
  }, 500);
}
// callback hell start

selectMovie("LEO", function(movie) {
  console.log(movie);

  getShowTimes(movie, function(showtimes) {
    console.log("Showtimes:", showtimes);

    selectSeats(showtimes[0], function(seats) {
      console.log("Seats selected:", seats);

      lockSeats(seats, function(locked) {
        console.log(locked);

        makePayment(locked, function(payment) {
          console.log(payment);

          generateTicket(payment, function(ticket) {
            console.log(ticket);

            sendEmail(ticket, function(emailStatus) {
              console.log(emailStatus);
              console.log("🎉 Movie Booking Completed!");
            });
          });
        });
      });
    });
  });
});

// another example of callbackhell
const getuserId=(username,onsuccess,onfailuer)=>{
    console.log("Fetching the user data",username)
  setTimeout(() => {
    if(username==="sri"){
        const user={name:"pathu",userid:"123"};
        onsuccess(user);
    }else{
        onfailuer("does not fount the user")
    }
  }, 1000);
}
const getpost=(userid,onsuccess,onfailuer)=>{
    console.log("Fetching the post for",userid)
    setTimeout(()=>{
        if(userid){
          const post={postId:1234,caption:"finally my dream go to switzerland and that timeis comming soon 😭💜"}
          onsuccess(post);
        }else{
            onfailuer("does not fount a post id")
        }
    },3000)
}
const getcomment=(postId,onsuccess,onfailuer)=>{
    console.log("Fetching the comment",postId)
    setTimeout(() => {
        if(postId){
            const comment={comment:"heart fleat wishes to you my girl 😘",commentId:123456}
            onsuccess(comment);
        }else{
            onfailuer("does not found a comment")
        }
    },3000);
}
// now callback hell is strart
getuserId(
    "sri",
    (user)=>{
    console.log("userdata recived",user)
    getpost(
        user.userid,
        (post)=>{
            console.log("post recived",post);
            getcomment(
                post.postId,
                (comment)=>{
                    console.log("comment recived",comment);
                },
               (err)=>{
                console.log("comment error",err)
               }
            );
        },
        (err)=>{
            console.log("post error",err)
        }
    );
},
(err)=>{
    console.log("username error",err)
}
);
