const teams = ['Dodgers','Padres','Giants'];
const teamAwesomenessLevel = ['off the charts','lame','no...just no'];
const fanAdvice = ["are awesome",'are mediocre','need to rethink your priorities'];

const giveRandomNum = num => Math.floor(Math.random() * num);

const finalSentence = [];

const teamSelection = teams[giveRandomNum(teams.length)];
const teamAwesomenessLevelSelection = teamAwesomenessLevel[giveRandomNum(teamAwesomenessLevel.length)];
const fanAdviceSelection = fanAdvice[giveRandomNum(fanAdvice.length)];

console.log(`Your favorite baseball team is the ${teamSelection}.`);
console.log(`The ${teamSelection} are ${teamAwesomenessLevelSelection}!`);
console.log(`Based on the aforementioned information, you ${fanAdviceSelection}!`);