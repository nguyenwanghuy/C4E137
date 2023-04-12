//mảng 

// cách khai biến
// let names = [
//     "Huy",
//     "Ngoc Trinh",
//     "Chi phu",
//     "Ngoc Trinh",
//     "ĐVH",
//     "Chi phu",
//     "Ngoc Trinh",

// ];
// console.log(names);


// let number = [1, 100, 40 ,3 ,20];

// let isRich =false;
// let isHandsome= true;
// let hasGirlfriend= false;

// let features = [isRich,isHandsome, hasGirlfriend]

// isRich = true;
// truy xuất giá trị 1 phần tử bất kỳ trong mảng?
// console.log(names[1]); // lấy giá trị phần tử thứ 2 trong mảng
// console.log(names[0]); // lấy giá trị phần tử thứ 1 trong mảng
// console.log(names[4])

//thay đổi giá trị phần tử bất kỳ trong mảng?
// names[0] = "hello world";
// names[4] = "goodbuy";
// console.log(names)

// console.log(features);


// let array1 = [ 'a', 'b', 'c'];
// let array2 = [ 'a', 'b', 'c'];

// //kiểm tra kiểu dữ liệu của mảng
// console.log(typeof (array1));
// console.log(array1 + array2); // chương trình tự động ép kiểu mảng về string khi thực hiện phép cộng
// console.log( array1 == array2);

// array1[0] = "hello";
// console.log(array1, array2);

//hoán đổi giá trị của 2 phần tử trong mảng
// let tmp = names[0];
// names[0]=names[3];
// names[3]= tmp;
// console.log(names);


// duyệt mảng 
//c1: dùng for ... let i = 0 ...
// for(let i=0; i<names.length; i++){
//     let stt = i +1;
//     // console.log(stt + ". "+ names[i]);

//     let name = names[i];
//     if(name == 'Ngoc Trinh' || name == 'Chi phu') {
//         console.log(stt + ". " +name)
//     }
// }


//c2: for ... of
// let i=0;
// for (const name of names ) {
//     // làm việc với name ở trong này
//     i++;
// }


const numbers = [1,7,8,-3,6,10,9]
//in ra số chẵn trong numbers
// for(let i = 0; i< numbers.length; i++) {
//     const number = numbers[i];

//     if(number %2==0) console.log(number);
// }

// tính tổng phần tử
let sum = 0;
for(let i=0 ; i < numbers.length; i++) {
    const number = numbers[1];
    sum += number;
    // sum = sum + number;    
}
// console.log(sum);
// tìm phần tử nhỏ nhất

let min = numbers[0];
for(let i=0 ; i < numbers.length; i++) {
    const number = numbers[1];
    if (min > number) min = number;
}
// console.log(min)

//thêm 3 số vào đầu mảng
numbers.unshift(100,1000,-4)
// console.log(numbers);

//thêm 3 số vào cuối mảng
numbers.push(-9,10,50);
console.log(numbers);

//xoá 1 phần tử đầu tiên trong mảng
let deletedFirstNumber = numbers.shift()
console.log("giá trị phần tử đầu tiên bị xoá: "+ deletedFirstNumber)

//xoá 1 phần tử cuối mảng
let deletedLastNumber = numbers.pop()
console.log("giá trị phần tử cuối bị xoá: " + deletedLastNumber)

// tìm hiểu phương thức splice()?



// bài tập trên lớp
//bài 1 Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.
// let array1= []
// let n =Number(prompt('Nhập vào số n'))
// for(let i=0; i<n; i++) {
//     let randomNumber= Math.floor(Math.random() * n);
//     array1[i]= randomNumber;

// }
// console.log(array1);

// bài 2  Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.

// let array2 = [1,2]
// let n = Number(prompt ("Nhập vào số n"))
// while (array2.length <n) {
//     array2.unshift(0);
// }
// console.log(array2)

//bài 3  Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.

// let arr = [1,2,6,9];
// while (arr.length>1) {
//     arr.pop();
// }
// console.log(arr)


//bài 1. Khai báo 1 mảng gồm các số bất kỳ. 
// Tính tích của các phần tử trong mảng đó.
// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// Tính giá trị trung bình của mảng.
// Lọc ra các số nguyên tố trong mảng.
// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// Nhập vào số n cho đến khi n là 1 số trong mảng s.
// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
// https://www.geeksforgeeks.org/bubble-sort/

// let tong = 1;
// let arr = [1,2,3,4];
// for (let i = 0; i <arr.length ; i++) {
//     tong = tong * arr[i];
// }
// console.log(tong)

// tìm số nhỏ nhất chia hết cho 2 trong mảng

const numberss = [1,7,9,10,2,-10,8,4,-3]
const numberssDivideBy2 = [];

// tìm tất cả giá trị trong mảng chia hết cho 2 => B
//push tất cả số tìm được vào mảng numberssDivideBy2
for( let i= 0; i<numberss.length; i++) {
    if(numberss[i] %2==0) numberssDivideBy2.push(numberss[i])

}

if(numberssDivideBy2.length==0) {
    console.log("không có số nào trong numbers chia hết cho 2")
}else {


// tìm giá trị nhỏ nhất trong mảng B
   let min = numberssDivideBy2[0];
   for (let i =0; i< numberssDivideBy2.length; i++) {
    if (min >numberssDivideBy2[i]) {
        min = numberssDivideBy2[i];
    }
   }
   console.log("Giá trị nhỏ nhất chia hết cho 2 là: " + min);
}

// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
const numberssDivideBy3 = [];
for( let i= 0; i<numberss.length; i++) {
    if(numberss[i] %3==0) numberssDivideBy3.push(numberss[i])

}if(numberssDivideBy3.length==0) {
    console.log("không có số nào trong numbers chia hết cho 2")
}else  {
    let max = numberssDivideBy3[0];
    for (let i =0; i <numberssDivideBy3.length; i++) {
        if (max <numberssDivideBy3[i]) {
            max = numberssDivideBy3[i];
        }
        
    }
    console.log("Giá trị lớn nhất chia hết cho 3 là: " + max);
}

// Tính giá trị trung bình của mảng.

let length = numberss.length ; // tính độ dài mảng
//  console.log(length)

 let tong = 0;   // tính tổng của mảng

for (let i = 0; i <numberss.length ; i++) {
    tong = tong + numberss[i];
}
// console.log(tong)
let GTTB = tong / length
console.log("GIá trị trung bình của mảng là: " +GTTB)

//// Lọc ra các số nguyên tố trong mảng.




// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
const soNhohon10 = numberss.filter(element => element <10);
console.log(soNhohon10)


// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
const soLonhon20 = numberss.filter(element => element >20);
console.log(soLonhon20)

//Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
for(let i= length-1; i>0 ; i--) {
    for(let j=0; j<i ; j++) {
        if(numberss[j] > numberss[j +1]) {
            let tmp = numberss[j]
            numberss[j] = numberss[j +1] ;
            numberss[j +1] = tmp;

        }
    }
}

for( let i=0; i<length; i++) {
    console.log(numberss[i] )
}

//bài 2 
//  Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// Tìm những chuỗi trong mảng có chứa giá trị text.
// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.

//  Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.

let saBiChuong = ['eat', 'go' , 'and' ,'text' , 'a', 'love' ,'hater'];
let nhoNhat = saBiChuong[0];
for (let i=0; i < saBiChuong.length; i++) {
    let saBi = saBiChuong[i];
    if (nhoNhat > saBi ) nhoNhat = saBi;
}
console.log(nhoNhat)

//Tìm những chuỗi trong mảng có chứa giá trị text.
 let giaTriText =saBiChuong.find(items => items == 'text');
 console.log(giaTriText)

// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// NewS = []
// for {
//     str = s[i] . slice (0,3)
//     NewS.push(str)
// }



// Chữa btvn

// Bài 1. Khai báo 1 mảng gồm các số bất kỳ.
// const arrNumber = [1, 4, 6, -2, -5, 9];
const arrNumber = [1,2,3,4, 6];
// Tính tích của các phần tử trong mảng đó.
// let multiplicationResult = 1;
// for (let number of arrNumber) {
//     multiplicationResult *= number;
// }
// console.log(multiplicationResult);

// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// let minDivisible2=null;
// for (let number of arrNumber) {
//     if (number % 2 === 0) {
//         if (minDivisible2 === null) {
//             minDivisible2 = number;
//         }
//         if (minDivisible2 !== null && number < minDivisible2) {
//             minDivisible2 = number;
//         }
//     }
// }
// if (minDivisible2 === null) {
//     console.log("Trong mảng không có số chia hết cho 2")
// } else {
//     console.log("Số nhỏ nhất chia hết cho 2 trong mảng: ", minDivisible2)
// }

// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// let maxDivisible3=null;
// for (let number of arrNumber) {
//     if (number % 3 === 0) {
//         if (maxDivisible3 === null) {
//             maxDivisible3 = number;
//         }
//         if (maxDivisible3 !== null && number > maxDivisible3) {
//             maxDivisible3 = number;
//         }
//     }
// }
// if (maxDivisible3 === null) {
//     console.log("Trong mảng không có số chia hết cho 3")
// } else {
//     console.log("Số lớn nhất chia hết cho 3 trong mảng: ", maxDivisible3)
// }

// Tính giá trị trung bình của mảng.
// let sum = 0;
// for (let number of arrNumber) {
//     sum += number;
// }
// console.log("TB: ", sum/arrNumber.length)

// Lọc ra các số nguyên tố trong mảng.
    //Số nguyên tố là số chia hết cho 1 và chính nó
// for (let number of arrNumber) {
//     let count = 0;
//     for (let i = 1; i <= number; i++){
//         if (number % i == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         console.log("Số nguyên tố: ", number)
//     }
// }

// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let isExistNumber = false;
// for (let number of arrNumber) {
//     if (number < 10) {
//         isExistNumber = true;
//         break;
//     }
// }
// if (isExistNumber === true) {
//     console.log("Trong mảng có tồn tại số nhỏ hơn 10")
// } else {
//     console.log("Trong mảng không tồn tại số nhỏ hơn 10")
// }

// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let isExistNumber = true;
// for (let number of arrNumber) {
//     if (number < 20) {
//         isExistNumber = false;
//         break;
//     }
// }
// if (isExistNumber) {
//     console.log("Tất cả các phần tử trong mảng đều lớn hơn 20")
// } else {
//     console.log("Trong mảng có phần tử nhỏ hơn 20 hoặc bằng 20")
// }

// Nhập vào số n cho đến khi n là 1 số trong mảng s.
// while (true) {
//     let n = Number(prompt("Mời bạn nhập 1 số: "));
//     if (arrNumber.includes(n)) {
//         break;
//     }
// }

// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
//https://www.geeksforgeeks.org/bubble-sort/




// Bài2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
const s = [
    "Javascript" , "PHP", "HTML", "CSS", "NodeJS", "ReactJS", "ExpressJS", "NestJS", "Typescript"
]

const text = "a";
// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.

// let minLength = s[0].length;
// let str = s[0]
// for (let element of s) {
//     if (minLength > element.length) {
//         minLength = element.length;
//         str = element;
//     }
// }
// console.log("Element: ", str);

// Tìm những chuỗi trong mảng có chứa giá trị text.

// const arrStr = [];

// for (let element of s) {
//     if (element.includes(text)) {
//         arrStr.push(element);
//     }
// }
// if (arrStr.length === 0) {
//     console.log("No string found");
// } else {
//     console.log(arrStr);
// }

// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

// const newArr = s.map((e) => e.slice(0, 3));
// console.log(newArr);
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.

// const strS = s.join('-')
// console.log(strS)