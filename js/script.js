const age = 20;
const year_course = 2;


const BIOGRAPHY_TEXT = "Hi, my name is Joel Teixeira and I'm " + age + " years old. I always liked computers, that why a choose to study Computer Science, I'm currently in the "
+ year_course + "nd year of the course";
const EMAIL = "joelact13@outlook.pt";
const SCHOOLS = ['Agrupamento de Escolas do Castelo da Maia - AECM',
    'Instituto Superior de Engenharia do Porto'];


const YEARS = [2016, 2019];

window.onload = function initialize() {
    try {
        document.getElementById("biography-text").innerHTML = BIOGRAPHY_TEXT;
        document.getElementById("email").innerHTML = EMAIL;
    } catch (err) {
        alert("Illegal Argument");
    }
    addEducationData();
}

function addEducationData() {
    let html = '<ul>';

    SCHOOLS.forEach(element => {
        if (element.includes('AECM')) {
            html += `
            <li class="list">${element}</li>
            `;
        } else {
            html += `
            <li class="list">${element}<img src="img/ISEP.jpg" id="isep"/>
            <br/>
            <ul>
                <li id="degree">Computer Science Degree <span>${YEARS[0]}</span>-<span>${YEARS[1]}</span></li>
            </ul>
            </li>
        `;
        }
    });

    html += '</ul>'

    document.getElementById('schools').innerHTML = html;
}


function lostFocus() {

}