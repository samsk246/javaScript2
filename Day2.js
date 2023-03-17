// let obj = {
//   key: "value",
//   getDetails: () => {
//     console.log("key =", obj.key);
//     return "sample";
//   },
//   key2: {
//     name: "sameer",
//   },
//   arr:[10,20,30,40],
//   val:undefined,
//   val2:null,
//   val3:"",
//   10:"10"
// };
// console.log(obj);
// // console.log(obj.getDetails());
// // console.log(obj.key2.name);
// // console.log(obj.arr[2]);
// let key4="key"
// console.log(obj[key4]);
// console.log(obj['10']);

// array

// let arr = [10, 20, "one", () => "sameer", null, undefined, ""];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "sam"];

let arr2 = ["a", "b", "c"];

//       0  1   2

// arr.pop(); // last remove
// arr.shift(); // first remove
// arr.push("two")
// arr.unshift("10")

// console.log(arr.slice(1,3));
// console.log(arr.splice(2,5,30,40,50,60,70,80));
// let res=arr.concat(arr2)
// console.log(res);

// console.log(arr.indexOf("sam"));

// console.log(arr);
// console.log(typeof arr);

// sort , map , filter, foreach, find , reduce.

// let a=[1,2,3,100,200,202,1000]

// let  b=[1,5,6,2,3,1,7,8]

// let res=a.sort((a,b)=>a-b)
// console.log(res);

// let ch=["sameer","ghafoor","aadil","raheman","a","c","d"]

// let res2=ch.sort((a,b)=>a > b ? -1 :1)

// console.log(res2);

// console.log("a".charCodeAt());//97
// console.log("b".charCodeAt());//98
// console.log("g".charCodeAt());
// console.log("s".charCodeAt());//98

// let data = ["sameer", "raheman", "anil", "abdul"];

// let res= data.map((ele, i, array) => {
//     return ele
// });

// let data = [
//   { name: "sam", id: 1, age: 20 },
//   { name: "sameer", id: 1, age: 22 },
//   { name: "adil", id: 2, age: 21 },
//   { name: "anil", id: 2, age: 20 },
//   { name: "raheman", id: 3, age: 17 },
//   { name: "vishal", id: 4, age: 16 },
//   { name: "vaibhav", id: 5, age: 18 },
// ];

// data.find((item) => {
//   if (item.id === 2) {
//     console.log(item);
//     return item;
//   }
// });
// data.forEach((item, ind, self) => {
//    console.log( "in forEach", item);
// });

// data.map((item, ind, self) => {
//     console.log("in map",item);
// });

// let res3 = data.map((item, ind, self) => {
//     return item;
// });
// console.log(res3);

// let res4 = data.forEach((item, ind, self) => {
//     return item;
// });

// console.log(res4);

// let res = data.filter((item, ind, self) => {
//   if (item.age <= 18) {
//     // console.log(item);
//     return item;
//   }
// });
// let res2 = data.map((item, ind, self) => {
//   if (item.age <= 18) {
//     // console.log(item);
//     return item;
//   }
// });
// console.log({ res });
// console.log({ res2 });
// console.log({ data });

// let a=[10,20,30,40,50,60,70]


// let res=a.reduce((acc,curr)=>{
//     return acc+curr
// },10)

// console.log(res);