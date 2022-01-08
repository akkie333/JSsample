/**
 *  const, letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数を上書き
// val1 = "valを上書き";
// console.log(val1);

// //var変数を再宣言
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは再宣言できない
// let val2 = "let変数";

//  const val2 = "let変数";
//  console.log(val2);

// //letは再宣言できない
//  const val2 = "let変数";

// const val4 = {name:"hahaha",age:111,};

// val4.name = "xxxx";
// val4 = {name:"yyyyyy",age:111,};

// console.log(val4);

// const val5 = ["a", "b", "c"];
// val5.push("d");
// console.log(val5);

/**
 * テンプレート文字列
 *
 */

//  const name = "akira";
//  const age = "akira";
//  const message = `わたしのなまえは${name}`;

// console.log(message);

/**
 * アロー関数
 */

// function f1(s) {
//   return s;
// }

// const f2 = f1;

// const f3 = (s) => s + s;

// console.log(f3("xxx"));

// const myProf = {name:"akira",age:49};

// const mes = `my name is ${myProf.name}`
// console.log(mes);

// const {name,age} = myProf;
// const mes2 = `my name is Prof2 ${name}`
// console.log(mes2);

// const sayHello =(name ="guset") => console.log(`Hello ${name}`);

// sayHello("Keiko");
// sayHello();

// const a = [1,2,3];
// console.log(a);
// console.log(...a);

// const nameArr = ["a","b","c"];
// const na2 = nameArr.map((name) => console.log(name));

// const nA = [1,2,3,4,5,6];
// const oA = nA.filter((num) => num % 2 == 1 );
// console.log(oA);
