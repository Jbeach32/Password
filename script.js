var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var length = prompt("Please enter your desired password length (between 8 and 128 characters):");
    if (length === null || length === "" || isNaN(length)) {
        alert ("Invalid length, please try again");
        return "";
    }


length = parseInt(length, 10);

if (length < 8 || length > 128) {
    alert("Invalid length, please try again");
    return "";
}

var uppercase = confirm("Do you want to include uppercase letters?");
var lowercase = confirm("Do you want to include lowercase letters?");
var numeric = confirm("Do you want to include numeric characters?");
var special = confirm("Do you want to include special characters?");

if (!uppercase && !lowercase && !numeric && !special) {
    alert("Please select at least one password type");
    return "";
}

var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerC = "abcdefghijklmnopqrstuvwxyz";
var numericC = "01234567890";
var specialC = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var all = "";

if (uppercase) {
    all += upperC;
}

if (lowercase) {
    all += lowerC;
}

if (numeric) {
    all += numericC;
}

if (special) {
    all += specialC;
}

var password = "";

for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * all.length);
    password += all[randomIndex];
}

return password;

}
