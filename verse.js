const VB5 = require('./TESTAMENTS/VB5-OLD.json')
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
      let currentBook = object.find(currentObject => currentObject.book == key)

      fullString.push(`${key} ${currentBook.verseNumber}${bookString[key] == 1 ? `` : (currentBook.verseNumber == bookString[key] ? `` : `-${bookString[key][0]}`)}`)
    }
  }

  return totalString = {
    ...totalString,
    [moment().set({'year': 2019, 'month': 6, 'date': 28}).add(index, 'days').format('DD-MM-YYYY')]: (fullString.join(', '))
  }
}

VB5.forEach((verse, index) => {
  loopArray(verse, index)
})

console.log(totalString)
