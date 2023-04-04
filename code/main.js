let data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "../results-summary-component-main/assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "../results-summary-component-main/assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "../results-summary-component-main/assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "../results-summary-component-main/assets/images/icon-visual.svg"
    }
  ]

let scoreCategory = [];
let score = [];
let icons = [];
let scoreTitle = document.getElementsByClassName('scoreTitle');
let scoreText = document.getElementsByClassName('score');
let totalScore = document.getElementsByClassName('totalScore');
let iconImage = document.getElementsByClassName('icon');

for(let i = 0; i < data.length; i++) {
  scoreCategory.push(data[i].category);
  score.push(data[i].score);
  icons.push(data[i].icon);
}

for(let i = 0; i < scoreCategory.length; i++) {
  scoreTitle[i].textContent = scoreCategory[i];
  scoreText[i].textContent = score[i];
  iconImage[i].src = icons[i];
}

function average(score) {
  let sum = 0;

  for(let i = 0; i <score.length; i++) {
    sum += score[i]
  }
  return sum / score.length; 
}

totalScore[0].textContent = Math.floor(average(score));






