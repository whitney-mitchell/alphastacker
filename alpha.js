// Create a stackLetters function that should console.log rows of letters. It should take an array
// containing the letters of the alphabet and output them like this:
// a
// ab
// abc
// abcd
// abcde
// abcdef
// etc

// Then add logic to stackLetters that places a space after every fifth letter, like this:
// a
// ab
// abd
// abcd
// abcde
// abcde f
// etc

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var stack = [];

function stackLetters() {
	for (var i = 0; i < alpha.length; i++) {
		if /*(i === 0) {
			stack = "a";
		} else if*/(i % 5 === 0) {
			stack+= " " +alpha[i];
		} else {
		stack = stack + alpha[i];
		console.log(stack);
		}
	}
};
stackLetters();
// Still gives undefined as last line. before adding the every 5 char stmt.
// Where's z? Why no a??








// Jessica's answer-- diff take:
// function stackLetters(){
//   for (var i = 1; i < alphabetLetters.length; i++) {
//     if(i % 5 === 0){
//       stacker.push(alphabetLetters[i], " ");
//       console.log(stacker.join(""));
//     } else {
//       stacker.push(alphabetLetters[i]);
//       console.log(stacker.join(""));
//     }
//   }
// }

// stackLetters();
