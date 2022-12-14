function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input");
  // } ------- выбрасывается на этапе runtime, ТС же позволяет увидеть ошибки на этапе разработки и избежать рантайм ошибок

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 7.3;
const number2 = 6;
const printResult = true;
let resultPhrase = "Result is: ";

let result = add(number1, number2, printResult, resultPhrase);
console.log(result);
