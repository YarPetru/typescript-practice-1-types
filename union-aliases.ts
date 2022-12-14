type Combinable = number | string;
type ConvertionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConvertion: ConvertionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConvertion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultType === "as-number") {
  //   return +result; // == parseFloat(result)
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "20", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Shmax", "as-text");
console.log(combinedNames);
