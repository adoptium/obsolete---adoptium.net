const {getMembers} = require('./common');

let strategicMembers = [];
let enterpriseMembers = [];
let participantMembers = [];

module.exports.load = () => {
  let members = getMembers();
  for (let member of members) {
    switch(member.tier) {
      case 'strategic':
        strategicMembers.push(member);
      break;
      case 'enterprise':
        enterpriseMembers.push(member);
      break;
      case 'participant':
        participantMembers.push(member);
      break;
    }
  }

  // Randomly mix up members logos
  shuffle(strategicMembers);
  shuffle(enterpriseMembers);
  shuffle(participantMembers);

  const templateSelector = Handlebars.compile(document.getElementById('template-selector').innerHTML);
  document.getElementById('members').innerHTML = templateSelector({strategicMembers, enterpriseMembers, participantMembers});
};

// Randomly shuffle members
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}