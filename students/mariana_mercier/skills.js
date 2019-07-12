const skillsList = [
  { skill: "INGLÊS", score: 8 },
  { skill: "LÓGICA DE PROGRAMAÇÃO", score: 8 },
  { skill: "HTML", score: 6 },
  { skill: "CSS", score: 5 },
  { skill: "BOOTSTRAP", score: 7 },
  { skill: "JAVASCRIPT", score: 7 },
  { skill: "NODE.JS", score: 6 },
  { skill: "EXPRESS", score: 6 },
  { skill: "API", score: 6 },
  { skill: "MONGODB", score: 7 },
  { skill: "MYSQL", score:4 },
  { skill: "C", score: 7 },
  { skill: "JAVA", score: 3 },
  { skill: "GIT/GITHUB", score: 7 }
];

const skillsListDOM = document.getElementById("skills-list");
let skillsListHTML = "";

function createSkill(skill, score) {
  let skillHTML = `<div class="skill">
        <span class="skill-name">${skill}</span>
        <div class="points"\n>`;
  for (let i = 1; i <= score; i++) {
    skillHTML += `<div class="point has-point"></div>\n`;
  }
  for (let i = 1; i <= 10 - score; i++) {
    skillHTML += `<div class="point"></div>\n`;
  }
  skillHTML += `</div>
    </div>`;
  return skillHTML;
}
skillsList.forEach(item => {
  skillsListHTML += createSkill(item.skill, item.score);
});

skillsListDOM.innerHTML = `<h2>No que me destaco</h2>\n ${skillsListHTML}`;
