
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Selection of characters that can be used to create password
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = '0123456789';
var passwordCharacters = "";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Asking for the length of password
const generatePassword = () => {
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

  if (lowerCase === true) {
    passwordCharacters = passwordCharacters + lowerCase;
  }

  if (upperCase === true) {
    passwordCharacters = passwordCharacters + upperCase;
  }
  
  if (specialCharacters === true) {
    passwordCharacters = passwordCharacters + specialCharacters;
  }

  if (numbers === true) {
    passwordCharacters = passwordCharacters + numbers;
  }


// create for loop to choose password characters

for (var i = 0; i <= passwordLength; i++) {
  password = passwordCharacters.forEach(Math.floor(Math.random() * Math.floor(value.length -1)));
  return password;
}

// add password to display area

document.getElementById("password").value = password;


}



// writePassword();
