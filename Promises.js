//pending
//resolve
//reject
//fulfilled

// let p = new Promise((resolve, reject) => {
//   reject("promise rejected");
//   resolve("promise resolve");
// });

// console.log(p);

// let p1 = new Promise((res, rej) => {
//   rej("promise rejected");
//   res("promise resolve");
// })
//   .then((res) => {
//     document.getElementById("sample").innerHTML = res;
//   })
//   .catch((err) => {
//     document.getElementById("sample").innerHTML = err;
//   }).finally(()=>{
//     document.getElementById("complete").innerHTML="promise is completed"
//   })

// console.log(p1);

// let p1 = new Promise((res, rej) => {
//     setTimeout(()=>{
//         rej("promise rejected");
//     },4000)
//     setTimeout(()=>{
//         res("promise resolve");
//     },3000)
//   })
//     .then((res) => {
//       document.getElementById("sample").innerHTML = res;
//     })
//     .catch((err) => {
//       document.getElementById("sample").innerHTML = err;
//     }).finally(()=>{
//       document.getElementById("complete").innerHTML="promise is completed"
//     })

//   console.log(p1);

// api

// let api = new Promise((res, rej) => {
//   let data = fetch("https://jsonplaceholder.typicode.com/users").then(
//     (res) => res.json()
//   ).catch(err=>err)
//   res(data)
//   rej(data)
// }).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log("here",err);
// })
// console.log(api);

// let p1 = new Promise((res, rej) => {
//   let data = fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((res) => res.json())
//     .catch((err) => err);
//   res(data);
// });

// let p2 = new Promise((res, rej) => {
//   let data = fetch("https://jsonplaceholder.typicode.com/users/2")
//     .then((res) => res.json())
//     .catch((err) => err);
//   res(data);
// });
// let p3 = new Promise((res, rej) => {
//   let data = fetch("https://jsonplaceholder.typicode.com/users/3")
//     .then((res) => res.json())
//     .catch((err) => err);
//   res(data);
// });

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// })

// Promise.any([p1,p2,p3]).then(res=>{
//     console.log(res);
// })

// console.log(document.getElementById("radio").value);

// let api = false;

// let p = new Promise((res, rej) => {
//   let data = {
//     name: "tekisky",
//   };
//   if (api) {
//     res(data);
//   } else {
//     rej("there is some error");
//   }
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(p);

// function sum(...rest){
// console.log(rest);
// }

// sum(10, 20, 30, 10, 20, 30, 10);


let a=[1,20,30,44,undefined,16]

let b=["a","v",150]
let d=a.concat(b)
// let c=[]
// console.log(c.concat(d));
// let c=[a.concat(b)]
let c=[...a,...b]
console.log(c);