var assert = require('./assert')
var filter = require('../lib/filter.js')
var map = require('../lib/map.js')
var data = require('../../kata-strings-numbers-modules/data/data')

function each (func, arr) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

function isNumber (thing) {
  if (typeof thing === 'number') {
    return true;}
  else {
    return false;
  }
}

function isEmail (str) {
  var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(str);
}

function countIf (testFunc, arr) {
  var numberCount = 0;
  //start counter at zero
  for (var i = 0; i < arr.length; i++) {
  //iterate through all items in the array
    var num = testFunc(arr[i])
    if (testFunc(arr[i])) {
      numberCount ++;
    //if returns true, adds one to the counter. 
    }
  }
  return numberCount;
}


// TESTS

var meaningOfLife = '42'
var expectedType = 'string'

var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // why are there 4 expected number data-types?  What are they?
var expectedStringCount = 2
var numberCount = countIf(isNumber, mixedArray)
var stringCount = countIf(function (x) { return typeof x === 'string' }, mixedArray)

assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array' )
assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')

var emails = filter(isEmail, data)
assert(emails.length, 44, 'filter and isEmail returns the correct number of emails' )

var stringsWithCommas = filter(filterStringsWithCommas, data)
assert(stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas')

var dates = filter(isDate, data)
assert(dates.length, 51, 'filter and isDate return the correct number of dates from data')

var arrayOfArrays = map(splitStringByCommas, stringsWithCommas)
var matchesArrayOfArrays = arrayOfArrays.every(function (arr, i) {
  return arr.every(function (str, j) {
    return str === expectedArrayOfArrays[i][j]
  })
})