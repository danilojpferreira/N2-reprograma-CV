const skillsList = [
        {skill:'HTML', score:9},
        {skill:'CSS', score: 8},
        {skill:'JavaScript', score: 5},
        {skill:'Node.Js', score: 5},
        {skill:'MongoDb', score: 5},
        {skill:'Git/Github', score: 6},
        {skill:'Bootstrap', score: 5},
        {skill:'Axure', score: 6},
        {skill:'Dreamweaver', score: 8},
        {skill:'Photoshop', score: 10},
        {skill:'UI', score: 9},
        {skill:'UX', score: 7},
        {skill:'Illustrator', score: 9},
        {skill:'InDesign', score: 9},
        {skill:'Lettering', score: 10},
        {skill:'Inglês', score: 6},
        {skill:'Espanhol', score: 8},

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
