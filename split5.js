const file = require('./TESTAMENTS/OLD-TESTAMENT.json')

function chunkArray (array, sizeOfTheChunkedArray) {
  const chunked = []

  for (let element of array) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === sizeOfTheChunkedArray) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }
  return chunked
}

console.log(JSON.stringify(chunkArray(file, 5)))
