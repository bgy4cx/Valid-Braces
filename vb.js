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
    let output = true;
    let expectedBraces = [];
    if (braces.length % 2 == 0) {
      braces.split("").forEach(function(ch){
        switch(ch) {
          case '(':
            expectedBraces.push(')');
            break;
          case '{':
            expectedBraces.push('}');
            break;
          case '[':
            expectedBraces.push(']');
            break;
          default:
            if (expectedBraces[expectedBraces.length - 1] != ch) {
              output = false;
            } else {
              expectedBraces.pop();
            }
        }
      })
    } else {
      output = false;
    }
    if (expectedBraces.length > 0) {output = false;}
    return output; 
  }  
} 

module.exports = {validBraces, guardians};