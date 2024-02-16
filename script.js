// Array of special characters to be included in password
const specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  
  // Array of numeric characters to be included in password
  const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // Array of lowercase characters to be included in password
  const lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  // Array of uppercase characters to be included in password
  const upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // Function to prompt user for password options
function getPasswordOptions() {
    var length = prompt("Select a password length between 8-128 characters?");
  
    if (length >= 8 && length <= 128) {
      var includeSpecialChar = confirm("Include special characters?");
      var includeNumericCharacters = confirm("Include numeric characters?");
      var includeLowerCasedCharacters = confirm("Include lowercase letters?");
      var includeUpperCasedCharacters = confirm("Include UPPERCASE letters?");
      let userChoiceArray = [];

    if (includeNumericCharacters === true) {
      userChoiceArray = userChoiceArray.concat(numericCharacters);
    }

    if (includeSpecialChar === true) {
      userChoiceArray = userChoiceArray.concat(specialCharacters);
    }

    if (includeLowerCasedCharacters === true) {
      userChoiceArray = userChoiceArray.concat(lowerCasedCharacters);
    }

    if (includeUpperCasedCharacters === true) {
      userChoiceArray = userChoiceArray.concat(upperCasedCharacters);
    }
  
    return {
      userChoiceArray: userChoiceArray,
      length: length
    }
    
  } else {
    alert("Please enter password between 8 and 128 characters");
  }
}
  
// Function for getting a random element from an array
function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
  
    return arr[randomIndex];
  }
  
  getRandom(numericCharacters);

  // Function to generate password with user input
function generatePassword() {
    var passwordObject = getPasswordOptions()
    var userChoiceArray = passwordObject.userChoiceArray
    var length = passwordObject.length
    var Password = "";
  
    for (var i = 0; i < length; i++) {
      var passwordChar = getRandom(userChoiceArray);
      Password += passwordChar;
      
    }
    return Password;
  }