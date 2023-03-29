// const mySelf = {
//     //đặc điểm (thuộc tính)
//     firstName: "Huy",
//     lastName: "Nguyen",
//     dob: "25/25/2001",
//     address: "NĐ",
//     phoneNumber: "13216541",
//     pet: {
//         name: 'Bob',
//         age: '2',

//     }

//     // hành vi phương thức
// }
// // console.log(mySelf)


// //lấy ra giá trị của thuộc tính " firstname " trong mySelf
// // console.log(mySelf.firstName);
// // console.log(mySelf["firstName"]);

// const key = "firstName";
// // console.log(mySelf[key]);

// //thay đổi giá trị thuộc tính phoneNumber của mySelf
// mySelf.phoneNumber = "012546";
// mySelf['phoneNumber'] = "0123546"
// //thêm thuộc tính isHandsome cho mySelf
// mySelf.isHandsome = true;

// // console.log(mySelf)

// //xoá thuộc tính dob của mySelt
// delete mySelf.dob;
// // console.log(mySelf)

// //mảng for... of còn object là for... in

// for(let key in mySelf) {
//     console.log("Đặc điểm " + key + "có giá trị là: "+ mySelf[key] ); // khác mySelf.key
// }


// //function có nhiều đầu vào nhưng chỉ có 1 đầu ra

// // khai báo function nhập và kiểm tra 1 số

// let a =0;
// let b =0;
// function inputNumber(label) {
//     let input = NaN;
//     do {
//         input = Number(prompt("Nhập vào số " +label + ":" ));
        
//     } while(isNaN(input));
    
//     return input; // trả về giá trị khi gọi hàm và không thực thi các đoạn code bên dưới
    
// }


// // gọi function inputNumber
// a= inputNumber('a');
// b= inputNumber('b');
// let c = inputNumber('c')

// console.log(a +b);


// khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình

// function name() {
//     your=prompt("nhập vào tên")
//     console.log("Hello world" + your)
// }
// name()

// function test() {
//     let a =100;
//     let b =10;

//     // closure (bao đóng)
//     function caculateAB() {
//         return a + b;
//     }
//     return caculateAB(); // return caculatateAB thì ret
// }
// const res1 = test();
// console.log(res1)
// console.log(test());

//function có tính chất hoisting: sử dụng function trước khi khai báo

// Callback 

function doSomething() {
    console.log("Do something here");
}

function sayHello() {
    console.log("hello world");
}

function executeAfrerSeconds(seconds, work) {
    console.log("Thực thi gì đó sau " + seconds + "giây");
    setTimeout(work, seconds *1000);
}

executeAfrerSeconds(3, sayHello);
executeAfrerSeconds(5,doSomething);

// Khai báo arrow function

const doAnything = () => {

}
const doNothing = () => {
    return "hello";
};

// function sum(a,b,c) {
//     return a +b +c

// }
const sum = (a,b,c) => a + b + c;

const huyNguyen = {
    name: "Huy Nguyen",
    flirt: () => {
        console.log(this);
    },

    run: function () {
        console.log(this);
    }
};

huyNguyen.flirt();
huyNguyen.run();


// bài 1 : khai báo 1 function với đầu vào là 3 số a,b,c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x +c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình

function timNghiemPtBac2(a,b,c) {
    if(a == 0) {
        console.log ("Không phải phương trình bậc 2");
        return null;
    }

    const delta = b ** 2 -4 * a * c;
    if ( delta ==0) {
        const x = -b / (2*a);
        return [x];
    } else if ( delta >0) {
        const x1 = (-b + Math.sqrt(delta)) / (2*a);
        const x2 = (-b + Math.sqrt(delta)) / (2*a);
        return [x1, x2];
    } else {
        return [];
    }
}
let nghiem = timNghiemPtBac2(1,-3,-4);
console.log(nghiem);

//bài 2 Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.

function canhTamGiac(a,b,c) {
    if((a+b) >c && (a+c)>b && (b+c>0) && a>0 && b>0 && c>0) {
        return true;
    } else {
        return false;
    }
}
console.log(canhTamGiac(2,3,4))

// c2 return (
//     (a>0 && b>0 && c>0)
//     && (a+b >c)
//     && (a+c>b )
//     && (b+c>0)
// );


//bài 3 Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
const d = new Date();

const year = d.getFullYear();
const month = d.getMonth() +1;
const date = d.getDate();
console.log((date), (month), (year))

//bài 4 tìm user có id thoả mãn điều kiện
// Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// Đếm số lượng user có age > 50.
// Đếm số lượng user đã kết hôn và chưa kết hôn.
// Đếm số lượng user theo từng ngành nghề tương ứng.

let users = [
    {
        "id": 1,
        "first_name": "Kenton",
        "last_name": "Samples",
        "email": "ksamples0@washingtonpost.com",
        "gender": "Male",
        "age": 35,
        "job": "Worker",
        "country": "UK",
        "is_married": false
    }, {
        "id": 2,
        "first_name": "Marc",
        "last_name": "Jurries",
        "email": "mjurries1@flavors.me",
        "gender": "Female",
        "age": 54,
        "job": "Teacher",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 3,
        "first_name": "Bruis",
        "last_name": "McBeath",
        "email": "bmcbeath2@cam.ac.uk",
        "gender": "Female",
        "age": 59,
        "job": "Developer",
        "country": "UK",
        "is_married": false
    }, {
        "id": 4,
        "first_name": "Kennett",
        "last_name": "Lammert",
        "email": "klammert3@sun.com",
        "gender": "Female",
        "age": 22,
        "job": "Dentist",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 5,
        "first_name": "Feodora",
        "last_name": "Clemot",
        "email": "fclemot4@craigslist.org",
        "gender": "Female",
        "age": 46,
        "job": "Dentist",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 6,
        "first_name": "Betta",
        "last_name": "Bittlestone",
        "email": "bbittlestone5@digg.com",
        "gender": "Female",
        "age": 15,
        "job": "Project Manager",
        "country": "Russia",
        "is_married": false
    }, {
        "id": 7,
        "first_name": "Tedda",
        "last_name": "Surfleet",
        "email": "tsurfleet6@shutterfly.com",
        "gender": "Male",
        "age": 19,
        "job": "Farmer",
        "country": "US",
        "is_married": true
    }, {
        "id": 8,
        "first_name": "Alva",
        "last_name": "Cathcart",
        "email": "acathcart7@twitter.com",
        "gender": "Female",
        "age": 28,
        "job": "Developer",
        "country": "Vietnam",
        "is_married": true
    }, {
        "id": 9,
        "first_name": "Francesca",
        "last_name": "Sprionghall",
        "email": "fsprionghall8@tumblr.com",
        "gender": "Female",
        "age": 32,
        "job": "Farmer",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 10,
        "first_name": "Stanfield",
        "last_name": "Huc",
        "email": "shuc9@amazon.co.jp",
        "gender": "Genderfluid",
        "age": 60,
        "job": "Doctor",
        "country": "US",
        "is_married": false
    }, {
        "id": 11,
        "first_name": "Drugi",
        "last_name": "Hatliff",
        "email": "dhatliffa@php.net",
        "gender": "Female",
        "age": 42,
        "job": "Project Manager",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 12,
        "first_name": "Farica",
        "last_name": "Rutley",
        "email": "frutleyb@moonfruit.com",
        "gender": "Female",
        "age": 28,
        "job": "Developer",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 13,
        "first_name": "Ania",
        "last_name": "Perllman",
        "email": "aperllmanc@virginia.edu",
        "gender": "Female",
        "age": 57,
        "job": "Project Manager",
        "country": "UK",
        "is_married": false
    }, {
        "id": 14,
        "first_name": "Dallas",
        "last_name": "Hans",
        "email": "dhansd@photobucket.com",
        "gender": "Female",
        "age": 53,
        "job": "Farmer",
        "country": "UK",
        "is_married": true
    }, {
        "id": 15,
        "first_name": "Lissie",
        "last_name": "Lebreton",
        "email": "llebretone@fc2.com",
        "gender": "Female",
        "age": 36,
        "job": "Developer",
        "country": "UK",
        "is_married": false
    }, {
        "id": 16,
        "first_name": "Casandra",
        "last_name": "World",
        "email": "cworldf@columbia.edu",
        "gender": "Female",
        "age": 19,
        "job": "Worker",
        "country": "US",
        "is_married": true
    }, {
        "id": 17,
        "first_name": "Alane",
        "last_name": "O'Kelly",
        "email": "aokellyg@deliciousdays.com",
        "gender": "Polygender",
        "age": 48,
        "job": "Farmer",
        "country": "Russia",
        "is_married": false
    }, {
        "id": 18,
        "first_name": "Ethan",
        "last_name": "Revill",
        "email": "erevillh@photobucket.com",
        "gender": "Female",
        "age": 15,
        "job": "Teacher",
        "country": "Russia",
        "is_married": false
    }, {
        "id": 19,
        "first_name": "Kellina",
        "last_name": "Kleinmintz",
        "email": "kkleinmintzi@chron.com",
        "gender": "Female",
        "age": 34,
        "job": "Developer",
        "country": "US",
        "is_married": false
    }, {
        "id": 20,
        "first_name": "Reagan",
        "last_name": "Bamlett",
        "email": "rbamlettj@timesonline.co.uk",
        "gender": "Female",
        "age": 32,
        "job": "Project Manager",
        "country": "US",
        "is_married": false
    }, {
        "id": 21,
        "first_name": "Sena",
        "last_name": "Teck",
        "email": "steckk@omniture.com",
        "gender": "Male",
        "age": 31,
        "job": "Farmer",
        "country": "US",
        "is_married": false
    }, {
        "id": 22,
        "first_name": "Ugo",
        "last_name": "Knivett",
        "email": "uknivettl@typepad.com",
        "gender": "Male",
        "age": 44,
        "job": "Developer",
        "country": "Japan",
        "is_married": false
    }, {
        "id": 23,
        "first_name": "Lenora",
        "last_name": "Trower",
        "email": "ltrowerm@latimes.com",
        "gender": "Female",
        "age": 26,
        "job": "Doctor",
        "country": "Vietnam",
        "is_married": true
    }, {
        "id": 24,
        "first_name": "Nickola",
        "last_name": "Di Boldi",
        "email": "ndiboldin@devhub.com",
        "gender": "Male",
        "age": 44,
        "job": "Teacher",
        "country": "US",
        "is_married": false
    }, {
        "id": 25,
        "first_name": "Melissa",
        "last_name": "Davenhall",
        "email": "mdavenhallo@google.co.jp",
        "gender": "Female",
        "age": 19,
        "job": "Teacher",
        "country": "Russia",
        "is_married": true
    }, {
        "id": 26,
        "first_name": "Daron",
        "last_name": "Nias",
        "email": "dniasp@flavors.me",
        "gender": "Female",
        "age": 16,
        "job": "Developer",
        "country": "Japan",
        "is_married": false
    }, {
        "id": 27,
        "first_name": "Osbert",
        "last_name": "Bevens",
        "email": "obevensq@github.com",
        "gender": "Female",
        "age": 43,
        "job": "Developer",
        "country": "Russia",
        "is_married": false
    }, {
        "id": 28,
        "first_name": "Nicolle",
        "last_name": "Tanby",
        "email": "ntanbyr@rediff.com",
        "gender": "Female",
        "age": 23,
        "job": "Farmer",
        "country": "US",
        "is_married": false
    }, {
        "id": 29,
        "first_name": "Kiley",
        "last_name": "Le - Count",
        "email": "klecounts@aboutads.info",
        "gender": "Female",
        "age": 24,
        "job": "Developer",
        "country": "Vietnam",
        "is_married": true
    }, {
        "id": 30,
        "first_name": "Wynnie",
        "last_name": "Damper",
        "email": "wdampert@springer.com",
        "gender": "Non-binary",
        "age": 47,
        "job": "Teacher",
        "country": "Japan",
        "is_married": false
    }, {
        "id": 31,
        "first_name": "Raimund",
        "last_name": "Cobbledick",
        "email": "rcobbledicku@surveymonkey.com",
        "gender": "Male",
        "age": 31,
        "job": "Teacher",
        "country": "US",
        "is_married": false
    }, {
        "id": 32,
        "first_name": "Shaylyn",
        "last_name": "Chadderton",
        "email": "schaddertonv@amazon.co.jp",
        "gender": "Female",
        "age": 28,
        "job": "Doctor",
        "country": "Russia",
        "is_married": false
    }, {
        "id": 33,
        "first_name": "Hilary",
        "last_name": "Moine",
        "email": "hmoinew@nasa.gov",
        "gender": "Male",
        "age": 21,
        "job": "Farmer",
        "country": "Japan",
        "is_married": true
    }, {
        "id": 34,
        "first_name": "Fleming",
        "last_name": "Fredi",
        "email": "ffredix@berkeley.edu",
        "gender": "Male",
        "age": 26,
        "job": "Teacher",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 35,
        "first_name": "Cherye",
        "last_name": "Huckerby",
        "email": "chuckerbyy@dmoz.org",
        "gender": "Male",
        "age": 59,
        "job": "Developer",
        "country": "US",
        "is_married": false
    }, {
        "id": 36,
        "first_name": "Mindy",
        "last_name": "Campany",
        "email": "mcampanyz@theglobeandmail.com",
        "gender": "Female",
        "age": 55,
        "job": "Worker",
        "country": "UK",
        "is_married": true
    }, {
        "id": 37,
        "first_name": "Esta",
        "last_name": "Craythorn",
        "email": "ecraythorn10@timesonline.co.uk",
        "gender": "Male",
        "age": 39,
        "job": "Farmer",
        "country": "Japan",
        "is_married": false
    }, {
        "id": 38,
        "first_name": "Burty",
        "last_name": "Stobbes",
        "email": "bstobbes11@latimes.com",
        "gender": "Male",
        "age": 32,
        "job": "Doctor",
        "country": "Japan",
        "is_married": true
    }, {
        "id": 39,
        "first_name": "Ofelia",
        "last_name": "de Almeida",
        "email": "odealmeida12@booking.com",
        "gender": "Male",
        "age": 56,
        "job": "Doctor",
        "country": "US",
        "is_married": true
    }, {
        "id": 40,
        "first_name": "Debor",
        "last_name": "Wrettum",
        "email": "dwrettum13@desdev.cn",
        "gender": "Female",
        "age": 31,
        "job": "Teacher",
        "country": "Japan",
        "is_married": true
    }, {
        "id": 41,
        "first_name": "Archibald",
        "last_name": "Dufaur",
        "email": "adufaur14@pinterest.com",
        "gender": "Female",
        "age": 15,
        "job": "Developer",
        "country": "Vietnam",
        "is_married": true
    }, {
        "id": 42,
        "first_name": "Susanetta",
        "last_name": "Ratnege",
        "email": "sratnege15@reverbnation.com",
        "gender": "Male",
        "age": 30,
        "job": "Dentist",
        "country": "Vietnam",
        "is_married": true
    }, {
        "id": 43,
        "first_name": "Opalina",
        "last_name": "Nann",
        "email": "onann16@tinyurl.com",
        "gender": "Female",
        "age": 47,
        "job": "Developer",
        "country": "Japan",
        "is_married": false
    }, {
        "id": 44,
        "first_name": "Wiley",
        "last_name": "MacGuigan",
        "email": "wmacguigan17@go.com",
        "gender": "Female",
        "age": 19,
        "job": "Teacher",
        "country": "UK",
        "is_married": false
    }, {
        "id": 45,
        "first_name": "Johnathan",
        "last_name": "McGown",
        "email": "jmcgown18@ezinearticles.com",
        "gender": "Male",
        "age": 49,
        "job": "Dentist",
        "country": "Japan",
        "is_married": false
    }, {
        "id": 46,
        "first_name": "Analise",
        "last_name": "Davenall",
        "email": "adavenall19@earthlink.net",
        "gender": "Female",
        "age": 23,
        "job": "Developer",
        "country": "Vietnam",
        "is_married": true
    }, {
        "id": 47,
        "first_name": "Ulrika",
        "last_name": "Kobsch",
        "email": "ukobsch1a@blogspot.com",
        "gender": "Female",
        "age": 32,
        "job": "Dentist",
        "country": "Japan",
        "is_married": true
    }, {
        "id": 48,
        "first_name": "Esther",
        "last_name": "Aldie",
        "email": "ealdie1b@virginia.edu",
        "gender": "Male",
        "age": 35,
        "job": "Project Manager",
        "country": "UK",
        "is_married": true
    }, {
        "id": 49,
        "first_name": "Lemmie",
        "last_name": "Guidotti",
        "email": "lguidotti1c@elpais.com",
        "gender": "Bigender",
        "age": 20,
        "job": "Worker",
        "country": "Russia",
        "is_married": true
    }, {
        "id": 50,
        "first_name": "Nolana",
        "last_name": "Ivory",
        "email": "nivory1d@cbsnews.com",
        "gender": "Female",
        "age": 32,
        "job": "Doctor",
        "country": "Russia",
        "is_married": false
    }
];
// Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// let n = Number(prompt('Nhap so n'));
// users.find (function(names) {
//     if (n == names.id) {
//         console.log (names.first_name +  " " + names.last_name)
//     }
// })
// function findUserById(id) {
//     // dùng for, for ... of , forEach
//     for(let user of users) {
//         if( user.id == id) return user; // dừng vòng lặp và dừng hàm luôn
        
//     }
//     return null;
// }

    //dùng phương thức find của mảng

// Đếm số lượng user có age > 50.
let tuoi = users.filter(function (ages) {
    if (ages.age>50) {
        console.log(ages)
    }
    return[ages];
})

// Đếm số lượng user đã kết hôn và chưa kết hôn

let daKetHon = users.filter(function (marri) {
    if (marri.is_married == true){
    console.log(marri);
}
return [marri];
});


let chuaKetHon = users.filter(function (unmari) {
    if (unmari.is_married == false) {
        console.log(unmari)
    }
return[unmari]
})





