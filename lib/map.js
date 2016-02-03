module.exports = {
	map: function (testFunction, arrayToTest) {
  	var mapped = [];
  	for (var i = 0; i < arrayToTest.length; i++) {
    mapped.push(testFunction(arrayToTest[i]));
  }
  return mapped;
 }
}
 
