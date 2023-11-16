  function findOutlier(integers: number[]) {
    let odd = 0
    let even = 0
    let onlyOddOrEven = 0
    integers.forEach(number => {
      if(number % 2 === 0){
        if(even !== 0)onlyOddOrEven = odd
        even = number
     }else{
        if(odd !== 0) onlyOddOrEven = even
        odd = number
    }
  })

  return onlyOddOrEven
  }

  console.log(findOutlier([1, 2, 3]))
 
  // function squareDigits(num: number) {
  //   const number = num.toString().split('')
  //   .map(number => parseInt(number, 10) * parseInt(number, 10))
  //   .join('')
  //   return parseInt(number, 10)
  // }

  // console.log(squareDigits(765))

// function reverseWords(str: string): string {
//   const subArrays: Array<string[]> = [];
//   let actualWord: string[] = [];

//   const arr: string[] = str.split("")
  
//   for (let letter of arr) {
//     if (letter !== " ") {
//       actualWord.push(letter);
//     } else {
//       subArrays.push(actualWord);
//       subArrays.push([" "]);
//       actualWord = [];
//     }
//   }

//   subArrays.push(actualWord)

//   subArrays.forEach((value, index) => {
//     subArrays[index] = value.reverse()
//   })

//   const finallyWord = subArrays.flat().join(" ")

//   console.log(finallyWord)

//   return "Go for it";
// }

// console.log(reverseWords("Hola  mundo "))

// const reverse = (x: string) => x.split('').reverse().join('')

// const reverseWords = (str: string) => str.split(' ').map(reverse).join(' ')

// console.log(reverseWords("Hola  Mundo"))
