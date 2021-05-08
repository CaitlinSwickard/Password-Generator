
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Selection of characters that can be used to create password
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// Empty string for characters
var passwordCharacters = "";


// Write password to the #password input
const writePassword = () => {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Asking for the length of password
function generatePassword() {
  // Empty string for new generated password
  var newPassword = "";
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
  }
  if (upCase) {
    passwordCharacters = passwordCharacters + upperCase;
  }
  if (spCharacters) {
    passwordCharacters = passwordCharacters + specialCharacters;
  }
  if (nums) {
    passwordCharacters = passwordCharacters + numbers;
  }
  console.log(passwordCharacters);


  for (var i = 0; i < passwordLength; i++) {
    newPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  // Display new created password
  return newPassword;
}






