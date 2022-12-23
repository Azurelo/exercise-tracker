var fetchButton = document.getElementById('fetch-button');
var exerciseList = document.querySelector('h6');
var exerciseListSearch = document.getElementById('group');


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
    createExerciseBtn.classList.add("button")
    var exerciseData = document.createElement('div');

  
    // Setting the text of link and the href of the link
    exerciseData.textContent = result[i].name + '|' + result[i].difficulty;
  
    // Appending the link to the tabledata and then appending the tabledata to the tablerow
    // The tablerow then gets appended to the tablebody
    createExerciseBtn.appendChild(exerciseData);
   exerciseListSearch.appendChild(createExerciseBtn);}
   
});

  // Get a reference to the dropdown elements
  const dropdown1 = document.getElementById('dropdown1');
  const dropdown2 = document.getElementById('dropdown2');
  const dropdown3 = document.getElementById('dropdown3');

  // Create variables to store the selected options
  let selectedOption1;
  let selectedOption2;
  let selectedOption3;

  // Add change event listeners to the dropdown elements
  dropdown1.addEventListener('change', function() {
    selectedOption1 = this.value;
  });
  dropdown2.addEventListener('change', function() {
    selectedOption2 = this.value;
  });
  dropdown3.addEventListener('change', function() {
    selectedOption3 = this.value;
  });

    // Get the card and the dropzones
  // Get the card, the dropzones, and the original div
  var card = document.getElementById("card");
  var dropzones = document.querySelectorAll(".dropzone");
  var originalDiv = document.getElementById("original-div");

  // Add the "draggable" attribute to the card
  card.setAttribute("draggable", "true");

  // Add the dragstart event listener to the card
  card.addEventListener("dragstart", function(event) {
    // Set the data type and the value of the drag data
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  // Add the dragover event listener to the dropzones
  dropzones.forEach(function(dropzone) {
    dropzone.addEventListener("dragover", function(event) {
      // Prevent the default behavior (prevent the card from being dropped outside of the dropzone)
      event.preventDefault();
    });
  });

  // Add the drop event listener to the dropzones
  dropzones.forEach(function(dropzone) {
    dropzone.addEventListener("drop", function(event) {
      // Prevent the default behavior (prevent the card from being dropped outside of the dropzone)
      event.preventDefault();

      // Get the data type and the value of the drag data
      var data = event.dataTransfer.getData("text/plain");

      // Append the card to the dropzone
      event.target.appendChild(document.getElementById(data));
    });
  });

  // Add the contextmenu event listener to the card
  card.addEventListener("contextmenu", function(event) {
    // Prevent the default behavior (prevent the context menu from being displayed)
    event.preventDefault();

    // Append the card to the original div
    originalDiv.appendChild(card);
  });

  
  
  
  
  



