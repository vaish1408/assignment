const sentence = prompt("Enter a sentence:");
console.log("Original Sentence:", sentence);

const reversedWords = sentence.split(' ').map(function(word) {
  return word.split('').reverse().join('');
}).join(' ');

console.log("Reversed Sentence:", reversedWords);