
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Selection of characters that can be used to create password
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = '0123456789';
// Empty variable for characters
var passwordCharacters = "";



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  if (lowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
    console.log(passwordCharacters);
    }
    if (upperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase);
    }
    if (specialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
    if (numbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
    }
    console.log(passwordCharacters);
    // return passwordCharacters;
    getPassword();
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Asking for the length of password
const generatePassword = () => {
  var newPassword = "";




  var passwordLength = prompt('How many characters would you like to include in the password?');
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return (generatePassword());

    // Asking for characters to use in password
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCase = confirm("Would you like to include lowercase letters?");
    var upperCase = confirm("Would you like to include uppercase letters?");
    var specialCharacters = confirm("Would you like to include special characters?");
    var numbers = confirm("Would you like to include numbers?");
  } 
  
  // why can this not be an else if statement???
  if (
    !lowerCase &&
    !upperCase &&
    !specialCharacters &&
    !numbers) {
      alert("You must select some characters!");
      return (generatePassword());
    };
}  

  




// create for loop to choose password characters
function getPassword (passwordCharacters) {
  console.log(passwordCharacters);
for (var i = 0; i <= passwordLength; i++) {

  newPassword += passwordCharacters.forEach(Math.floor(Math.random() * Math.floor(value.length -1)));
  return newPassword;
  }
}
// add password to display area

// document.getElementById("#password").value = newPassword;
// console.log(password);






// // writePassword();
