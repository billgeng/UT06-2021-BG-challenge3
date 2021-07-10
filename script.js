// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabetChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabetChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = '0123456789';
var specialChar = " !@#$%^&*()?~/|:'><";
var pSelection = "";
//user choose the length of password
var lengthIP = prompt("How long is your Password you need ? Please choose between 8 to 128 Characters"); 

if (lengthIP < 8 || lengthIP >128 ) {
    window.alert ("Length should be between 8 to 128. Please Try Again");
    return ;
} 

 var LowerCheck = confirm ("Do you want Lowercase characters ?");
 var UpperCheck = confirm ("Do you want Uppercase characters ?");
 var NumberCheck = confirm ("Do you want Numberical characters ?");
 var SpecialCheck = confirm ("Do you want Special characters ?");

 if (LowerCheck ==='false' && UpperCheck ==='false' && NumberCheck ==='false' && SpecialCheck ==='false') {
     window.alert ("Please choose at least one type of character. Try again");
     return;
 } else if (LowerCheck && !UpperCheck && !NumberCheck && !SpecialCheck)
     {pSelection = lowercaseAlphabetChar;
     generatePassword();
     }else if (LowerCheck && UpperCheck && !NumberCheck && !SpecialCheck) {
         pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar;
         generatePassword();
     }
     else if (LowerCheck && UpperCheck && NumberCheck && !SpecialCheck) {
         pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar + numericChar;
         generatePassword ();
     } else if (LowerCheck && UpperCheck && NumberCheck && SpecialCheck) {
         pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar + numericChar + specialChar;
         generatePassword();
     } else if (!LowerCheck && UpperCheck && !NumberCheck && !SpecialCheck) {
         pSelection = uppercaseAlphabetChar;
         generatePassword();
    } else if (!LowerCheck && !UpperCheck && NumberCheck && !SpecialCheck) {
         pSelection = numericChar ;
         generatePassword();
    } else if (!LowerCheck && !UpperCheck && !NumberCheck && SpecialCheck) {
        pSelection = specialChar ;
        generatePassword();
   } else if (!LowerCheck && !UpperCheck && NumberCheck && SpecialCheck) {
    pSelection = numericChar + specialChar ;
    generatePassword();
} else if ( LowerCheck && !UpperCheck && NumberCheck && !SpecialCheck) {
    pSelection = lowercaseAlphabetChar + numericChar ;
    generatePassword();
} else if (!LowerCheck && UpperCheck && NumberCheck && !SpecialCheck) {
    pSelection = uppercaseAlphabetChar + numericChar ;
    generatePassword();
} else if (!LowerCheck && UpperCheck && !NumberCheck && SpecialCheck) {
    pSelection = uppercaseAlphabetChar + specialChar ;
    generatePassword();
} else if ( LowerCheck && !UpperCheck && !NumberCheck && SpecialCheck) {
    pSelection = lowercaseAlphabetChar + specialChar ;
    generatePassword();
} 
                                                                        
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 
  function generatePassword () {
    for (var l = 0; l <= lengthIP ; l ++) {
        password += string.pSelection(Math.floor(Math.random()* pSelection.length));
    } 


 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
window.alert ('password') ;
