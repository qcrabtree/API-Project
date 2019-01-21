const baseURL = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p='; //1
const key = '1'; //2
let url; //3


const searchTerm = document.querySelector('.search');       // Taking the elements with their class and setting them to a variable
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

// nav.style.display = 'none';    // 

let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);    

function fetchResults(e) {   
 console.log(e);
  e.preventDefault();
  url = `${baseURL}${searchTerm.value}`;
 console.log('URL:', url);




  fetch(url)
    .then(function(result) {
    console.log(result)
      return result.json();
    })
    .then(function(json) {
      console.log(json);
      displayResults(json);
    })
}




function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
    console.log("DisplayResults", json); 
  }
    
     let playerName = json.player;
        console.log(playerName);
    
    
if (playerName.length === 0) {
          console.log('No Player registered with that name');
        } else {
for ( let i = 0; i < playerName.length; i++) {

let playerNames = document.createElement('body');
let playerDescriptionPara1 = document.createElement('h2');
let link = document.createElement('a');
let picture = document.createElement('img');
  
let current = playerName[i];
console.log("Current:", current);


// for (i in json) {
//   console.log(json[i])
// }
playerNames.textContent = current.strPlayer;
playerDescriptionPara1.textContent = current.strDescriptionEN;


if(current.strThumb !== '') {
  picture.src = current.strThumb;
  console.log(current.strThumb)
}

if (current[i] <= 2) {
  picture.style.margin = '200px, 0px, 0px, 0px'; // ASK TOM
} else {
  picture.style.margin = 'auto';
}

playerNames.appendChild(playerDescriptionPara1);
playerDescriptionPara1.appendChild(link);
section.appendChild(playerNames);
playerNames.appendChild(picture);




// FOR REFERENCE 
// article.appendChild(heading);
// heading.appendChild(link);
// article.appendChild(img); 
// article.appendChild(para1);
// article.appendChild(para2);
// article.appendChild(clearfix);
// section.appendChild(article);

}
}
};