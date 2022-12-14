function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // use void type for functions that return nothing;
  console.log("Result: " + num);
}

printResult(add(20, 30));

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const res = n1 + n2;
  callback(res);
}

// --------

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

console.log(
  addAndHandle(2, 4, (res) => {
    console.log(res);
  })
);
