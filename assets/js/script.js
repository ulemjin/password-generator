// Defining global variables
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];
var main = [];
var answer = [];
var confirmMsg = [];
var charLength = 0;

// Ask user's input for their desired length of password
var confirmLength = function () {
  while (charLength === 0) {
    charLength = prompt("How many characters in your password? Please enter a number between 8 and 128:");
    if (charLength >= 8 && charLength <= 128) {
      alert("Great! You chose " + charLength + " characters in your password.");
      break;
    }
    alert("Oops! You have to pick a valid number. Please try again.");
    charLength = 0;
  }
  confirmCriteria();
};

// Ask user's input on what criteria their password should fulfill
var confirmCriteria = function () {
  var confirmUpCase = confirm("Would you like -uppercase- letters in your password?");
  if (confirmUpCase) {
    main.push(upCase);
    confirmMsg.push("uppercase letters");
  };

  var confirmLowCase = confirm("Would you like -lowercase- letters in your password?");
  if (confirmLowCase) {
    main.push(lowCase);
    confirmMsg.push("lowercase letters");
  };

  var confirmNumbers = confirm("Would you like -numbers- in your password?");
  if (confirmNumbers) {
    main.push(numbers);
    confirmMsg.push("numbers");
  };

  var confirmSpecialChar = confirm("Would you like -special characters- in your password?");
  if (confirmSpecialChar) {
    main.push(specialChar);
    confirmMsg.push("special characters");
  }

  // Validate user's choices for password criteria
  if (confirmMsg.length === 0) {
    alert("Oops! You have to pick at least one character type! Please try again");
    confirmCriteria();
  } else if (confirmMsg.length === 1) {
    alert("For your password you chose " + confirmMsg + ".");
  } else if (confirmMsg.length === 2) {
    alert("For your password you chose " + confirmMsg[0] + " and " + confirmMsg[1] + ".");
  } else if (confirmMsg.length === 3) {
    alert("For your password you chose " + confirmMsg[0] + ", " + confirmMsg[1] + " and " + confirmMsg[2] + ".");
  } else {
    alert("For your password you chose all of the criteria: uppercase, lowercase, numbers and special characters.");
  }
};

// Generate user's password based on desired length and criteria using Math.random()
var generatePassword = function () {
  confirmLength();
  main = main.flat();

  for (i = 0; i < charLength; i++) {
    var random = Math.floor(Math.random() * main.length);
    answer.push(main[random]);
  }
  return password = answer.join('');
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  alert("Your new password is '" + password + "'.");

  // reset values, so user can generate new password without refreshing the page
  charLength = 0;
  main = [];
  answer = [];
  confirmMsg = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
