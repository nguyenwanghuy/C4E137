


const $btn1 = document.getElementById('create-task1')
const $btn2 = document.getElementById('create-task2')
const $btn3 = document.getElementById('create-task3')
const $btn4 = document.getElementById('create-task4')
const $btn5 = document.getElementById('create-task5')

const $taskk1 = document.getElementById('task1')
const $taskk2 = document.getElementById('task2')
const $taskk3 = document.getElementById('task3')
const $taskk4 = document.getElementById('task4')
const $taskk5 = document.getElementById('task5')


$btn1.addEventListener('click', function() {
    $taskk1.remove();
    alert('Vừa xoá task1')

})
$btn2.addEventListener('click', function() {
    $taskk2.remove();
    alert('Vừa xoá task2')

})
$btn3.addEventListener('click', function() {
    $taskk3.remove();
    alert('Vừa xoá task3')

})
$btn4.addEventListener('click', function() {
    $taskk4.remove();
    alert('Vừa xoá task4')
})
$btn5.addEventListener('click', function() {
    $taskk5.remove();
    alert('Vừa xoá task5')
})




//bài 2

const name = document.getElementById('name')
const age = document.getElementById('age')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const form = document.getElementById('form')

const $emailInput = document.getElementById('my-email')
$emailInput.onchange = function() {
    let email = $emailInput.value // lấy giá trị nhập vào ô input
    if (!isEmailValid(email)) alert('Hãy nhập lại email')
}

    function isEmailValid(email) {
        return String(email)
        .toLowerCase()
        .match (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    
}


function send() {
   
    if(pass.value!= "") {
        if(pass.value.length <6) {
            alert("Vui lòng nhập đúng 6 ký tự ");
            
        }
    }else {
        alert("Vui lòng nhập mật khẩu");
        

    }


}
  
