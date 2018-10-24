var args = process.argv.slice(2);

// function takes a string, joins the words of the string and sets all characters
// to lower case, returns an object with individual characters in the given string
// set as keys, and the key values set as the indices of each character
// in the entire string.
function countLetters(string) {
  string = string.join('').toLowerCase();
  var charCount = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (charCount[letter]) {
     charCount[letter].push(i);
    } else {
      charCount[letter] = [i];
    }
  }
  return charCount;

};

console.log(countLetters(args));
