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
}