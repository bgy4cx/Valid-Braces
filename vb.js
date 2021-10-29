function guardians(braces) {
  return ((typeof braces == 'string') && !(braces == ''));
}

function validBraces(braces){ 
  if (guardians(braces)) {
    let counter = 0;
    ['(', ')', '[', ']', '{', '}'].forEach(function CharChecker(a) {
      braces.split("").forEach(function CharValidate(b){
        if (a == b) {
          counter++  
        }
      } )
    })
    if (counter == braces.length) {
      return true;
    } else {
      return false;
    }
  }  
} 

module.exports = {validBraces, guardians};