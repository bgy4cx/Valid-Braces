function validBraces(braces){
  if (typeof braces == 'string') {
    return true;
  } else {
    return false;
  }
}

module.exports = validBraces;