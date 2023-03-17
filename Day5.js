// //setTimeout // setTimeinterval

// // setTimeout(() => {
// //   document.querySelector("#login").innerHTML = "please login first";
// //   console.log("please login first");
// // }, 2000);

// let sec = 0;

// let timer=setInterval(() => {
//   sec++;
//   if (sec === 60) {
//     sec = 0;
//   }
//   document.getElementById("sec").innerHTML = sec;
// }, 1000);


// function stopTimer(){
//     clearInterval(timer)
// }


// let min = 0;

// setInterval(() => {
//   min++;
//   if (min === 59) {
//     min = 0;
//   }
//   document.getElementById("min").innerHTML = min;
// }, 60000);


// let msg=''


// let timeOut= setTimeout(()=>{
//     document.getElementById("msg").innerHTML="please login to continue"
// },5000)


// function stopMsg() {
//     clearTimeout(timeOut)
//     console.log("stop function called");
// }

// let data=["a","b","c","d","e","f"]

// console.log(data.length);

// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
// }

// let arr=[10,20,30,40,50,60,{name:"sameer"}]

// for (const item of data) {

//     console.log(item);
// }

let obj={
    a:"AA",
    b:"BB",
    c:"CC"
}

for (const item in obj) {
    console.log(obj[item]);
}

