// Union type

type Comineable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Comineable,
  input2: Comineable,
  resultConversion: ConversionDescriptor
) {
  let result: Comineable;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  )
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();

  if (resultConversion === "as-number") {
    return +result;
  } else return result.toString();
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Bas", "Je", "as-number");
console.log(combinedNames);
