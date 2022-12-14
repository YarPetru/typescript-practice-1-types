let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "shmax";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code };
  //while (true) {} // -- or for other infinite loops use NEVER type (means never return anything)
}

generateError("What are you doing???", 1231299890234);
