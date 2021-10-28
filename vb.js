function validBraces(braces){
  return ((typeof braces == 'string') && !(braces == ''))
}

module.exports = validBraces;