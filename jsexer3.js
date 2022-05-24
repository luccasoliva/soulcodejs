let bin = prompt("Digite o número binário que será convertido em decimal:")

let dec = bin
.split('')
.reverse()
.map(x => parseInt(x))
.map((bin, i) => bin == 1 ? 2 ** i : 0 )
.reduce((x, y) => x + y)

alert(`O número binário é: ${bin} | Convertido em decimal fica: ${dec}`)

