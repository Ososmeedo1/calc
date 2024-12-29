let num1 = document.getElementById('firstNumber')
let num2 = document.getElementById('secondNumber')
let num3 = document.getElementById('thirdNumber')


let htmlSum = document.getElementById('sum');
let htmlAvg = document.getElementById('avg');

const button = document.querySelector('button');
let sum = 0;
let count = 0;

let final;


button.addEventListener('click', function (e) {



  let details = {
    firstNumber: num1.value,
    secondNumber: num2.value,
    thirdNumber: num3.value,
  }

  console.log(details);


  if (details.firstNumber) {
    sum += +(details.firstNumber)
    count++;
  }

  if (details.secondNumber) {
    sum += +(details.secondNumber);
    count++;
  }

  if (details.thirdNumber) {
    sum += +(details.thirdNumber);
    count++;
  }

  final = sum / count;

  htmlSum.innerHTML = sum;
  htmlAvg.innerHTML = final;

  num1.value = "";
  num2.value = "";
  num3.value = "";

  sum = 0;
  count = 0;
})