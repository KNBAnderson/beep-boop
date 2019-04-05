//Business Logic
function createNumberedArray (number) {
  var numberedArray = [];
  for (let i =0; i < number; i++) {
    numberedArray.push(i.toString());
  }
  return numberedArray;
}

console.log('95' % 3)
function replaceNumbers (array, name) {
  var newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 3 === 0 && array[i] !== '0') {
      newArray.push("I'm sorry " + name + ". I'm afraid I can't do that")
    } else if (array[i].includes('3')) {
      newArray.push("I'm sorry Dave. I'm afraid I can't do that.")
    } else if (array[i].includes('2')) {
      newArray.push('Boop!');
    } else if (array[i].includes('1')) {
      newArray.push('Beep!');
    } else {
      newArray.push(array[i]);
    }
  }
  console.log(newArray)
  return newArray;
}

replaceNumbers(createNumberedArray(25), 'Katlin');

//User Interface
$(function() {
  $('#number').on('input', function() {
    var number = parseInt($('#number').val());
  })
});
