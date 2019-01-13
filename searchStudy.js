/*
 * TO-DO: Connect front-end to js
 */

// search endpoint urls
const studyByIdURL = 'https://research-stream.herokuapp.com/study/id/'
const ethicsClearURL = 'https://research-stream.herokuapp.com/study/EthicsClearance/'
const paramSearchURL = 'https://research-stream.herokuapp.com/study/'

// list of possible parameters to search by
const paramList = ['name', 'location', 'lab', 'researcher'];

// test-case id
const id = '5c37c1ada991b25288c06088'

// search for either study or ethics clearance by id
function searchByID(url, id) {
  fetch(url + id, {
    method: "GET",
  }).then(response => response.text())
  .then(response => console.log('Search by ID:', response))
  .then(error => console.error('Error:', error))
}


searchByID(ethicsClearURL, id);


// serch for studies by parameter
function searchByParam(urlRoot, paramType, paramVal) {
  let fullURL = urlRoot + paramType + '/' + paramVal;
  fetch(fullURL, {
    method: "GET",
  }).then(response => response.text())
  .then(response => console.log('Search by Parameter:', response))
  .then(error => console.error('Error:', error))
}

searchByParam(paramSearchURL, paramList[3], 'Wally West');
