function logger(name) {
  console.log(`My name is ${name}`);
}

const myName = "Aaron";

logger(myName);

function addTwoNumbers(firstNumber, secondNumber) {
  const mathProblemResult = `${firstNumber} + ${secondNumber} = ${
    firstNumber + secondNumber
  }`;
  return mathProblemResult;
}

console.log(addTwoNumbers(10, 10));

const tenPlusTen = addTwoNumbers(10, 10);
console.log(tenPlusTen);

const num = Number("10");
