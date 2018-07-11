const age = 20;
const year_course = 2;


const biography_text = 'Hi, my name is Joel Teixeira and I\'m ' + age + ' years old. I always liked computers, that why a choose to study Computer Science, I\'m currently in the '
    + year_course + 'nd year of college.';
const email = 'joelact13@outlook.pt';
const schools = ['Agrupamento de Escolas do Castelo da Maia - AECM',
    'Instituto Superior de Engenharia do Porto'];
const hobbies = ['Soccer/Football', 'Go out with friends', 'Listen to music', 'Playing Computer Games', 'Movies/Series'];

const navIds = ['aboutMe', 'skills', 'edu', 'hobbies', 'projects'];
const navItems = ['About me', 'Skills', 'Education', 'Hobbies', 'Projects'];

const skills = ['Java', 'C', 'Javascript', 'Python', 'HTLM', 'CSS', 'Node.js', 'GWT'];


const years = [2016, 2019];

window.onload = function initialize() {
    addItemsToNav();
    try {
        document.getElementById('biography-text').innerHTML = biography_text;
        document.getElementById('email').innerHTML = email;
    } catch (err) {
        alert('Illegal Argument');
    }
    addSkills();
    addEducationData();
    addHobbies();
    addProjects();
};

function addItemsToNav() {

    let html = '<ul class="navbar-nav ml-auto">';
    let i = 0;

    navItems.forEach(ele => {
        html += `
        <li class="nav-item">
            <a class="nav-link" href="#${navIds[i]}">${ele}</a>
        </li>
        `;
        i++;
    });


    html += '</u>';

    document.getElementById('myCont').innerHTML = html;
}

function addSkills(){

    let html = '';

    skills.forEach(element =>{
        html += `<div class="col-lg-3 col-md-6 col-sm-12 mt-2 flex-column">
                    <div class="square mx-auto">
                        <h2 class="center-text-square">${element}</h2>    
                    </div>
                </div>`;
    });

    document.getElementById('skill').innerHTML = html;
}

function addEducationData() {
    let html = '<ul>';

    schools.forEach(element => {
        if (element.includes('AECM')) {
            html += `
            <li class="list">${element}</li>
            `;
        } else {
            html += `
            <li class="responsive list">${element}<img src="img/ISEP.jpg" id="isep"/>
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

function addHobbies() {
    let html = '<ul>';

    hobbies.forEach(element => {
        html += `
            <li class="responsive list">${element}</li>
            `;
    });

    html += '</ul>';

    document.getElementById('listHobbies').innerHTML = html;
}

function addProjects() {

    const server = new XMLHttpRequest();
    server.open('GET', 'https://api.github.com/users/joelact/repos', true);
    server.send();

    server.onload = function () {
        let html = '';
        
        const repos = JSON.parse(server.response);
        repos.forEach(element => {
            html += `<div class="col-lg-6 col-md-6 col-sm-12 mt-2 flex-column" id="box">
            <div class="mx-auto project-box">`;
            html += `
            <div class="mt-3 ml-3" id="max">
                <h1><a href="${element.html_url}">${element.name}<br><br>
                <h6>${element.language}</h6></a></h1>
                
            </div>
            `;
            html += '</div></div>';
        });       

        document.getElementById('githubProjects').innerHTML = html;
    };
}
