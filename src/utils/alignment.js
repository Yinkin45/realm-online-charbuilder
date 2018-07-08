
function alignmentNumberToText (value) {
  if (value > 0) {
    return 'Good'
  }
  if (value < 0) {
    return 'Evil'
  }
  return 'Neutral'
}

function alignmentTextToNumber (alignment) {
  const lowercaseAlignment = alignment.toLowerCase()

  switch (lowercaseAlignment) {
    case 'good': return 1
    case 'neutral': return 0
    case 'evil': return -1
  }
  return null
}

module.exports.alignmentNumberToText = alignmentNumberToText
module.exports.alignmentTextToNumber = alignmentTextToNumber
