//Business Logic
function createNumberedArray (number) {
  var numberedArray = [];
  for (let i =0; i <= number; i++) {
    numberedArray.push(i.toString());
  }
  return numberedArray;
}

function replaceNumbers (array, name) {
  var newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 3 === 0 && array[i] !== '0') {
      newArray.push("I'm sorry " + name + ". I'm afraid I can't do that<br>")
    } else if (array[i].includes('3')) {
      newArray.push("I'm sorry Dave. I'm afraid I can't do that.<br>")
    } else if (array[i].includes('2')) {
      newArray.push('Boop!<br>');
    } else if (array[i].includes('1')) {
      newArray.push('Beep!<br>');
    } else {
      newArray.push(array[i] + '<br>');
    }
  }
  return newArray.join('');
}



//User Interface
$(function() {
  // $('h1').hover(function() {
  //   $(this).fadeIn().text('Beep Boop');
  // }, function() {
  //   $(this).remove();
  // });

  $('form').submit(function(e) {
    e.preventDefault();
    var number = parseInt($('#number').val());
    var name = $('#name').val();
    var result = replaceNumbers(createNumberedArray(number), name);
    $('#results').html('<p>' + result + "</p>")
  })
});
