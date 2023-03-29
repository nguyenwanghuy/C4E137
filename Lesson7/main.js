// let a = 'Hello';
// let b = 10;

//nhập dữ liệu từ bán phím và gán giá trị vừa nhập vào trong 1 biến
// let input = prompt ("Hãy nhập vào đây để gán giá trị cho biến 'input'")//dữ liệu có kiểu string

// let x = Number (prompt("Nhập số x")) *1
// let y = Number (prompt("Nhập số y")) *1
// let z= x + y
// console.log(z)
// console.log(input);




// let name = "huy"

// {
//     //bên trong 1 khối lệnh
//     let name = "someone"
//     let age = 28;
//     {
//         let adress = "NĐ"
//         //dùng được age ở chỗ này

//         //adress chỉ tồn tại trong này
//     }

//     console.log(age)
// }
// console.log(age);//không tồn tại ở đây

// let age = prompt("Nhập vào tuổi của bạn");

//nếu age nhỏ hơn 18 thì => "Không cho vào"
// nếu age lớn hơn hoặc bằng 18 => "Vào thoải mái"

// if( age <18) {
//     console.log("Không cho vào")
// } else {
//     console.log("Vào thoải mái")
// }


//nhập vào phân loại của 1 thằng học sinh:1,2,3
//nếu phân loại là 1 => 'Thằng này xứng đáng có 10 người yêu'
//nếu phân loại là 2 => '9.5 điểm'
//nếu phân loại là 3 => 'Cần cố gắng hơn'

// let rank = prompt("nhập vào phân loại")
// if (rank ==1) {
//     console.log('Thằng này xứng đáng có 10 người yêu')
// } else if (rank ==2) {
//     console.log('9.5 điểm')
// } else if (rank ==3) {
//     console.log('Cần cố gắng hơn')
// } else {
//     console.log('nhập đúng rank')
// }


// let text =prompt('Nhập vào 1 chuỗi')

// if(text.length <8){
//     console.log('Chuỗi ngắn quá')
// } else {
//     console.log('chuỗi này được')
// }

//bài
//in ra dòng 'i love u' 500 lần, mỗi dòng có đánh số thứ tự
// for(let count =1; count <=500; count++) {
//     console.log(count + ". I love you");
// }
//bài
// let sum=0;
// for (let count = 1; count <= 50; count++) {
//     sum += count;
// }
// console.log(sum)

// let num =10;
// while (num >=6) {
//     console.log(num);
//     num = Math.floor(Math.random() * 10);
// }

//bài Hãy dùng while để in ra dãy số từ 1 đến 200
// let index = 1;
// while (index<=200) {
//     console.log(index)
//     index++;

// }

//bài  Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// let s = prompt("Chuỗi s")
// let l = prompt("Số l")

// while (s. length <1) {
// s += 'a'
// }
// console.log(s)

//bài Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.

// let x =prompt("Nhập số x");
// let y =prompt("Nhập số y");

// if (
//     x >=0
//     && x<y
//     && y <=100

// ) {

// while (x <y) {
//     x++
//     y--
// }
// console.log(x, y)
// }



//Bài 1 in ra từ 1 đến 500


// let index = 1;
//  while (index<500) {
//      index++;
//      console.log(index)
//     }

//Bài 1
// for (let num =1 ; num<=500 ; num ++) {
//     console.log(num)
// }





//Bài 2 In ra các số chia hết cho 2 và 3 từ 1 đến 300.

// for (let i =1 ; i <=300 ; i++) {
//     if ( i % 2 ==0  && i % 3 ==0 ) {
//         console.log(i)
//     }
// }


//Bài 3  Tính tổng các số chẵn trong đoạn [-30, 50].

// let x = 0;
// for ( let count = -30; count <=50 ; count++) {
//     if ( count % 2 ==0 )
//     x = x + count
// }
// console.log(x)

//Bài 4 Nhập vào số n. Tính giai thừa của số n.

// let gt = 1;
// let bienBai4 = prompt("Nhập vào")
// let tong =1
// while (gt <= bienBai4) {
//     tong = tong * gt;
//     gt++
// }
// console.log(tong)
//bài 4
// let res =1= 1;
// let n = Number(prompt('Nhập vào số n')){
//     res = res *1;
// }

//bài 5 Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x. 
// let a = Number(prompt('a'));
// let b = Number(prompt('b'));
// let x = Number(prompt('x'));
// let res = null;

// // for (let i =a; i <= b; i++) {
// //     if (i % x ==0) {
// //         res = i;
// //         break;
// //     }
// // }


// console.log(res)

//BÀi 6 Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau:

// let S = 0;
// let n = prompt("Nhập n =");
// for ( let i=1; i <= n ; i++) {
//     S +=1 / (i * (i + 1))
// }
// console.log(S)


//Bài 7  Nhập vào số n. Hãy in ra số ước của n.

// let n=prompt('nhâp số n')

// for(let x=1; x<=n; x++){
//     if(n % x ==0){
//         console.log(x)
//     }
// }


//bài 8  Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không
//thiếu 
// let n=prompt('Nhập số n')
// if (n==1) {
//   console.log('n không phải là số nguyên tố')
// } else if (n==2) {
//   console.log('n là số nguyên tố')
// } else{
// for( let x =2 ;x<n; x++) {
//   if(n % x==0) {
//   console.log('n không phải là số nguyên tố')
//   }else if (n %3==0) {
//     console.log('n không phải là số nguyên tố')
//   }else {
//     console.log('n là số nguyên tố')
//   }
//   break;
// }
// } 
  

//bài 9 Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.

// let s = prompt("Chữ số s")
// let l = prompt("Số l")
// while (s.length <l) {
//     s += '0'
// }
// console.log(s)

//bài 10 Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n.

//note
// let m =prompt("Nhập số m");
// let n =prompt("Nhập số n");
// let text ;
 
//     for(let x=1; x<=n || x<=m; x++){
//         if(n % x ==0 && m % x==0){
//             text =x;
//         }
        
//     }
//     console.log('Ước chung lớn nhất ' + text)

//bài 11  Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n.

// let m = Number(prompt('nhap so m'));
// let n = Number(prompt('nhap so n'));
// let i = ("bội chung của m và n")

// while (true) {
// 	if (i % m == 0 && i % n == 0) {
// 		i++
// 		break;
// 	}	
// }
// console.log(i);


// Bai 12 - Trò chơi đoán số
// let correct = Math.floor(Math.random() * 20);
// let answer = Number(prompt('Nhập 1 số bất kỳ'));

// for (let i = 1; i <= 20; i++) {
// 	if (correct == answer) {
// 		console.log('đoán đúng');
// 	} else if (correct == answer) {
// 		console.log('đoán sai');
// 	} else  {
// 		console.log('cần cố gắng')
// 		break;
		
// 	}
// }


//bài 17 cân nặng

// let w =Number(prompt('chiều cao'))
// let h =Number(prompt('cân nặng'))
// let i=  w / (h**2)

// if(i<18.5){
// 	console.log('Nhẹ cân');
// } else if(18.5<= i <23) {
// 	console.log('Bình thường');
// } else if(23 <= i < 25) {
// 	console.log('Thừa cân');
// } else if (i>= 25) {
// 	console.log('Béo phì');
// }

