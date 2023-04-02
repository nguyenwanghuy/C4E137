// quy ước nhỏ: tất cả biến lưu phần tử html đều có dấu $ đằng trước

// truy suất phần tử thông qua id

// window.onload = function() {
    // const $title = document.getElementById('big-title');
    // console.log($title)

// }// dùng window thì cho scr lên đầu được còn không thì để xuống dưới

// truy suất phần tử thông qua class
// const $paragraphs = document.getElementsByClassName('red-paragraph'); // trả về html colection
// for( const $paragraph of $paragraphs){
//     console.log($paragraph);
// }

// truy suất phần tử thông qua tên thẻ
// const $images = document.getElementsByTagName("img");// trả về html colection

// console.log($images);

//document.querySelector(), document,.querySelectorAll => tìm hiểu thêm

// lấy ra nội dung của phần tử
// let titleContent = $title.innerHTML;
// console.log(titleContent);

// $title.innerHTML = "Nội dung mới 😁"

// //lấy ra thuộc tính của 1 phần tử
// let titleAttributeValue = $title.getAttribute('data-hello');
// console.log(titleAttributeValue);

// // thay mới/ thay đổi thuộc tính của 1 phần tử
// $title.setAttribute('data-goodbye', 'This is goodbye')
// $title.setAttribute('data-hello', 'This is hello')

// // xoá thuộc tính của 1 phần tử
// $title.removeAttribute('data-goodbye');

// //thay đổi định dạng của phần tử
// // $title.style.color = 'red';
// // $title.style.backgroundColor = 'black';
// // $title.style.display = 'flex';


// // for(const $p of $paragraphs) {
// //     $p.style.color= 'red';
// // }

// $paragraphs[0].style.color = 'blue';

// // thêm phần tử vào trang web
// const $link = document.createElement('a');
// $link.innerHTML = "This is link to somewhere"
// $link.setAttribute('href',  'http://google.com')

// document.body.append($link) //prepend thêm vào đầu , append thêm vào cuối
// $title.append($link) // thêm vào trong thẻ h1
// $title.after($link) // thêm vào sau thẻ h1
// $title.before($link) // thêm linl vào trước h1

//xoá phần tử trên trang web
// $title.parentElement.remove()

//listener sau ghi đè listener trước

// $title.onclick = handleClickTitle1;
// $title.onclick = handleClickTitle2;

//thêm listener

// $title.addEventListener('click', handleClickTitle1);
// $title.addEventListener('click', handleClickTitle2);

// function handleClickTitle1() {
//     console.log('hello')
// }

// function handleClickTitle2() {
//     console.log('goodbye')
// }


// const $emailInput = document.getElementById('my-email')

// $emailInput.onchange = function() {
//     let email = $emailInput.value // lấy giá trị nhập vào ô input
//     if (!isEmailValid(email)) alert('Hãy nhập lại email')
// }


// //hoặc
// // $emailInput.addEventListener('change', function()) {
//     //})
    
//     function isEmailValid(email) {
//         return String(email)
//         .toLowerCase()
//         .match (
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     )
    
// }


// const $numberA = document.getElementById('number-a');
// const $numberB = document.getElementById('number-b');
// const $plusBtn = document.getElementById('plus-btn');
// const $subBtn = document.getElementById('sub-btn');

// $plusBtn.onclick = function() {
//     let a = Number($numberA.value);
//     let b = Number($numberB.value);

//     alert(a+b);
// }


// $subBtn.onclick = function() {
//     let a = $numberA.value;
//     let b = $numberB.value;

//     alert(a-b)
// }

//bài 1 bài về nhà 1. Trên trang web, hãy tạo 1 ảnh (100px x 100px) và các ô input để nhập:
// URL (nhập chuỗi): khi thay đổi giá trị → thay đổi URL của ảnh.
// Width (nhập số): khi thay đổi giá trị → thay đổi chiều rộng của ảnh.
// Height (nhập số): khi thay đổi giá trị → thay đổi chiều rộng của ảnh.
// Border Radius (nhập số): khi thay đổi giá trị → thay đổi độ bo góc của ảnh.
// Alt (nhập chuỗi): khi thay đổi giá trị → thay đổi thuộc tính alt của ảnh.


const $urlInput = document.getElementById('url-input');
const $widthInput = document.getElementById('width-input');
const $heightInput = document.getElementById('height-input');
const $boderRadiusInput = document.getElementById('border-radius-input');
const $altInput = document.getElementById('alt-input');
const $image = document.getElementById("image");

$urlInput.onchange = () => $image .setAttribute ('src', $urlInput.value);
$altInput.onchange = () => $image .setAttribute ('src', $altInput.value);
$widthInput.onchange = () => $image .style.width =$widthInput.value + 'px';
$heightInput.onchange = () => $image .style.height =$heightInput.value + 'px';
$boderRadiusInput.onchange = () => $image .style.borderRadius = $boderRadiusInput.value + 'px';



//bài 2 Khi nhập vào ô input và bấm nút “Tạo công việc” → Thêm 1 công việc mới vào cuối danh sách với nội dung vừa nhập từ ô input.

const $contentInput = document.getElementById('task-content-input');
const $createTaskBtn = document.getElementById('create-task-btn');
const $taskList = document.getElementById('task-list');

$createTaskBtn.onclick = () => {
    let value = $contentInput.value;


    //tạo 1 li

    const $li = document.createElement('li');
    $li.innerHTML = value;

    $taskList.append($li);
}
