var fetchButton = document.getElementById('fetch-button');
var exerciseList = document.querySelector('h6');
var exerciseListSearch = document.getElementById('searchResults');


var muscle = 'biceps'

//fetch request using data from dropdowns when search button is pressed
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': '7DGececzTtM8jvX/CMqceA==aWqKYpkbiPlSIPUq'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
}).then(function (result) {
  for (var i = 0; i < result.length; i++) {
    // Creating elements, tablerow, tabledata, and anchor
    var createExerciseBtn = document.createElement('button');
    var exerciseData = document.createElement('div');

  
    // Setting the text of link and the href of the link
    exerciseData.textContent = result[i].name + '|' + result[i].difficulty;
  
    // Appending the link to the tabledata and then appending the tabledata to the tablerow
    // The tablerow then gets appended to the tablebody
    createExerciseBtn.appendChild(exerciseData);
   exerciseListSearch.appendChild(createExerciseBtn);}
   
});






