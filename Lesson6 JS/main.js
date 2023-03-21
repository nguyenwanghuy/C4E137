// console.log("Welcome to javascipt");
// console.log("Hello");
// console.log("This is my text");

// console.error("Đây là 1 lỗi");
// console.warn("Đây là cảnh báo")

// // tên biến bắt đầu bằng chữ cái hoặc "_" ,hoặc "$"" 
// // trong đặt tên biến : có thể dùng số
// let name;
// name = "Giá trị mới của name" //gán giá trị cho biến

// console.log(name); // Hiển thị giá trị của biến name lên màn hình console

// name = "Hello,this is something"



// let age = 10; //khai báo %gán giá trị cho biến

// const hello = "xin chào" //hằng số không thể thay đổi giá trị

// console.log(hello)

// let something = 'a'
// let SOMETHING = 'B' //2 biến khác nhau, phân biệt chữ cái hoa chữ cái thường

//kiểu số
// let age = 28;
// let weight = 71;
// let height = 170;
// let breast = 90;

// //kiểu chuỗi (string)
// let slogan = "cần cù bù thông  minh"
// let name = "Huy"
// let address = "Nam Đinh"
// let phone = "+84 857085475"

// //kiểu boolean ()
// let hasGirlfriend = false;
// let isHandsome = true;
// let isRich = false;

// //kiểu null
// let girlfriend = null;
// let money = null;

// //kiểu underfined 
// let future;
// let wife;

// let a = 10;
// let b = '10' // vd là chữ thì giá trị là NaN not a number
// console.log(a == b); //toán tử so sánh cho ra 1 giá trị boolean : true/false


let x = true
let y = true
let z = false


console.log(x && y && z)
console.log(x && y && !z)
console.log((x && y) ||z  )
console.log((x && y) || !z )
console.log(x && (y|| z))
console.log(x && ! (y || z))
console.log(x && (!z))
console.log(x && (!y || z))

let name = "AAA"
let age = 20; 
let isGood = true;


console.log(age + 10 )
console.log(age % 3 )
console.log(name + ' BBB')
console.log(!isGood)
console.log(name == 'aaa' && age >= 20)
console.log(name != 'aaa' && isGood )
console.log(! (age <10) && !isGood)


// let a = 10;
// let b = 20;
// let c = 30; 
// let d = '40'

// console.log( a + b +c) //60
// console.log( a -b /c) //9.3333
// console.log( a - (b * c))//-590
// console.log( d- (a * b) -c)//-190
// console.log(a +b +c +d)
// console.log(d +a +  b +c)
// console.log(d +a -b +c)
// console.log(a -b +d -c)
// console.log(d +a - b + c)
// console.log(d - c + a -b)
// console.log(a * b + d * c)


let a = 5;
let b = '2';
let c = 3 ;
let d = '4';

console.log(b+d) //24
console.log(a+b+c+d) //5234
console.log(a-b+c-d) //2
console.log(a-b-c+d)//4
console.log((b+d)-(a+c)) //16
console.log((a+b)-(c+d))//18
console.log(a*c+b*d)//23
console.log(-b+d)//-24
console.log(-b-d)//-6
console.log(-(b+d))//-24

