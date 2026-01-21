
/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    for (let x = 0; x < games.length; x++) {/*Microsoft Copilot*/
        const recent_game=games[x];/*Microsoft Copilot*/
        const new_games = `
    <div class="game-card">
    <img src="${recent_game.img}" class="game-img" />
    <h3>The game's image looks like ${recent_game.img}</h3>
    <p>This is the ${recent_game.pledged} amount</p>
    </div>
    `;
        gamesContainer.innerHTML += new_games;/*Microsoft Copilot*/
    }}

addGamesToPage(GAMES_JSON);
    // loop over each item in the data


        // create a new div element, which will become the game card


        // add the class game-card to the list


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")


        // append the game to the games-container



// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const total_contributions = GAMES_JSON.reduce( (starting_point, recent_game) => 
    {return starting_point + recent_game.backers;}, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = total_contributions.toLocaleString('en-US');

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const raisedCard_amount = GAMES_JSON.reduce( (new_starting_point, recent_game) => 
     {return new_starting_point + recent_game.pledged;}, 0);

// set inner HTML using template literal
raisedCard.innerHTML = raisedCard_amount.toLocaleString('en-US')/*Microsoft Copilot*/

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");/*Microsoft Copilot*/
const numberofgames = GAMES_JSON.length;/*Microsoft Copilot*/
gamesCard.innerHTML = numberofgames.toLocaleString('en-US');/*Microsoft Copilot*/

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);/*Microsoft Copilot*/

    // use filter() to get a list of games that have not yet met their goal
    const nogoalgames = GAMES_JSON.filter((recent_game) => recent_game.pledged < recent_game.goal);
    console.log(nogoalgames);/*Microsoft Copilot*/
    addGamesToPage(nogoalgames);/*Microsoft Copilot*/
}

    // use the function we previously created to add the unfunded games to the DOM
// show only games that are fully funded
function filterFundedOnly() {/*Microsoft Copilot*/
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const goalmetgames = GAMES_JSON.filter((recent_game) => recent_game.pledged >= recent_game.goal);/*Microsoft Copilot*/
    console.log(goalmetgames);
    addGamesToPage(goalmetgames);
}
    // use the function we previously created to add unfunded games to the DOM

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);/*Microsoft Copilot*/
    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");/*Microsoft Copilot*/
const fundedBtn = document.getElementById("funded-btn");/*Microsoft Copilot*/
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);/*Microsoft Copilot*/
fundedBtn.addEventListener('click', filterFundedOnly);/*Microsoft Copilot*/
allBtn.addEventListener('click', showAllGames);/*Microsoft Copilot*/



/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const number_unfunded_games = GAMES_JSON.filter((game) => game.pledged < game.goal);/*Microsoft Copilot*/
const totalnumberofgames = GAMES_JSON.length;
full_number_unfunded = number_unfunded_games.length;
full_number_funded = GAMES_JSON.reduce((startofthegame, game) => {return startofthegame + game.pledged;}, 0);

// create a string that explains the number of unfunded games using the ternary operator

const new_str = `The total amount of money raised is: ${full_number_funded}. This is for: ${totalnumberofgames}
There are about ${full_number_unfunded ? full_number_unfunded: "None"}  games that remain unfunded`  /*Microsoft Copilot*/

const newparagraph = document.createElement('div'); /*Microsoft Copilot*/
newparagraph.textContent = new_str;
descriptionContainer.appendChild(newparagraph) /*Microsoft Copilot*/
// create a new DOM element containing the template string and append it to the description container

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [firstGame, secondGame, ...rest] = sortedGames;
// create a new element to hold the name of the top pledge game, then append it to the correct element
firstGameContainer.appendChild(addGamesToPage(firstGame)); /*Microsoft Copilot*/
// do the same for the runner up item
secondGameContainer.appendChild(addGamesToPage(secondGame)); /*Microsoft Copilot*/

/*AI Citations:
Microsoft Copilot. Accessed 2026-1-20. Prompt: Please help me identify the errors in my index.js file. 
Prompt #2: Please explain the errors and how to fix them in my js file. Prompt #3: Please explain why my code is incorrect, 
code snippet */