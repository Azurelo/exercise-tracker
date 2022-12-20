var fetchButton = document.getElementById('fetch-button');
var exerciseList = document.querySelector('h6');
var muscle = 'biceps'
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
});




for (var i = 0; i < result.length; i++) {
    // Creating elements, tablerow, tabledata, and anchor
    var createExerciseBtn = document.createElement('button');
    var exerciseData = document.createElement('div');
    var link = document.createElement('a');

    // Setting the text of link and the href of the link
    exerciseData.textContent = data[i].name + '|' + data[i].difficulty;

    // Appending the link to the tabledata and then appending the tabledata to the tablerow
    // The tablerow then gets appended to the tablebody
    createExerciseBtn.appendChild(exerciseData);
   exerciseList.appendChild(createExerciseBtn);}
