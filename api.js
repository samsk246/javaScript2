let apiData;

// let getApi = () => {
//   let data = fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
//     res.json();
//   }).then((data)=>{
//     apiData=data
//   });
//   console.log("data",data);
//   return data
// };

// let getApi = async () => {
//   let data = await fetch("https://jsonplaceholder.typicode.com/users");
//   data = await data.json();
//   console.log(data);
// };
// console.log("apidata", getApi());

// let getApi = async () => {
//   let data = await fetch("https://jsonplaceholder.typicode.com/users");
//   data = await data.json();
//   console.log(data);
//   return data
// };

// let p3 = new Promise((res, rej) => {
//   let data = fetch("https://jsonplaceholder.typicode.com/users/3")
//     .then((res) => res.json())
//     .catch((err) => err);
//   res(data);
// }).then((res=>{
//     console.log("res",res);
// }))

// let postApi = () => {
//   let data = {
//     id: "3",
//     title: "some data2",
//     author: "sameer2",
//   };
//   fetch("http://localhost:3004/posts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   }).then((res) => {
//     console.log(res);
//   });
// };

// let putApi = () => {
//     let data = {
//       id: "3",
//       title: "some data2",
//       author: "sameer2",
//     };
//     fetch("http://localhost:3004/posts/3", {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     }).then((res) => {
//       console.log(res);
//     });
//   };

// let patch = () => {
//     let data = {
//       title: "some data2 update",
//     };
//     fetch("http://localhost:3004/posts/3", {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     }).then((res) => {
//       console.log(res);
//     });
//   };

//api for delete user  2

let deleteApi = async () => {
  await fetch("http://localhost:3004/posts/3", {
    method: "DELETE",
  }).then((res) => {
    console.log(res);
  });
};
