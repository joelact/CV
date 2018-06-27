const server = require('express');
const app = server();
const fileService = require('fs');

function sendResponse(res, type, status, obj = null) {
    res.type(validateType(type));
    res.status(validateStatus(status));
    res.send(obj);
}

function validateType(type) {
    if (typeof type !== 'string') {
        return 'text';
    }
    return type;
}

function validateStatus(status){
    if(typeof status !== 'number'){
        return 400;
    }
    return status;
}


app.get('/', (req, res) => {
    fileService.readFile('../index.html', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'html', 200, data);
    });
});

app.get('/js/script.js', (req, res) => {
    fileService.readFile('./script.js', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'text/javascript', 200, data);
    });
});

app.get('/css/main.css', (req, res) => {
    fileService.readFile('../css/main.css', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'css', 200, data);
    });
});

app.get('/img/facebook_icon.png', (req, res) => {
    fileService.readFile('../img/facebook_icon.png', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'png', 200, data);
    });
});

app.get('/img/github_icon.png', (req, res) => {
    fileService.readFile('../img/github_icon.png', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'png', 200, data);
    });
});

app.get('/img/instagram_icon.png', (req, res) => {
    fileService.readFile('../img/instagram_icon.png', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'png', 200, data);
    });
});

app.get('/img/linkedin_icon.png', (req, res) => {
    fileService.readFile('../img/linkedin_icon.png', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'png', 200, data);
    });
});

app.get('/img/linkedin_profile.jpg', (req, res) => {
    fileService.readFile('../img/linkedin_profile.jpg', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'jpg', 200, data);
    });
});

app.get('/img/ISEP.jpg', (req, res) => {
    fileService.readFile('../img/ISEP.jpg', (err, data) =>{
        if(err) sendResponse(res, 'text', 404, 'FILE NOT FOUND');
        sendResponse(res, 'jpg', 200, data);
    });
});


app.listen(9000);