
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = '0123456789';




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const generatePassword = () => {
  var passwordLength = prompt('How many characters would you like to include in the password?');
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return (generatePassword());
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCase = confirm("Would you like to include lowercase letters?");
  } else if (lowerCase) {
    password = password + lowerCase;
  } var upperCase = confirm('Would you like to include uppercase letters?'); 
  
}
