/*
 * TO-DO: Connect front-end to js, handle ethics clearance response
 */

// search endpoint urls
const studyByIdURL = 'https://research-stream.herokuapp.com/study/id/'
const ethicsClearURL = 'https://research-stream.herokuapp.com/study/EthicsClearance/'
const paramSearchURL = 'https://research-stream.herokuapp.com/study/'

// list of possible parameters to search by
const paramList = ['name', 'location', 'lab', 'researcher'];

// test-case id
const id = '5c37c1ada991b25288c06088'

const res = {};

// search for study by id
function searchStudyByID(id) {
  fetch(studyByIdURL + id, {
    method: "GET",
  }).then(response => response.json())
  .then(function(response) {
    console.log('Search study by id:');
    console.log('inside function element by element:');
    for (let ele in response) {
      res[ele] =  response[ele];
      console.log(ele + ':', res[ele]);
    }
    console.log('specific element: ', res.name);  //example of accessing a specific element
    console.log('specific element 2:', res['lab']); // another example of accessing a specific element
    console.log('inside function as string:', JSON.stringify(res)); // entire json as string
  })
  // response and res empty outside of block above, line below outputs empty {}
  //.then(response => console.log(JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
}

// search for ethics clearance by id
function searchEthicsClear(id) {
  fetch(ethicsClearURL + id, {
    method: "GET",
  }).then(response => response.body)
  .then(response => console.log('Search for ethics clearance: ', response))
  .catch(error => console.error('Error:', error))
}

searchStudyByID(id);

searchEthicsClear(id);



// search for studies by parameter
function searchByParam(paramType, paramVal) {
  let fullURL = paramSearchURL + paramType + '/' + paramVal;
  fetch(fullURL, {
    method: "GET",
  }).then(response => response.json())
  .then(function(response) {
    console.log('Search by parameter:');
    let j = []
    for(let ele in response) {
      j.push(response[ele]);
    }
    console.log('First JSON in array:', j[0]);  // accessing specific JSON in array (could stringify)
    console.log('Specific element in JSON:', j[0].name); // accessing specific element of a specific JSON in array
    console.log('Specific element in JSON:', j[0]['lab']);  // another example of accessing specific element
  })
  .catch(error => console.error('Error:', error))
}

searchByParam(paramList[3], 'Wally West');
