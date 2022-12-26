function ALL() {
    makeStairs();
    F_snowflake();
    KARMANbl();
}
function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;

    let greeting;
    if(userAge <=17) {
        greeting = 'Здравствуй, ';
        if(userSex == 'female') {
            greeting += 'девочка ';
        }
        else {
            greeting += 'мальчик';
        }
    }
    else {
        greeting = 'Здравствуйте, ';
        if(userSex == 'female') {
            greeting += 'госпожа ';
        }
        else {
            greeting += 'господин ';
        }
    }
    alert(greeting + userName + ' ' + userSurname + '\n' +'Ваш возраст: ' +userAge);
    alert('Привет,' +username +' ' + username + '\n' + 'Ваш возраст:' +userage);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}
function makeStairs() {
    let stairs = document.querySelector('#stairs');
    let stepCount = 20;
    for(let i = 0; i<stepCount;i++) {
        stairs.innerHTML += '<div class="step"></div>'
    }
    let steps = document.querySelectorAll('.step');
    for(let i = 0; i<steps.length; i++) {
        steps[i].style.left = (30 + 10*i) + 'px';
        steps[i].style.top = (300 + 80*i) + 'px';
        steps[i].innerHTML = 'Блок номер ' + (i+1);
    }
}

function F_snowflake() {
    let snowflake = document.querySelector('#snowflake');
    let snowflakeCount = 100;
    for (let i = 0; i<snowflakeCount; i++) {
        snowflake.innerHTML += '<img class="sibir" src="Sibir_Novosibirsk_Logo.png"></img>'
    }
    let sibir = document.querySelectorAll('.sibir');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    
    for (let i = 0; i<sibir.length; i++) {
        sibir[i].style.left = Math.random() * (screenWidth) + 'px';
        sibir[i].style.top = Math.random() * (screenHeight) + 'px';
        sibir[i].style.width = Math.random() * 100 + 'px';
    }
}
function KARMANbl(){
    let steps = document.querySelectorAll('.MAXKORZH');
    for (let i = 0; i<steps.length; i++) {
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        steps[i].style.color = 'rgb(' + r + ',' + g + ',' + b +')';
        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);
        steps[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
        steps[i].style.fontSize = (i + 20)+'px';
        steps[i].style.width = (i * 20 + 300)+'px';
    }
}