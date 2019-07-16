const VB5 = require('./TESTAMENTS/VB5-NEW.json')
const moment = require('moment')

let totalString = {}

function loopArray (object, index) {
  let bookString = {}
  let fullString = []

  object.forEach(eachArray => {
    bookString = { ...bookString, [eachArray.book]: [eachArray.verseNumber] }
  })

  for (let key in bookString) {
    if (bookString.hasOwnProperty(key)) {
      let currentBook = object.filter(currentObject => currentObject.book == key)[0]

      fullString.push(`${key} ${currentBook.verseNumber}${bookString[key] == 1 ? `` : `-${bookString[key]}`}`)
    }
  }

  return totalString = {
    ...totalString,
    [moment().add(index, 'days').format('DD-MM-YYYY')]: (fullString.join(', '))
  }
}

VB5.forEach((verse, index) => {
  loopArray(verse, index)
})

console.log(totalString)
