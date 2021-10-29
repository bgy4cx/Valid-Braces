function guardians(braces) {
  let counter = 0;
  ['(', ')', '[', ']', '{', '}'].forEach(function CharChecker(a) {
    ("" + braces).split("").forEach(function CharValidate(b){
      if (a == b) {
        counter++  
      }
    } )
  })
  return ((typeof braces == 'string') && !(braces == '') && (counter == braces.length));
}

function validBraces(braces){ 
  if (guardians(braces)) {

  }  
} 

module.exports = {validBraces, guardians};