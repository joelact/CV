const BIOGRAPHY_TEXT = "Text";
const EMAIL = "joelact13@outlook.pt";
const SCHOOLS = ['Agrupamento de Escolas do Castelo da Maia - AECM',
    'Instituto Superior de Engenharia do Porto'];

const YEARS = []

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
                <li id="degree">Computer Science Degree</li>
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