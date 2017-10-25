// Bunch of quotes to cycle through and display
const quotes = [
  "<h1 class=\"m-0 description\">A mod developer who enjoys building on solid foundations like the <a href=\"https://arma3.com/\" target=\"_blank\">ArmA3</a> engine</h1>",
  "<h1 class=\"m-0 description\">A <a href=\"https://en.wikipedia.org/wiki/Freelancer\" target=\"_blank\">freelancer</a> web developer looking to further develop his skills</h1>",
  "<h1 class=\"m-0 description\">A creative individual willing to learn the tricks of the trade whilst studying at <a href=\"https://usi.ch\" target=\"_blank\">USI</a></h1>",
  "<h1 class=\"m-0 description\">A military leader who proved his abilities as 1st Lieutentant of the <a href=\"https://en.wikipedia.org/wiki/Swiss_Armed_Forces\" target=\"_blank\">Swiss Armed Forces</a></h1>",
  "<h1 class=\"m-0 description\">A solid team worker with the bad habit of being a <a href=\"https://en.wikipedia.org/wiki/Stakhanovite_movement\" target=\"_blank\">Stakhanovist</a></h1>",
];

// Function that take the quotes previously defined and cycles through them
function changeQuote() {
  //Array of quotes not yet used
  let unusedQuotes = quotes;
  //Array to keep track of already used quotes
  let usedQuotes = [
    "<h1 class=\"m-0 description\">A young lifelong learner who tries to be a developer with a weakness for <a href=\"https://en.wikipedia.org/wiki/Informatics\" target=\"_blank\">informatics</a></h1>"
  ];
  //Setting up an interval that fires the contained function every 7.5s
  setInterval(() => {
    //If we run out of quotes, reset the arrays to the initial state
    //(This makes sure that we cycle through all of them before we show a duplicate)
    if (unusedQuotes.length == 0) {
      unusedQuotes = usedQuotes;
      usedQuotes = [];
    }
    //Pick a random index number of the unused quotes array
    //(If we have an array of 9 elements generates a number between 0 and 9 and floors it)
    let i = Math.floor(Math.random() * unusedQuotes.length);
    let $description = $('.caption .description');
    //Remove the fade-in animation from a pre-existent animated element
    $description.removeClass('fade-in-right');
    //Make the caption fade-out
    $description.addClass('fade-out-left');
    //After 0.7s, when the fade-out is complete
    setTimeout(() => {
      //Remove the faded caption from the DOM
      $description.remove();
      //Append the newly selected caption to the parent element
      $('.caption').append(unusedQuotes[i]);
      //Add the fade-in animation to the newly appended element
      $('.caption .description').addClass('fade-in-right');
      //Add the displayed quote to the array of quotes already used
      usedQuotes.push(unusedQuotes[i]);
      //Remove the currently displayed quote from the unused array
      unusedQuotes.splice(i, 1);
    }, 700)
  }, 7500)
}

//When the DOM is loaded and ready
$(document).ready(() => {
  $('.active').click((event) => {

  })
  $('#logo').click((event)=>{
    event.preventDefault();
  })
  //Begin displaying quotes
  changeQuote();
});
