//Rest Oprator (...) : sintaks yang memungkinkan fungsi untuk menerima sejumlah argumen yang tidak terbatas sebagai array, menyediakan cara untuk mewakili fungsi variadik dalam JavaScript.
//contoh 1.
function sum(...theArgs){
  let total = 0;
  for(const arg of theArgs){
    total += arg;
  }
  return total;
}
console.log(sum(1,2,3));
//output : 6
console.log(sum(1,2,3,4));
//output : 10

//contoh 2.
function fun(...input){
  let sum = 0;
  for (let i of input){
    sum += i;
  }
  return sum;
}
console.log(fun(1,2));
//output : 3
console.log(fun(1,2,3));
//output : 6
console.log(fun(1,2,3,4,5));
//output : 15

//contoh 3.
function func(a,b,...c){
  console.log(`${a} ${b}`);
  //output : Front End
  console.log(c);
  //output : Mailangkay Stevy latihan
  console.log(c[0]);
  //output : Mailangkay
  console.log(c.length);
  //output : 3
  console.log(c.indexOf('Mailangkay'));
  //output : 0
}
func('Front','End', 'Mailangkay', 'Stevy', 'latihan');

//spread oprator(...)untuk menyebarkan atau mengeluarkan elemen yang ada di dalam array atau properti objeck ketempat dimana nilai tersebut diharapkan
//method "concat" untuk menggabungkan dua buah array menjadi satu

//contoh 1.
const array1 = ["nama","saya"];
const array2 = ["adalah", "joni"];
const nomor3 = [...array1,...array2];
console.log(nomor3);

//contoh 2.
const objeck1 ={nama: 'Budi', umur: 20};
const objeck2 ={jenisKelamin: 'pria', pekerjaan: 'Web Developer'};
const objeck3 ={...objeck1,...objeck2};
console.log(objeck3);

let person = ["jon doe","manado", 33, true];

//let fullname = person [0];
//let address = person [1];
//let age = person [2];
//let isMarried = person [3];

//let age [fullname, address,...rest] = person;
//console.log(rest);


//TANPA DESTRUCTOR
//let obj={
 //  title:"title",
 //  subtitle:"sub",
 //  image:"image",
//}
//function Header (props){
  // console.log(props);
//}
//Header(obj)


//DENGAN DESTRUCTOR contoh

//object entries method with destruction
let user = {
  name : "Maria",
  age : 25
};
//loop aver  key and value
for (let [key, value] of Object.entries(user)){
  console.log (`${key} : ${value}`);
}
//output :
//name : Maria
//age : 25


let arr = ["Jhon", "Doe"];
let [firstName, surName] = arr;
console.log(firstName);
console.log(surName);

//dengan destructor contoh 2

//let pers = ["Jhon doe", "Manado", 33, True];
//let [fullname, addres, age, isMarried] = pers;
//console.log(fullname, addres, age, isMarried);




//let obj={
  //  title:"title",
  //  subtitle:"sub",
  //  image:"image",
//}
//function Header ({title}){
 //   console.log(title);
//}
//Header(obj)