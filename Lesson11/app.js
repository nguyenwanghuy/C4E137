//localStorage

// lưu dữ liệu vào localStorage

// localStorage.setItem('name', 'huy nguyen');
// localStorage.setItem( 'address', 'nam định');
// localStorage.setItem('weight', '60');

//  localStorage.setItem('name', 'someone');

// localStorage.setItem('favourites', ['a', 'b', 'c', 'd']);

// const favourites = localStorage.getItem('favourites')
// localStorage.setItem('pet' , {type: 'cat', name: 'Bob',age: 2});


// const pet = localStorage.getItem('pet')
// console.log( pet)

//lấy dữ liệu từ localStorage

// const value = localStorage.getItem('weight'); // kiểu dữ liệu trả về : string | null
// console.log(value + 10);


const favourites = ['money', 'sleeping', 'girl'];
const pet = {type: 'cat', name: 'Bob',age: 2};
const users = [
    { id: 1, name: 'A', username: 'user_a', pass: '12345678'},
    { id: 1, name: 'B', username: 'user_b', pass: '12345678'}
  
];

// biến đổi object | arrary => string (jsson)
const favouritesJson = JSON.stringify(favourites)
console.log(favourites)

const petJSON = JSON.stringify(pet)
console.log(petJSON)


//lưu lại users vào localStorage
const usersJSON = JSON.stringify(users) // biến đổi users => json
localStorage.setItem('users', usersJSON)
console.log(usersJSON);


// biến đổi string (json) => object |array

const newPet = JSON.parse(petJSON)
console.log(newPet)

// const newUsers = JSON.parse(usersJSON);
// console.log(newUsers)

// lấy users từ localStorage
const value = localStorage.getItem('users');
const newUsers = JSON.parse(usersJSON);
console.log(newUsers)



// bài setInterval

const $second = document.getElementById( 'seconds')
const $startTimerBtn = document.getElementById( 'start-timer-btn')
const $pauseTimerBtn = document.getElementById( 'pause-timer-btn')
const $resetTimerBtn = document.getElementById( 'reset-timer-btn')

 let timer = null;
//value chỉ có trong input nên là dùng inner
$startTimerBtn.onclick = function() {
    timer = setInterval(() => {

        let value = $second.innerHTML;
        $second.innerHTML  = -- value ; 
        
        if (value ==0) {
            clearInterval(timer);
        }
    }, 1000 );
}


$pauseTimerBtn.onclick = function () {
    clearInterval(timer);
}

$resetTimerBtn.onclick = function () {
    clearInterval(timer);
    $second.innerHTML= 30;
}

let name = 'huy';
let text = `hello
${name}
goodbye
`

//spread
let nums1 = [1,2,3,4];
let nums2 = [8,9,10];

let res1 = [... nums1, 10,9];  // nếu không thêm dấu ... thì là array


console.log(res1)


//destructuring

let part1 = {type : 'cat', names : 'bob'};
let part2 = { age:20};
let sumury = { name: 'pêt',...part1,...part2, address: 'hn'}

let {type, names} =sumury;
console.log(type,names) // dùng cho objiect là hợp lý nhất, tên thuộc tính trùng với tên của biến