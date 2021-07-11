// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const lowercaseAlphabetChar = "abcdefghijklmnopqrstuvwxyz";
const uppercaseAlphabetChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChar = "0123456789";
const specialChar = " !@#$%^&*()?~/|:'><";
var pSelection = "";
var password = "";


                                                                        
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;

  } 
    
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click",alertWindow);

// Write generatePassword function 

 function generatePassword() {
    
    var lengthIP = prompt("How long is your Password you need ? Please choose between 8 to 128 Characters"); 
    
   
    if (lengthIP >8 && lengthIP < 128 ) {

        // choose the criteria of password. 
        var LowerCheck = confirm ("Do you want Lowercase characters ?");
        var UpperCheck = confirm ("Do you want Uppercase characters ?");
        var NumberCheck = confirm ("Do you want Number characters ?");
        var SpecialCheck = confirm ("Do you want Special characters ?");



        if (!LowerCheck && !UpperCheck  && !NumberCheck && !SpecialCheck) {
            window.alert ("Please choose at least one type of character. Try again") ;
            return; 
           
        }  else if (LowerCheck && !UpperCheck && !NumberCheck && !SpecialCheck)
            {pSelection = lowercaseAlphabetChar ;
            
            
            }else if (LowerCheck && UpperCheck && !NumberCheck && !SpecialCheck) {
                pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar;
                
    
            }
            else if (LowerCheck && UpperCheck && NumberCheck && !SpecialCheck) {
                pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar + numericChar;
                
                
            } else if (!LowerCheck && UpperCheck && !NumberCheck && !SpecialCheck) {
                pSelection = uppercaseAlphabetChar;
                
           } else if (!LowerCheck && !UpperCheck && NumberCheck && !SpecialCheck) {
                pSelection = numericChar ;
                
           } else if (!LowerCheck && !UpperCheck && !NumberCheck && SpecialCheck) {
               pSelection = specialChar ;
        
          } else if (!LowerCheck && !UpperCheck && NumberCheck && SpecialCheck) {
           pSelection = numericChar + specialChar ;
           
        } else if ( LowerCheck && !UpperCheck && NumberCheck && !SpecialCheck) {
           pSelection = lowercaseAlphabetChar + numericChar ;
           
        } else if (!LowerCheck && UpperCheck && NumberCheck && !SpecialCheck) {
           pSelection = uppercaseAlphabetChar + numericChar ;
           
        } else if (!LowerCheck && UpperCheck && !NumberCheck && SpecialCheck) {
           pSelection = uppercaseAlphabetChar + specialChar ;
           
        } else if ( LowerCheck && !UpperCheck && !NumberCheck && SpecialCheck) {
           pSelection = lowercaseAlphabetChar + specialChar ;
                   
        } else {
            pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar + numericChar + specialChar;
                    
        } 
        
    } else {
        window.alert ("Length should be between 8 to 128. Please Try Again") ;
        return;
    } 
    // loop for random select
    for (var l = 0; l <= lengthIP ; l ++) {

        password += pSelection.charAt((Math.floor(Math.random()* pSelection.length-1)));
    } 

    return password;
    
}

function alertWindow () {
    window.alert (password);
}



  




