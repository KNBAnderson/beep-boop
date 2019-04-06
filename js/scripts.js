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

// function reverseReplaceNumbers(array, name) {
//   var newArray = [];
//   debugger;
//   for (let i = array.length - 1; i <= 0; i--) {
//     if (array[i] % 3 === 0 && array[i] !== '0') {
//       newArray.push("I'm sorry " + name + ". I'm afraid I can't do that<br>")
//       debugger;
//     } else if (array[i].includes('3')) {
//       debugger;
//       newArray.push("I'm sorry Dave. I'm afraid I can't do that.<br>")
//     } else if (array[i].includes('2')) {
//       debugger;
//       newArray.push('Boop!<br>');
//     } else if (array[i].includes('1')) {
//       debugger;
//       newArray.push('Beep!<br>');
//     } else {
//       debugger;
//       newArray.push(array[i] + '<br>');
//     }
//   }
//   debugger;
//   console.log(newArray);
//   return newArray.join('');
// }


// console.log(reverseReplaceNumbers(createNumberedArray(15), 'Matt'));

//User Interface
$(function() {

  $('h1').hover(function() {
    $(this).fadeIn(300).html('<h1>Beep Boop</h1>');
  }, function() {
    $(this).html('<h1>01000010 01100101 01100101 01110000 00100000 01000010 01101111 01101111 01110000</h1>');
  });

  $('form').submit(function(e) {
    var number = parseInt($('#number').val());
    var name = $('#name').val();
    var result = replaceNumbers(createNumberedArray(number), name);
    e.preventDefault();
    if (name !== '') {
      $('span#dave').text(name);
    }
    $('#results').show().html('<p>' + result + "</p>")
    $('body').append('<button type=\"button\" id=\"reverse\" name=\"reverse\">Put that Beep down, Boop it, and reverse it</button>')
  });


  $('#reverse').click(function() {
    var number = parseInt($('#number').val());
    var name = $('#name').val();
    var result = replaceNumbers(createNumberedArray(number), name);
    var reversed = result.split('<br>').reverse().join('<br>');
    console.log('thing');
    $('#results').show().html('<p>' + reversed + "</p>");
  })
});
