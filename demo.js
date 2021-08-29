// function sum() {
//     return Array.from(arguments).reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     );
//   }

//   console.log(sum(1, 2));         // => 3
//   console.log(sum(1, 2, 3));      // => 6
//   console.log(sum(1, 2, 3, 4));   // => 10

// let sum = () => {
//   return Array.from(arguments).reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
// }

// console.log(sum(1, 2));

// const arr = [5, 7, 1, 8, 4];
// const sum = arr.reduce(function(a, b) {
//   console.log(a);
//   console.log(b);
// /* a là tổng sau khi tính b là số hiện tại*/
//   return a + b;

// });
// // prints 25
// console.log(sum);

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   console.log(a,b);
//   /* nhỏ hơn 0 thì giữ nguyên
//     lớn hơn 0 thì thay đổi
//     b là cái sau
//     a là cái trước
//   */
//   return a - b;
// });
// console.log(numbers);

var arr1 = [1, 2, 3, 4, 5, 6, 4, 2, 4, 3, 1, 4, 4, 3, 3, 1];

function arrKoLap(arr1) {
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      arr2.push(arr1[i]);
    }
  }
  let arr3 = [];
  // console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {
    let count = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] == arr2[i]) {
        count++;
      }
    }
    let obj = [arr2[i], count];
    arr3.push(obj);
  }
  // console.log(arr3);
  // let max = arr3[0];
  // for (let i = 0; i < arr3.length; i++) {
  //   if(arr3[i][1] > max[1]){
  //     max = arr3[i];
  //   }
  // }
  let arr4 = [];
  for (let i = 0; i < 3; i++) {
    let max = arr3[0];
    for (let i = 0; i < arr3.length; i++) {
      if (arr3[i][1] > max[1]) {
        max = arr3[i];
      }
    }
    arr4.push(max[0]);
    max[1] = -1;
  }
  return arr4;
}
console.log(arrKoLap(arr1));
