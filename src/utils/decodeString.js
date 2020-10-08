export default decodeString

function decodeString (string) {
  return decodeURI(string).replace('%3A', ':').replace('%3F', '?')
}
