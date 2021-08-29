// //sap xep tang dan
// for (var i = 0; i < arr.length; i++) {
//   for (var j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       var temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// //sap xep giam dan
// function sapxep() {
//   for (var i = 0; i <= arr.length; i++) {
//     for (var j = i + 1; j <= arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   function timso() {
//     for (var i = 0; i <= arr.length; i++) {
//       for (var j = i + 1; j <= arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           return arr[j];
//         }
//       }
//     }
//   }
//   return timso();
// }
// for (var i = 0; i <= arr.length; i++) {
//   for (var j = i + 1; j <= arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       var temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// //tinh tong cua mang
// var tong = 0;
// for (var i = 0; i <= arr.length; i++) {
//   tong += arr[i] << 0;
// }
// return tong;
// console.log(tong);

// //tinh tich cua mang
// var tich = 1;
// for (var i = 0; i <= arr.length; i++) {
//   tich *= arr[i] << 0;
// }
// console.log(tich);

// //tinh max min cua mang
// function TimMinMax(arr, maxmin) {
//   if (maxmin === "min") {
//     var min = arr[0];
//     for (var i = 1; i <= arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     return min;
//   } else if (maxmin === "max") {
//     var max = arr[0];
//     for (var i = 1; i <= arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
// }
// console.log(TimMinMax(arr, "max"));
// console.log(TimMinMax(arr, "min"));

// //tìm số
// num = 1;
// function findNumInArray(arr, num) {
//   var count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       count++;
//     }
//   }

//   return count;
// }

// var count = findNumInArray(arr, num);
// if (count == 0) {
//   console.log("Không tìm thấy", num);
// } else {
//   console.log("Có", count, "kết quả cho số", num);
// }

// // Bài 2:
// // var arr = [1, 5, 2, 3, 3, 2, 5, 4, 0];
// // Tìm xem 1 số được lặp lại bao nhiêu lần

// // Yêu cầu:
// // - Sử dụng function và param VD của bài 2: function countDuplicate(arr, number), và phải có return
// // - Khi sử dụng function (có return) thì phải lưu vào 1

// var arr = [1, 5, 2, 3, 3, 2, 5, 4, 0];
// var arrMain = [];
// for (let index = 0; index < arr.length; index++) {
//   arrMain.push(arr[index]);
// }

// var number = [];

// //Đổi mảng ban đầu thành mảng chỉ chứa các giá trị xuất hiện trong mảng thôi
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       //Ở đây thực hiện dịch từng cái một lên trên 1 nhịp, ý nghĩa của vòng lặp là như vậy
//       for (let k = j; k < arr.length; k++) {
//         arr[k] = arr[k + 1];
//       }
//     }
//   }
//   if (arr[i] != undefined) number.push(arr[i]); // lúc này mảng number[]  ==> 1, 5, 2, 3, 4, 0
// }

// //Hàm để đếm số phần tử xuất hiện trong mảng, áp dụng để đếm số xuất hiện trong mảng bao nhiêu lần
// function countNumInArray(arr, num) {
//   var count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       count++;
//     }
//   }

//   return count;
// }

// //Đây có thể coi là main chính, vì nó sẽ thực hiện đếm số phần tử
// var arrCount = [];
// for (let index = 0; index < number.length; index++) {
//   var count = countNumInArray(arrMain, number[index]); //Tạo biện count để lưu kết quả sau khi chạy hàm countNumInArray ở trên
//   var arrTemp = [number[index], count];
//   arrCount.push(arrTemp); //Thực hiện đẩy giá trị vào 1 mảng mới dưới dạng: [[<phần tử 1>, <số lương>], [<PHần tử 2>, <Số lượng>],....]
// }

// for (let index = 0; index < arrCount.length; index++) {
//   var arrTemp = arrCount[index];
//   console.log("Số", arrTemp[0], "có tất cả", arrTemp[1], "bản ghi");
// }

// const website = {
//   blog: "toidicode.com",
//   resume: "thanhtai.info",
// };
// var content = `<div>
//     			huyeahhhhhhh
//     			<font color="red">${website.blog}</font>
// 			</div> `;
// document.write(content);
function main() {
  console.log("A");
  setTimeout(function display() {
    console.log("B");
  }, 2000);
  console.log("C");
}
main();
