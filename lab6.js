function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Блык Егор, Щеглов Владислав';
    
    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет Бизнеса, ФБИ-03, 3 курс, 2022';

    document.getElementById ('your-name').innerHTML = 'Ваше Имя';
    document.getElementById ('input-name').placeholder = 'Введите Имя';

    document.getElementById ('your-surname').innerHTML = 'Ваша Фамилия';
    document.getElementById ('input-surname').placeholder = 'Введите Фамилию';

    document.getElementById ('your-age').innerHTML = 'Ваш Возраст';
    document.getElementById ('input-age').placeholder = 'Введите Возраст';
    
    document.getElementById ('ok-button').value = 'ок';
    document.getElementById ('reset-button').value = 'сброс';

    
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Blyk Egor, Sheglov VladiSlave';
    
    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-03, 3rd year, 2022';

    
    document.getElementById ('your-name').innerHTML = 'Your Name';
    document.getElementById ('input-name').placeholder = 'Enter Your Name';

    document.getElementById ('your-surname').innerHTML = 'Your Surname';
    document.getElementById ('input-surname').placeholder = 'Enter Your Surname';

    document.getElementById ('your-age').innerHTML = 'Your Age';
    document.getElementById ('input-age').placeholder = 'Enter Yor Age';

    document.getElementById ('ok-button').value = 'ok';
    document.getElementById ('reset-button').value = 'reset';
}

function showAlert() {
    let userName = document.getElementById ('input-name').value;
    let userSurname = document.getElementById ('input-surname').value;
    let userAge = document.getElementById ('input-age').value;
    alert('Привет, ' + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}

function showAlert1() {
    alert ('أ ,ب ,ج ,د ,ﻩ ,و ,ز ,ح ,ط ,ي ,ك ,ل ,م ,ن ,س ,ع ,ف ,ص ,ق ,ر ,ش ,ت ,ث ,خ ,ذ ,ض ,ظ ,غ');
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('student').style.backgroundColor = color;
}

function showAlert2() {
    alert ('съешь ещё этих мягких французских булок, да выпей чаю');
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('footer').style.backgroundColor = color;
}

function moveleft() {

    
}