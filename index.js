const fs = require('fs')
const existingData = require('./TESTAMENTS/OLD-TESTAMENT.json')

const nameOfBook = process.argv[2]
const totalOfVerse = (parseInt(process.argv[3]) + 1)

function showVerses (arrayOfStrings) {
  arrayOfStrings.forEach(element => {
    existingData.push(element)
  })

  fs.writeFile('./TESTAMENTS/OLD-TESTAMENT.json', JSON.stringify(existingData), (err) => {
    console.log(err)
  })
  console.log(`${nameOfBook} done`)
}

function loopString (nameOfBook, totalOfVerse) {
  const arrayOfStrings = []

  for (let index = 1; index < totalOfVerse; index++) {
    arrayOfStrings.push({
      verse: `${nameOfBook} ${index}`,
      book: `${nameOfBook}`,
      verseNumber: `${index}`
    })
  }

  showVerses(arrayOfStrings)
}

loopString(nameOfBook, totalOfVerse)
