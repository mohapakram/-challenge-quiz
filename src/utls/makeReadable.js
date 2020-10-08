export default makeReadable

function makeReadable (string) {
  const toBeChanged = { '%3a': ':', '%20': ' ' }
  for (var x in toBeChanged) {
    string = string.replace(new RegExp(x, 'g'), toBeChanged[x])
  }
  return string
}
