var arrayNum = []

let qtdNum = prompt("Digite a quantidade de números")

for (let i = 0; i < qtdNum; i++) {
     arrayNum[i] = prompt(`Digite o número ${i+1}`)
    
}
 
let number = arrayNum.map(str => {
  return Number(str)
});

let sum = number.reduce(function(a, b) { return a + b }, 0)
let avrg = number.reduce(function(a, b) { return a + b / qtdNum; }, 0) 
let sqrt = number.map(Math.sqrt)
var elev = number.map(function(num) {
  return num ** 2
});

alert(`A soma dos números é: ${sum}`)
alert(`A média desses números é ${avrg}`)
alert(`A raiz quadrada de cada elemento é: ${sqrt}`)
alert(`Os números elevados a 2 são: ${elev}`)