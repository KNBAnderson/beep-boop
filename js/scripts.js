//Business Logic
function createNumberedArray (number) {
  var numberedArray = [];
  for (let i =0; i < number; i++) {
    numberedArray.push(i.toString());
  }
  console.log(numberedArray);
  return numberedArray;
}

createNumberedArray(25);

function replaceNumbers (array) {
  var newArray = [];

  return newArray;
}

function replaceNames (array) {
  var newArray = [];

  return newArray;
}

//User Interface
$(function() {
  $('#number').on('input', function() {
    var number = parseInt($('#number').val());
  })
});
