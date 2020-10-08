export default decodeString

function decodeString (string) {
  const toBeChanged = { '%3A': ':', '%20': ' ' }
  for (var x in toBeChanged) {
    string = string.replace(new RegExp(x, 'g'), toBeChanged[x])
  }
  return string
}
