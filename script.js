
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Selection of characters that can be used to create password
let lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
let upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ];
let specialCharacters = new Array(" !#$%&'()*+,-./:;<=>?@[]^_`{|}~");
// Empty variable for characters
var passwordCharacters = [];


// Write password to the #password input
const writePassword = () => {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Empty array for new generated password
var newPassword = [];


// Asking for the length of password
function generatePassword (passwordLength) {
  var passwordLength = prompt('How many characters would you like to include in the password?');
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return generatePassword();

    // Asking for characters to use in password
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCase = confirm("Would you like to include lowercase letters?");
    var upperCase = confirm("Would you like to include uppercase letters?");
    var specialCharacters = confirm("Would you like to include special characters?");
    var numbers = confirm("Would you like to include numbers?");
    // return passwordLength;
  } 
  // If user cancels out of all options this alert will generate
  if (
    !lowerCase &&
    !upperCase &&
    !specialCharacters &&
    !numbers) {
      alert("You must select some characters!");
      return (generatePassword());
    }

// adding character selection to passwordCharacters variable
    if (lowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase);
      newPassword += charAt(lowerCase);
      }
      if (upperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase);
      newPassword += charAt(upperCase);
      }
      if (specialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
      newPassword += charAt(specialCharacters);
      }
      if (numbers) {
      passwordCharacters = passwordCharacters.concat(numbers);
      newPassword += charAt(numbers);
      }
      console.log(passwordCharacters);
      return passwordCharacters;
}
 

  for (var i = 0; i < passwordLength; i++) {
    newPassword.push(passwordCharacters.charAt(Math.floor(Math.random () * passwordLength)));
    console.log(makePassword);
  }





// function getPassword (passwordCharacters) {
//   console.log(passwordCharacters);
for (var i = 0; i <= passwordLength; i++) {
  newPassword += passwordCharacters.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
  // return newPassword;
  }




// add password to display area
document.getElementById("#password").value = newPassword;
console.log(password);



