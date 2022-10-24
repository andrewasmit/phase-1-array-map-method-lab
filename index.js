const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(str=>{
    const splitStr = str.split(' ')
    const capStr = capitalizeWords(splitStr);
    return capStr;
  })
}

// What I need to do
// #1 Split each element of the original array into its own wordArray
// #2 Capitalize the first letter of each element in wordArray
// #3 join() the wordArray back into a single element of the original array
// #4 Iterate that whole process through thre original array
// #5 Return the array w/ capitalized first letters

const intro = 'hi. my name is andrew.';
const splitIntro = intro.split(' ');


function capitalizeWords(array) {
  let capArrElm= array.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  }); console.log(capArrElm);
 return capArrElm.join(' ');
}


function iterateOut(array){
  for (str of array){
      str.map(capitalizeWords);
  }
}

// iterateOut(tutorials);
console.log(capitalizeWords(splitIntro));
let test =capitalizeWords(splitIntro)

iterateOut(splitIntro);