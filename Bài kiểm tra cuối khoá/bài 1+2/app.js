// bài 1
function isPrime(n) {
	if (n <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

function calculate() {
	const a = parseInt(document.getElementById("a").value);
	const b = parseInt(document.getElementById("b").value);

	if (isNaN(a) || isNaN(b) || a >= b) {
		document.getElementById("result").innerHTML = "Vui lòng nhập lại số a và b sao cho a < b.";
		return;
	}

	let sum = 0;

	for (let i = a; i <= b; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}

	document.getElementById("result").innerHTML = `Tổng các số nguyên tố trong khoảng từ ${a} đến ${b} là ${sum}.`;
}


//bài 2

  function numberOneTriangle() {
    let star = document.getElementById("star").value;
    let resu = document.getElementById("resu");
    resu.innerHTML = "";
    
    if (star < 1 || star > 10) {
      resu.innerHTML = "Vui lòng nhập số từ 1 đến 10";
      return;
    }

    for (let i = 1; i <= star; i++) {
      let triangle = "";
      for (let j = 0; j < i; j++) {
        triangle += "*";
      }
      resu.innerHTML += triangle + "<br>";
    }
  }