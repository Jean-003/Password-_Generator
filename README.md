<h1> Objective </h1>

This project utilised HTML and CSS powered by JavaScript to create an application that an organisation's employees could use to generate random passwords based on criteria they personally selected. The main aim was to produce an app that would run in the browser displaying a clean and polished user interface but one that was also responsive and that could adapt to multiple screen sizes.

<h2>The URL of the deployed application: </h2>

file:///C:/Users/Jean-/ClassLessons/Password_Generator/index.html

<h3>The URL of the GitHub repository that contains the code:</h3>

https://github.com/Jean-003/Password_Generator

<h2>Usage</h2>

To generate a password with a length between 8 and 128 characters (lowercase, uppercase, numeric, and special characters such as $@%&\*):

Click on the 'Generate Password' button. The user wil then be prompted to enter a number signifying the lenght of the password in the dialogue box. A series of 4 questions asking the user of what characters (lowercase, uppercase, numeric, and special characters such as $@%&\*) they would like included in the password follow. The user can click 'OK' to add character type or click 'Cancel' to exclude character type.

At the end of this, a password with the length and and characters specified by the user will be displayed above the 'Generate Password' button in the browser.

To test the responsive design of the password generator app on different screens sizes:

Open the Chrome DevTools by pressing Control+Shift+I (Windows) or Command+Option+I (macOS). This opens a console panel to the side of the webpage or below the webapage in the browser. Here, look for the devices icon to the left of the 'Elements' button. You can now manually input a specific size and check responsivenes. You can also click on the 'Dimentions' button usually located just below the website URL and choose a specific device from this button's drop down list.


![Screenshot 2024-02-17 201603](https://github.com/Jean-003/Password_Generator/assets/152238337/fc0d4963-9fe9-45e4-9df8-d7d7cc49e63a)


![Images displaying app in the browser]


![Screenshot 2024-02-16 181553](https://github.com/Jean-003/Password_Generator/assets/152238337/7d837bc9-5807-415e-9575-3fbcdbeed68b)


![Screenshot 2024-02-16 181632](https://github.com/Jean-003/Password_Generator/assets/152238337/ddae214a-1545-4499-ace4-01d00905c81d)


![Screenshot 2024-02-16 181649](https://github.com/Jean-003/Password_Generator/assets/152238337/ae702310-d2b6-43d4-bddb-b049392e4d3d)


![Screenshot 2024-02-16 181705](https://github.com/Jean-003/Password_Generator/assets/152238337/a20f9546-0d4a-4d28-843e-bfee50ca6898)


![Screenshot 2024-02-16 181729](https://github.com/Jean-003/Password_Generator/assets/152238337/490ce856-f61a-49bf-9e61-cc75725b6f08)


<h2>Licences </h2>

 None



<h2> References </h2>

The following starter code was supplied by edX:

<h3>JAVASCRIPT</h3>

// Array of special characters to be included in password
var specialCharacters = [
'@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector('#password');

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

<h3>HTML</h3>

<!DOCTYPE html>
<html lang="en-gb">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Password Generator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <header>
        <h1>Password Generator</h1>
      </header>
      <div class="card">
        <div class="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div class="card-body">
          <textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
        <div class="card-footer">
          <button id="generate" class="btn">Generate Password</button>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>

<h3>CSS</h3>

_,
_::before,
\*::after {
box-sizing: border-box;
}

html,
body,
.wrapper {
height: 100%;
margin: 0;
padding: 0;
}

body {
font-family: sans-serif;
background-color: #f9fbfd;
}

.wrapper {
padding-top: 30px;
padding-left: 20px;
padding-right: 20px;
}

header {
text-align: center;
padding: 20px;
padding-top: 0px;
color: hsl(206, 17%, 28%);
}

.card {
background-color: hsl(0, 0%, 100%);
border-radius: 5px;
border-width: 1px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
color: hsl(206, 17%, 28%);
font-size: 18px;
margin: 0 auto;
max-width: 800px;
padding: 30px 40px;
}

.card-header::after {
content: " ";
display: block;
width: 100%;
background: #e7e9eb;
height: 2px;
}

.card-body {
min-height: 100px;
}

.card-footer {
text-align: center;
}

.card-footer::before {
content: " ";
display: block;
width: 100%;
background: #e7e9eb;
height: 2px;
}

.card-footer::after {
content: " ";
display: block;
clear: both;
}

.btn {
border: none;
background-color: hsl(360, 91%, 36%);
border-radius: 25px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px
0px;
color: hsl(0, 0%, 100%);
display: inline-block;
font-size: 22px;
line-height: 22px;
margin: 16px 16px 16px 20px;
padding: 14px 34px;
text-align: center;
cursor: pointer;
}

button[disabled] {
cursor: default;
background: #c0c7cf;
}

.float-right {
float: right;
}

#password {
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
border: none;
display: block;
width: 100%;
padding-top: 15px;
padding-left: 15px;
padding-right: 15px;
padding-bottom: 85px;
font-size: 1.2rem;
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
border: 2px dashed #c0c7cf;
border-radius: 6px;
resize: none;
overflow: hidden;
}

@media (max-width: 690px) {
.btn {
font-size: 1rem;
margin: 16px 0px 0px 0px;
padding: 10px 15px;
}

#password {
font-size: 1rem;
}
}

@media (max-width: 500px) {
.btn {
font-size: 0.8rem;
}
}
