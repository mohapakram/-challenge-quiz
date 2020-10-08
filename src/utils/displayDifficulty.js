export default displayDifficulty

function displayDifficulty (difficulty) {
  switch (difficulty) {
    case 'hard':
      return '★★★'
    case 'easy':
      return '★✰✰'
    case 'medium':
      return '★★✰'
    default:
      return ''
  }
}
