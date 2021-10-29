function guardians(braces) {
  return ((typeof braces == 'string') && !(braces == ''));
}

function validBraces(braces){ /*
  if (guardians(braces)) {
    let validatedC = false;
    for (let i = 0; i < braces.length; i++) {
      for (ValidChar of ['(', ')', '[', ']', '{', '}']) {
        if (ValidChar == braces[i]) {
          validatedC = true;
          break;
        } else {
          validatedC = false;
        }
      }
    if (!validatedC) {
      return false; 
    } else {
      return true;
    }
    }
  } */
} 

module.exports = {validBraces, guardians};