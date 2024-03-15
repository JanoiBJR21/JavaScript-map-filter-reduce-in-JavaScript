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
let double = numbers.map((curValue, index, array) => {
    return curValue * 2;
});
console.log(double);