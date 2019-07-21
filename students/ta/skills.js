const skillsList = [
        {skill:'HTML', score:8},
        {skill:'CSS', score: 4},
        {skill:'NODEJS', score: 7},
        {skill:'JAVASCRIPT', score: 9},
        {skill:'MONGODB', score: 7},
        {skill:'GIT/GITHUB', score: 9},
        {skill:'BOOTSTRAP', score: 6},
        {skill:'NoSQL', score: 7},
        {skill:'Git', score: 7},
        {skill:'API', score: 8},
        {skill:'INGLÊS', score: 7},
        {skill:'ESPANHOL', score: 8}
    ]

const skillsListDOM = document.getElementById('skills-list')
let skillsListHTML = ''

function createSkill(skill, score) {
    let skillHTML = 
    `<div class="skill">
        <span class="skill-name">${skill}</span>
        <div class="points"\n>`
    for (let i=1; i<=score;i++){
        skillHTML+=`<div class="point has-point"></div>\n`
    }
    for (let i=1; i<=10-score;i++){
        skillHTML+=`<div class="point"></div>\n`
    }
    skillHTML+=
        `</div>
    </div>`
    return skillHTML
}
skillsList.forEach((item)=>{
    skillsListHTML+=createSkill(item.skill,item.score)
})

skillsListDOM.innerHTML = `<h2>No que me destaco</h2>\n ${skillsListHTML}`
