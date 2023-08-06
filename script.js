// access form to gather inputs and reset
// access results section to add or remove memes
const memeForm = document.querySelector("#meme-form");
const results = document.querySelector('#results');
const headerInput = document.querySelector('#header-caption');
const memeURLInput = document.querySelector('#meme-url');
const lowerInput = document.querySelector('#lower-caption');

document.querySelector('h1').classList.add('title');
document.body.style.backgroundColor = 'purple';

// A. Code to remove memes:
// for each button of all buttons, when the button gets a 'click, remove the parentElement ('div')
results.addEventListener('click', function(e){
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
})

// B. Code to add memes
memeForm.addEventListener("submit", function(evt){
  // prevents form from clearing when you press submit
  evt.preventDefault();
  // access the value of what was input into the form with .value
  const memeMakerFuncVar = makeMemeFunc(headerInput.value, memeURLInput.value, lowerInput.value);
    // append result of running the function below
  memeMakerFuncVar();
})

// this function can be inside of memeForm, but not BP
function makeMemeFunc(headerText, url, lowerText){
  
  // 0a. create a new div to store meme
  let newMeme = document.createElement("div");
  const newRemoveButton = document.createElement('button');
  newRemoveButton.innerText = 'Remove';

  // 1. GENERATE HEADER TEXT
    // create new header element
    // set value of element's text equal to passed in argument
    // add a remove button
    const header = document.createElement("h2");
    header.innerText = headerText;

  // 2. GENERATE MEME
    // create new image element
    // set equal to url argument
    // add a remove button
    const img = document.createElement("img");
    img.src = url;

  // 3. GENERATE CAPTION
    // create a new element that is a paragraph
    // add text to paragraph (arg passed in)
    // add a remove button
    const lower = document.createElement("p");
    lower.textContent = lowerText;

    newMeme.appendChild(header);
    newMeme.appendChild(img);
    newMeme.appendChild(lower);
    newMeme.appendChild(newRemoveButton);
    memeForm.reset();
    results.appendChild(newMeme); 

    // save to local storage
    savedMemes.push({headerKey: newMeme.header.innerText, imgKey: newMeme.img.src, lowerKey: newMeme.lower.textContent})
    localStorage.setItem('savedmemeslocalstorage')

    return results;
}
  
  // let newMemeDiv = document.createElement("div");
  // inputs: image link, top text, bottom text
  // upon submission:
    // if image, text, or text is null, do not permit submit
      // else: add a div with that meme, text, image
    // set form inputs back to ''
    // store to local storage
    // QUESTION: how to add memes that accumulate?
// add event listener to remove form on the click of a button
  // when button is clicked, delete div and delete from local storage


// ---------------

// const COLORS = [
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple",
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple"
// ];

// // here is a helper function to shuffle an array
// // it returns the same array with values shuffled
// // it is based on an algorithm called Fisher Yates if you want ot research more
// function shuffle(array) {
//   let counter = array.length;

//   // While there are elements in the array
//   while (counter > 0) {
//     // Pick a random index
//     let index = Math.floor(Math.random() * counter);

//     // Decrease counter by 1
//     counter--;

//     // And swap the last element with it
//     let temp = array[counter];
//     array[counter] = array[index];
//     array[index] = temp;
//   }

//   return array;
// }

// let shuffledColors = shuffle(COLORS);

// // this function loops over the array of colors
// // it creates a new div and gives it a class with the value of the color
// // it also adds an event listener for a click for each card
// function createDivsForColors(colorArray) {
//   for (let color of colorArray) {
//     // create a new div
//     const newDiv = document.createElement("div");

//     // give it a class attribute for the value we are looping over
//     newDiv.classList.add(color);

//     // call a function handleCardClick when a div is clicked on
//     newDiv.addEventListener("click", handleCardClick);

//     // append the div to the element with an id of game
//     gameContainer.append(newDiv);
//   }
// }

// // TODO: Implement this function!
// function handleCardClick(event) {
//   // you can use event.target to see which element was clicked
//   console.log("you just clicked", event.target);
// }

// // when the DOM loads
// createDivsForColors(shuffledColors);
