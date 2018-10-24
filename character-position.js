var args = process.argv.slice(2);

// function takes a string, joins the words of the string and sets all characters
// to lower case, returns an object with individual characters in the given string
// set as keys, and the key values set as how many instances that character
// appears in the entire string.
function countLetters(string) {
  string = string.join('').toLowerCase();
  var charCount = {};
  charCount[string[0]] = 1;
  var key = string[0];
  for (var i = 1; i < string.length; i++) {
    var letter = string[i];
    if (key.includes(letter)) {
     charCount[letter]++;
    } else {
      charCount[letter] = 1;
      key += letter;
    }
  }
  return charCount;

};

console.log(countLetters(args));
