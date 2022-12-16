var fetchButton = document.getElementById('fetch-button');

var muscle = 'biceps'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

/* for (var i = 0; i < data.length; i++) {
    // Creating elements, tablerow, tabledata, and anchor
    var createTableRow = document.createElement('tr');
    var tableData = document.createElement('td');
    var link = document.createElement('a');

    // Setting the text of link and the href of the link
    link.textContent = data[i].html_url;
    link.href = data[i].html_url;

    // Appending the link to the tabledata and then appending the tabledata to the tablerow
    // The tablerow then gets appended to the tablebody
    tableData.appendChild(link);
    createTableRow.appendChild(tableData);
    tableBody.appendChild(createTableRow);
 */


    //or this

/*     function getApi() {
        // replace `octocat` with anyone else's GitHub username
        var requestUrl = 'https://api.github.com/users/octocat/repos';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            for (var i = 0; i < data.length; i++) {
              var listItem = document.createElement('li');
              listItem.textContent = data[i].html_url;
              repoList.appendChild(listItem);
            }
          });
      }
      
      fetchButton.addEventListener('click', getApi); */
      
fetchButton.addEventListener('click', getApi);