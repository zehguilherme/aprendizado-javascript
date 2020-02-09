let num = [15, 57, 658]

// for(let i = 0; i <= num.length; i++) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
// }

for (let i in num) {  //para cada posição no vetor num
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

let i = num.indexOf(57)
console.log(`O valor 57 está na posição ${i}`)
