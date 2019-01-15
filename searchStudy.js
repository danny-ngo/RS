/*
 * TO-DO: Connect front-end to js, handle ethics clearance response
 */

// search endpoint urls
const studyByIdURL = 'https://research-stream.herokuapp.com/study/id/'
const ethicsClearURL = 'https://research-stream.herokuapp.com/study/EthicsClearance/'
const paramSearchURL = 'https://research-stream.herokuapp.com/study/'

// list of possible parameters to search by
const paramList = ['name', 'location', 'lab', 'researcher'];

const res = {};

// search for study by id
function searchStudyByID() {
  const id = document.querySelector('#inputID').value;
  fetch(studyByIdURL + id, {
    method: "GET",
  }).then(response => response.json())

  .then(function(response) {  // data handling done within this function
    console.log('Search study by id:');
    console.log('inside function element by element:'); //  TEST
    for (let ele in response) {
      res[ele] =  response[ele];
      console.log(ele + ':', res[ele]); // TEST: logging study data, element by element
    }
    //console.log('specific element: ', res.name);  // TEST: example of accessing a specific element
    //console.log('specific element 2:', res['lab']); // TEST: another example of accessing a specific element
    //console.log('inside function as string:', JSON.stringify(res)); // TEST: entire json as string
  })
  // response and res empty outside of block above, line below outputs empty {}
  //.then(response => console.log(JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
}

var outside;

// search for ethics clearance by id
function searchEthicsClear(tid) {
  fetch(ethicsClearURL + tid, {
    method: "GET",
  }).then(response => response.blob())
  //.then(response => console.log('Search for ethics clearance: ', response))
  .then(images => {
      // Then create a local URL for that image and print it
      outside = URL.createObjectURL(images)
      console.log('Search for ethics clearance: ', outside)
  })
  .catch(error => console.error('Error:', error))
}

// search for studies by parameter
function searchByParam() {
  let paramType = document.querySelector('#paramType').value;
  let paramVal = document.querySelector('#paramVal').value;
  fetch(paramSearchURL + '/' + paramType + '/' + paramVal, {
    method: "GET",
  }).then(response => response.json())
  .then(function(response) {  // data handling done within this function
    console.log('Search by parameter:');
    let j = []
    for(let ele in response) {
      j.push(response[ele]);
    }
    console.log('First JSON in array:', j[0]);  // TEST: accessing specific JSON in array (could stringify)
    console.log('Specific element in JSON:', j[0].name); // TEST: accessing specific element of a specific JSON in array
    console.log('Specific element in JSON:', j[0]['lab']);  // TEST: another example of accessing specific element
  })
  .catch(error => console.error('Error:', error))
}





// test calls
const tid = '5c37c1ada991b25288c06088'
// Researcher: Wally West
searchEthicsClear(tid);
