const age = 20;
const year_course = 2;


const biography_text = 'Hi, my name is Joel Teixeira and I\'m ' + age + ' years old. I always liked computers, that why a choose to study Computer Science, I\'m currently in the '
+ year_course + 'nd year of the course.';
const email = 'joelact13@outlook.pt';
const schools = ['Agrupamento de Escolas do Castelo da Maia - AECM',
    'Instituto Superior de Engenharia do Porto'];
const hobbies = ['Soccer/Football', 'Go out with friends', 'Listen to music', 'Playing Computer Games', 'Movies/Series'];


const years = [2016, 2019];

window.onload = function initialize() {
    try {
        document.getElementById('biography-text').innerHTML = biography_text;
        document.getElementById('email').innerHTML = email;
    } catch (err) {
        alert('Illegal Argument');
    }
    addEducationData();
    addHobbies();
};

function addEducationData() {
    let html = '<ul>';

    schools.forEach(element => {
        if (element.includes('AECM')) {
            html += `
            <li class="list">${element}</li>
            `;
        } else {
            html += `
            <li class="list">${element}<img src="img/ISEP.jpg" id="isep"/>
            <br/>
            <ul>
                <li id="degree">Computer Science Degree <span>${years[0]}</span>-<span>${years[1]}</span></li>
            </ul>
            </li>
        `;
        }
    });

    html += '</ul>';

    document.getElementById('schools').innerHTML = html;
}

function addHobbies(){
    let html = '<ul>';

    hobbies.forEach(element =>{
        html += `
            <li class="list">${element}</li>
            `;
    });

    html += '</ul>';

    document.getElementById('listHobbies').innerHTML = html;
}
