console.log("Hello Nam");

// Biến

// Number String
var username = "Nguyen Van Hien Nam";
var address = "112 Cao Thắng";
// Number
var age = 21;
// Boolean
var status = true;
//Null
var numberStudent = null;
//Undefined
var people;
console.log(people);

var firstName = "Nguyễn";
var last_Name = "Nam"


// console.log("Tên là: " + username);
// console.log("Địa chỉ: " + address);
// console.log("Tên là: " + username, "Địa chỉ: " + address);

// Hoisting
console.log("fullName: " + fullName);
var fullName = "Nguyễn Văn A";

isLogin = true;
console.log("isLogin", isLogin);

const PI = 3.14;



//Câu lệnh điều kiện
//So sánh 2 dấu bằng chỉ so sánh giá trị
//So sánh 3 dấu bằng so sánh luôn kiểu dữ liệu

if (1 === "1") {
    console.log("Điều kiện đúng");
} else {
    console.log("Điều kiện sai");
}

// điều kiện ? "Đúng" : "Sai"
1 === "1" ? console.log("Điều kiện đúng") : console.log("Điều kiện sai");

var btA = true;
var btB = false;
console.log("Kết quả &&: ", btA && btB);
console.log("Kết quả là ||: ", btA || btB);
console.log("Phủ định của btA: ", !btA);

switch (0) {
    case 0:
        console.log("Đây là số 0");
        break;
    case 1:
        console.log("Đây là số 1");
        break;
    case 2:
        console.log("Đây là số 2")
        break;
    default:
        console.log("Không xác định");
        break;
}

var list = ["Nam", "Tay", "Long", "Nguyen"];
// console.log(list);
// console.log(list[1]);

// Vòng lặp:

for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}

var number1 = 10;
var number2 = 5;
var number3 = 20;
var number4 = 7;

var total = number1 + number2;
console.log("Tổng là: ", total);
var total2 = number3 + number4;
console.log("Tổng là: ", total2);

//Hàm

//Hàm không có tham số
// tinhTong();
// tinhtong34();

// function tinhTong(){
//     var sum = number1 + number2;
//     console.log("sum là: ",sum);
// }
// function tinhtong34(){
//     var sum = number3 + number4;
//     console.log("sum là: ",sum);
// }

//Hàm có tham số

//Hàm không có giá trị trả về
// Hàm có giá trị trả về
function tinhTong(a, b) {
    var sum = a + b;
    return sum;
}
// var tong = tinhTong(50,50);
console.log("Tổng là: ", tinhTong(50, 50) + 100);


// tinhTong(number1,number2);
// tinhTong(number3,number4);

//Bài tập: Tính điểm trung bình Toán Lí Hóa
var toan = 9;
var li = 8;
var hoa = 7;
function diemTrungBinh(a, b, c) {
    return (a + b + c) / 3;

}

// function xepLoai(diemTrungBinh) {
//     var loai = "";
//     if (9 < diemTrungBinh && diemTrungBinh < 10) {
//         loai = "Xuất sắc";
//     }
//     if (8 < diemTrungBinh && diemTrungBinh < 9) {
//         loai = "Giỏi";
//     }
//     if (7 < diemTrungBinh && diemTrungBinh < 8) {
//         loai = "Khá";
//     }
//     if (5 < diemTrungBinh && diemTrungBinh < 7) {
//         loai = "Trung bình"
//     }
//     else {
//         loai = "Yếu"
//     }
//     console.log("Loại: " + loai);
// }
//     console.log("Điểm trung bình: ",xepLoai(diemTrungBinh));



//DOM

var txtInput = document.getElementById("txtInput");
console.log(txtInput);

var _pText = document.getElementById("pText");
console.log(_pText.innerHTML);

// c1:
// // function eventClick(){
// //     console.log("eventClick");
// //     var txtValue = document.getElementById("txtInput").value;
// //     console.log(txtValue);
// // }

// c2:
// document.getElementById("btnClick").onclick = function(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

// c3: callback function
// document.getElementById("btnClick").addEventListener("click", function(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// })

// function demoClick(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }
// document.getElementById("btnClick").addEventListener("click", demoClick);

document.getElementById("btnNhanEmDi").addEventListener("click", function () {
    document.getElementById("content").innerHTML = "Thay đổi rồi nhé";
    document.getElementById("content").style.backgroundColor = "red";
    document.getElementById("content").style.color = "white";
    document.getElementById("content").style.fontSize = "20px";
    document.getElementById("content").style.border = "2px solid black"
})
document.getElementById("btnHide").addEventListener("click", function () {
    document.getElementById("content").style.display = "none";
})
document.getElementById("btnShow").addEventListener("click", function () {
    document.getElementById("content").style.display = "block";
})
document.getElementById("btnDisabled").addEventListener("click", function () {
    document.getElementById("btnNhanEmDi").disabled = true;
})
document.getElementById("btnRemove").addEventListener("click", function () {
    document.getElementById("btnNhanEmDi").removeAttribute("disabled");
})

document.getElementById("btnBulbOn").addEventListener("click", function () {
    console.log(123);
    document.getElementById("imgBulb").src = "./img/pic_bulbon.gif";
})

document.getElementById("btnLogin").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "cyber" && password === "123") {
        // changeColor("Login thành công", "green")
        changeColor2("Login thành công", "alert alert-success");
    }else{
        // changeColor("Login thất bại","red")
        changeColor2("Login thất bại", "alert alert-danger");
    }
})
function changeColor(mess, bg){
    document.getElementById("txtThongBao").innerHTML= mess;
    document.getElementById("txtThongBao").style.display = "block";
    document.getElementById("txtThongBao").style.backgroundColor = bg;
    document.getElementById("txtThongBao").style.color = "white";
}

function changeColor2(mess, classes){
    document.getElementById("txtThongBao").innerHTML= mess;
    document.getElementById("txtThongBao").className = classes;
    document.getElementById("txtThongBao").style.display = "block";
}

//Dom TagName

var tagName = document.getElementsByTagName("button")[4];
console.log(tagName);

//Dom ClassName

var _className = document.getElementsByClassName("btn")[0];
console.log(_className)

//Dom querySelector 

var _querySelector = document.querySelector(".container #txtThongBao")
console.log(_querySelector);

//Dom querySelectorAll

var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
console.log(_querySelectorAll);

document.getElementById("btnTinhTienTip").addEventListener("click",function(){
    var txtTongTien = document.getElementById("txtTongTien").value;
    var slPhanTramTip = document.getElementById("slPhanTramTip").value;
    var txtSoNguoi = document.getElementById("txtSoNguoi").value;
    var total = (txtTongTien * slPhanTramTip)/100/txtSoNguoi;
    var txtThongBaoTienTip = document.getElementById("txtThongBaoTienTip").style.display = "block";
    document.getElementById("txtThongBaoTienTip").innerHTML = total + "$ mỗi người" ;
})
