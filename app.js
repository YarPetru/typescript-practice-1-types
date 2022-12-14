var userInput;
var userName;
userInput = 5;
userInput = "shmax";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
    //while (true) {} // -- or for other infinite loops use NEVER type (means never return anything)
}
generateError("What are you doing???", 1231299890234);
