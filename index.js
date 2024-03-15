// Map()
// Filter()
// Reduce()

let datas = [
    { name: "Rohan", age: 33, country: "US" },
    { name: "Sufyan", age: 21, country: "india" },
    { name: "Shaikh", age: 20, country: "Dubai" },
    { name: "Yash", age: 43, country: "india" },
    { name: "Sahil", age: 23, country: "Canada" },
];

let numbers = [22, 2, 1, 9, 33, 42, 20, 16, 18, 33];

// for loop
// เป็นการนำ number ใน array ที่ชื่อว่า numbers มา * 2
// for (let i = 0; i < numbers.length; i++) {
//     let double = numbers[i] * 2;
//     console.log(double);
// }

// Map()
//  (curValue = ค่าปัจุบัน, index = ตำแหน่ง, array = ข้มมูลทั้งก้อน)
// numbers.map((curValue, index, array) => {
//     console.log(curValue)
// })

/////////////
/// Map() ///
/////////////
// เป็นการนำ number ใน array มา * 2
// let double = numbers.map((curValue, index, array) => {
//     return curValue * 2;
// });
// console.log(double);

////////////////
/// Filter() ///
////////////////
// เป็นการกรองหาค้า number ใน array ที่มีค้า >, <, = ตามจำนวนที่ต้องการ
// let filterNumbers =  numbers.filter((curValue, index, array) => {
//     return curValue < 20;
// });
// console.log(filterNumbers);

// เป็นการกรองหาค้า country ใน array ที่มี country =  "india" ตามที่ต้องการ
// let filterDatas =  datas.filter((curValue, index, array) => {
//     return curValue.country === "india";
// });
// console.log(filterDatas);

////////////////
/// Reduce() ///
////////////////
// เป็นการนำค้าเริ่มต้นที่ถูกกำหนด เช่น 4 มา + กับ number ที่อยู่ใน array [22, 2, 1, 9, 33, 42, 20, 16, 18, 33] 
// ผลที่ได้ คือ 4+196 = 200
let total = numbers.reduce((accumulator, curValue, index, array) => {
    return accumulator + curValue;
},4);
console.log(total);

// for loop
let add = 4;
for(let i = 0; i < numbers.length; i++) {
    add = add + numbers[i];
};
console.log(add);