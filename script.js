
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Selection of characters that can be used to create password
// let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
// let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let specialCharacters = new Array(" !#$%&'()*+,-./:;<=>?@[]^_`{|}~");
// // Empty variable for characters
// var passwordCharacters = [];


// // Write password to the #password input
// const writePassword = () => {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// // Empty array for new generated password
// var newPassword = [];


// // Asking for the length of password
// function generatePassword() {
//   var passwordLength = prompt('How many characters would you like to include in the password?');
//   if (passwordLength < 8 || passwordLength > 128) {
//     alert("Password must be between 8 and 128 characters");
//     return generatePassword();

//     // Asking for characters to use in password
//   } else if (passwordLength >= 8 && passwordLength <= 128) {
//     var lCase = confirm("Would you like to include lowercase letters?");
//     var upCase = confirm("Would you like to include uppercase letters?");
//     var spCharacters = confirm("Would you like to include special characters?");
//     var nums = confirm("Would you like to include numbers?");
//   }
//   // If user cancels out of all options this alert will generate
//   if (
//     !lCase &&
//     !upCase &&
//     !spCharacters &&
//     !nums) {
//     alert("You must select some characters!");
//     return (generatePassword());
//   }

//   // adding character selection to passwordCharacters variable
//   if (lCase) {
//     passwordCharacters = passwordCharacters.concat(lowerCase);
//     newPassword.push(lowerCase);
//   }
//   if (upCase) {
//     passwordCharacters = passwordCharacters.concat(upperCase);
//     newPassword.push(upperCase);
//   }
//   if (spCharacters) {
//     passwordCharacters = passwordCharacters.concat(specialCharacters);
//     newPassword.push(specialCharacters);
//   }
//   if (nums) {
//     passwordCharacters = passwordCharacters.concat(numbers);
//     newPassword.push(numbers);
//   }
//   console.log(passwordCharacters);


//   for (var i = 0; i < passwordLength; i++) {
//     newPassword.push.passwordCharacters[Math.floor(Math.random() * passwordLength.length)];
//   }
//   console.log(newPassword);
//   return newPassword;
// }





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Selection of characters that can be used to create password
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// Empty variable for characters
var passwordCharacters = "";


// Write password to the #password input
const writePassword = () => {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Empty array for new generated password
var newPassword = "";


// Asking for the length of password
function generatePassword() {
  var passwordLength = prompt('How many characters would you like to include in the password?');
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return generatePassword();

    // Asking for characters to use in password
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var lCase = confirm("Would you like to include lowercase letters?");
    var upCase = confirm("Would you like to include uppercase letters?");
    var spCharacters = confirm("Would you like to include special characters?");
    var nums = confirm("Would you like to include numbers?");
  }
  // If user cancels out of all options this alert will generate
  if (
    !lCase &&
    !upCase &&
    !spCharacters &&
    !nums) {
    alert("You must select some characters!");
    return (generatePassword());
  }

  // adding character selection to passwordCharacters variable
  if (lCase) {
    passwordCharacters = passwordCharacters + lowerCase;
    newPassword += (lowerCase);
  }
  if (upCase) {
    passwordCharacters = passwordCharacters + upperCase;
    newPassword += (upperCase);
  }
  if (spCharacters) {
    passwordCharacters = passwordCharacters + specialCharacters;
    newPassword += (specialCharacters);
  }
  if (nums) {
    passwordCharacters = passwordCharacters + numbers;
    newPassword += (numbers);
  }
  console.log(passwordCharacters);


  for (var i = 0; i < passwordLength; i++) {
    newPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    return passwordCharacters;
  }
}
console.log(newPassword);





