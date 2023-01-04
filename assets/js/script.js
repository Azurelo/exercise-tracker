var fetchButton = document.getElementById('fetch-button');
var exerciseList = document.querySelector('h6');
var exerciseListSearch = document.getElementById('group');
var searchButton = document.getElementById('x-search');

//fetch request using data from dropdowns when search button is pressed

  // Get a reference to the dropdown elements
  const dropdown1 = document.getElementById('dropdown1');
  const dropdown2 = document.getElementById('dropdown2');
  const dropdown3 = document.getElementById('dropdown3');

  // Create variables to store the selected options
  let selectedOption1 ='';
  let selectedOption2 ='';
  let selectedOption3 ='';

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

  function clearButtons(){
    while (exerciseListSearch.firstChild) {
      exerciseListSearch.removeChild(exerciseListSearch.firstChild);
    }
  }
  
searchButton.addEventListener('click', function(){
  clearButtons();

  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + selectedOption1 + '&type=' + selectedOption2 + '&difficulty=' + selectedOption3,
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
    createExerciseBtn.setAttribute('id','xbutton' + i);

    var exerciseData = document.createElement('div');

  
    // Setting the text of link and the href of the link
    exerciseData.textContent = result[i].name + ' | ' + result[i].difficulty;
  
    // Appending the link to the tabledata and then appending the tabledata to the tablerow
    // The tablerow then gets appended to the tablebody
    createExerciseBtn.appendChild(exerciseData);
   exerciseListSearch.appendChild(createExerciseBtn);}

   var button0 = document.getElementById("xbutton0");
   if(button0){
     console.log("chicken")
   button0.addEventListener("click", function() {
     saveButtonContent(this);
   });}
   var button1 = document.getElementById("xbutton1");
   if(button1){
   button1.addEventListener("click", function() {
     saveButtonContent(this);
   });}
   var button2 = document.getElementById("xbutton2");
   if(button2){
   button2.addEventListener("click", function() {
     saveButtonContent(this);
   });}
   var button3 = document.getElementById("xbutton3");
   if(button3){
   button3.addEventListener("click", function() {
     saveButtonContent(this);
   });}
   var button4 = document.getElementById("xbutton4");
   if(button4){
   button4.addEventListener("click", function() {
     saveButtonContent(this);
   });}
   var button5 = document.getElementById("xbutton5");
   if(button5){
   button5.addEventListener("click", function() {
     saveButtonContent(this);
   });}
   var button6 = document.getElementById("xbutton6");
   if(button6){
   button6.addEventListener("click", function() {
     saveButtonContent(this);
   });}
   var button7 = document.getElementById("xbutton7");
   if(button7){
   button7.addEventListener("click", function() {
     saveButtonContent(this);
   });}  
   var button8 = document.getElementById("xbutton8");
   if(button8){
   button8.addEventListener("click", function() {
     saveButtonContent(this);
   });}  
   var button9 = document.getElementById("xbutton9");
   if(button9){
   button9.addEventListener("click", function() {
     saveButtonContent(this);
   });}
   
});
})

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

  let btn = document.getElementById('btnClick');
let image = document.getElementById('image');
btn.addEventListener('click', function () {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(Response => Response.json())
        .then(result => {
          console.log(result);
          image.src = result.message;
          });
      });

      function saveButtonContent(button) {
        console.log("Chicken")
        // Get the content of the button
        var buttonContent = button.innerHTML;
      
        // Create a new card element
        var card = document.createElement("div");
        card.classList.add("card");
      
        // Add the button content to the card
        card.innerHTML = buttonContent;
      
        // Append the card to the body of the document
        document.body.appendChild(card);
      
        // Save the button content to local storage using the button's id as the key
        localStorage.setItem(button.id, buttonContent);
      } 




