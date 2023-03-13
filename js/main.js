//1// o'rta arifmetika

const num = [1, 2, 3, 4];

let m = num.reduce((a, b) => {
  return a + b;
}, 0);

console.log("O'rta arifmetika - " + m / num.length);

//2.// reduce siz o'rta arifmetika

// function ararithmetic() {
//   const a = [1, 2, 3, 4];

//   const func = a.map((a) => a + 0) / a.length;

//   console.log("O'rta arifmetika - " + func);
// }

// ararithmetic();

//3.//uchburchak perimetri

function triangle() {
  let a = 20,
    b = 25,
    c = 20;

  if (a < b + c && b < a + c && c < a + b) {
    console.log("Uchburchak perimetri: " + (a + b + c));
  } else {
    console.log(false);
  }
}
triangle();

//4.// Arfimetik progressiya

function progressiya() {
  let a = 7,
    n = 5;

  const func = a + (n - 1) * a;

  console.log("Arifmetik progressiya - " + func);
}

progressiya();

//5.// Geometrik progressiya

function geometrikP() {
  let a = 2,
    n = 4;

  const func = a * (n - 1) + a;

  console.log("Geometrik progressiya - " + func);
}

geometrikP();

// ~~~~~~

// const nums = [3, 7, 1, 8];

// let n = nums.reduce((a, b) => {
//   return a + b;
// }, 0);

// console.log(n ** (1 / nums.length));
