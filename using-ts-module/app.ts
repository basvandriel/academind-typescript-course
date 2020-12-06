console.log("Starting up!");

function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }

  const result = n1 + n2;

  return printResult ? console.log(phrase + result) : result;
}

const number1 = 5;
const number2 = 2.8;

const printResult = true;
const phrase = "Result is : ";

const result = add(number1, number2, printResult, phrase);

console.log(result);
