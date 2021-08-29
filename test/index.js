// //factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

// //Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);

// function Student(id,name,yearOfbirth,mark,hasDebt){
//     this.id = id;
//     this.name = name;
//     this.yearOfbirth = yearOfbirth;
//     this.mark = mark;
//     this.hasDebt = hasDebt;
// }
// var Student1 = new Student(1,'hs1',1999,2,1);
// var Student2 = new Student(2,'hs2',1997,6,0);
// var Student3 = new Student(3,'hs3',1996,8,0);
// var Student4 = new Student(4,'hs4',2000,4,0);
// var Student5 = new Student(5,'hs5',2001,1,1);
// var Student6 = new Student(6,'hs6',2001,5,1);
// var Student7 = new Student(7,'hs7',2001,8,0);
// var Student8 = new Student(8,'hs8',2001,3,1);
// var Student9 = new Student(9,'hs9',2001,8,0);
// var Student10 = new Student(10,'hs10',2001,10,0);

// // console.log(Student10);

//     var arr=[];
//     arr.push (Student1,Student2,Student3,Student4,Student5,Student6,Student7,Student8,Student9,Student10);

// arr.sort(function(a, b) {
//     return parseFloat(a.yearOfbirth) - parseFloat(b.yearOfbirth);
// });
// console.log(arr);

// var arrPass=[];
// for (var i=0 ; i < arr.length;i++) {
//     if (arr[i].mark >= 5 && 2021-arr[i].yearOfbirth >22 && arr[i].hasDebt == 0) {
//         arrPass.push (arr[i]);
//     }
// }
// console.log(arrPass);

// function findId(id){
// var arrFindbyId=[];
// for (var i=0 ; i < arr.length ; i++){
//     if (arr[i].id == id){
//         arrFindbyId.push (arr[i]);
//         return arrFindbyId;
//         }
//     }
// }
// console.log(findId(2));

// function findMark(mark){
//     var arrFindbyMark=[];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].mark == mark) {
//             arrFindbyMark.push (arr[i]);
//             console.log(arrFindbyMark);
//         }
//     }
// }
// findMark(1);

// function findYear(yearOfbirth){
//     var arrFindbyYear=[];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].yearOfbirth == yearOfbirth) {
//             arrFindbyYear.push(arr[i]);
//         }
//     }
//     console.log(arrFindbyYear);
// }
// findYear(2001);

// function update(id,name,mark,hasDebt,yearOfbirth) {
//     var object = {name,mark,hasDebt,yearOfbirth};
//     for (var i=0 ; i < arr.length ; i++){
//     if (arr[i].id == id){
//         arr[i].name = object.name;
//         arr[i].mark =object.mark;
//         arr[i].hasDebt = object.hasDebt;
//         arr[i].yearOfbirth = object.yearOfbirth;
//         console.log(arr[i]);
//         }
//     }
// }
// update(1, 'hoc sinh 1', 9, 0, 1999 );

// function deletebyid(id){
// for (var i= 0 ; i < arr.length ; i++){
//     var arr1 = [];
//     if (arr[i].id == id){} {
//         arr1.push(arr[i]);
//         var index = arr1.indexOf(id);
//         if (index > -1) {
//             arr.splice( i, 1);
//             }
//             return arr1;
//         }
//     }
// }
// console.log(deletebyid(5));

// function findtodeleteId(id){
//     for (var i=0 ; i < arr.length ; i++){
//         if (arr[i].id == id){
//                 arr.splice(i,1);
//                 return arr;
//             }
//             }
//         }

//     console.log(findtodeleteId(10));

// function search(name){
//     var arrResult=[];
//     for (var i=0 ; i < arr.length ; i++){
//         if () {

//         }
//     }
// }
// search(hs);

//bai II

// class Student {
//     constructor (id, name, yearOfbirth, mark ,hasDebt) {
//         this.id = id;
//         this.name = name;
//         this.yearOfbirth = yearOfbirth;
//         this.mark = mark;
//         this.hasDebt = hasDebt;
//     }
//     set StudentName(name) {
//         this.#name = name;
//     }
//     get StudentName () {
//         return this.#name;
//     }
//     set StudentyearOfbirth (yearOfbirth) {
//         this.#yearOfbirth = yearOfbirth;
//     }
//     get StudentyearOfbirth () {
//         return this.#yearOfbirth;
//     }
//     set StudentId (id){
//         this.#id = id;
//     }
//     get StudentId(){
//         return this.#id;
//     }
//     set StudentMark (mark){
//         this.#mark = mark;
//     }
//     get StudentMark(){
//         return this.#mark;
//     }
//     set StudenthasDebt (hasDebt){
//         this.#hasDebt = hasDebt;
//     }
//     get StudenthasDebt(){
//         return this.#hasDebt;
//     }
// };
// var Student1 = new Student(1,'hs1',1999,2,1);
// var Student2 = new Student(2,'hs2',1997,6,0);
// var Student3 = new Student(3,'hs3',1996,8,0);
// var Student4 = new Student(4,'hs4',2000,4,0);
// var Student5 = new Student(5,'hs5',2001,1,1);
// var Student6 = new Student(6,'hs6',2001,5,1);
// var Student7 = new Student(7,'hs7',2001,8,0);
// var Student8 = new Student(8,'hs8',2001,3,1);
// var Student9 = new Student(9,'hs9',2001,8,0);
// var Student10 = new Student(10,'hs10',2001,10,0);

// Student1.StudentName=('học sinh 1');
// console.log(Student1.StudentName);
// var tien = 1000;
// new Promise(function(resolve, reject) {

//     setTimeout(() => {
//         if (tien>1000) {
//             resolve("em yêu anh");
//         }else{
//             reject("em chỉ coi anh là bạn thôi");
//         }
//     }, 1000); // (*)

//     })
//     .catch(function(result) { // (**)

//     alert(result); // em chỉ coi a là bạn thôi :)
//     })
//     .then(function(result){
//         alert(result); //em yêu anh
//     })
const website = {
  blog: "toidicode.com",
  resume: "thanhtai.info",
};
var content = `<div>
    			huyeahhhhhhh
    			<font color="red">${website.blog}</font>
			</div> `;
document.write(content);
