
module.exports = { 
	filter : function (testFunction, arrayToTest) {
	 var filtered = []
	 for (var i = 0; i < arrayToTest.length; i++) {
	 if(testFunction(arrayToTest[i])) {
     filtered.push(arrayToTest[i])
    }
  }
  	return filtered;
 }
}
