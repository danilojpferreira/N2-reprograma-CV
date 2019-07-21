const skillsList = [
        {skill:'HTML', score:5},
        {skill:'CSS', score: 4},
        {skill:'GIT/GitHub', score: 5},
        {skill:'Bootstrap', score: 2},
        {skill:'JavaScript', score: 4},
        {skill:'Python', score: 5},
        {skill:'Django', score: 5},
        {skill:'Node.js', score: 3},
        {skill:'MongoDB', score: 3},
        {skill:'Inglês', score: 8},
        {skill:'Vendas', score: 9}
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
