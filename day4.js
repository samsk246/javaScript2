// a.map((item, ind, self) => {
//   console.log(item.name, ind);
// });

// a.filter((item) => {
//   if (item.age <= 18) {
//     console.log(item);
//   }
// });
let a = [
  { name: "sameer", age: 18 },
  { name: "aadil", age: 19 },
  { name: "vishal", age: 21 },
  { name: "raheman", age: 9 },
  { name: "sam", age: 18 },
];

// let res=a.find((item)=>{
//     if(item.age===18){
//         return item
//     }
// })
// console.log(res);

// let res1=a.forEach((item) => {
//   return item
// });

// let res2=a.map((item) => {
//   return item
// });

// console.log({res1});
// console.log({res2});

// let arr=[10,20,30,50,60,40,50]

// let res3=arr.reduce((acc,curr)=>{
//     return acc-curr
// },0)
// console.log(res3);


// let chr=["s","d","a","c","b"]

// // let res4=chr.sort((item1,item2)=> item1<item2 ? 1:-1 )
// // let res4=chr.sort()
// // let res5=res4.reverse()
// // console.log(res5);

// let res=chr.toString()
// console.log(res);


// let obj={
//     name:"sameer",
//     age:20,
//     id:123,
//     post:"develpoer"
// }

// let data= Object.values(obj)
// let data2= Object.keys(obj)
// let data3=Object.entries(obj)

// data.map((item)=>{
//     console.log(item);
// })

// console.log(data);
// console.log(data2);
// console.log(data3);

let sample="this is javascript class"

// let res=sample.charAt(4)
// let res2=sample.includes("is j")
// let res=sample.trimStart()
// let res=sample.trimEnd()
// let res=sample.trim()
// let res=sample.substring(10,15)
// let res=sample.slice(1,5)
// let res=sample.endsWith("class")
// let res=sample.startsWith("this")

let res=sample.split(' ')

let res2=res.join()

console.log({res2});

// let str=sample.charCodeAt(0)
console.log("W".charCodeAt());
// let res2=res.join(' ')
// console.log({res2});






