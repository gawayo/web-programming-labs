function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
    button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}
function nameegor(button) {
    if(button.innerHTML == 'Егор')
        button.innerHTML = 'Блык';
    else
    button.innerHTML = 'Егор'
}
function namevlad(button) {
    if(button.innerHTML == 'Влад')
        button.innerHTML = 'Щеглов';
    else
    button.innerHTML = 'Влад'
}
function pushme(button) {
    if(button.innerHTML == 'Нажми меня'){
        button.innerHTML = 'Еще раз нажми';
        button.style.color = "white";
    }
   else if(button.innerHTML == 'Еще раз нажми'){
        button.innerHTML = 'Еще';
        button.style.color = "green";
   }    
    else if(button.innerHTML == 'Еще'){
        button.innerHTML = 'Начать сначала';
        button.style.color = "brown";
   }    
    else {
    button.innerHTML = 'Нажми меня';
    button.style.color = "yellow";
   }      
}
function showCoords(event) {
    event.target.innerHTML = 'x =' + event.offsetX + ', y =' + event.offsetY + ' ' + (event.ctrlKey? '<b>Ctrl</b>':'<s>Ctrl</s>') + ' ' + 
    (event.shiftKey? '<b>Shift</b>':'<s>Shift</s>') + ' ' + (event.altKey? '<b>Alt</b>':'<s>Alt</s>' );
}
window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
})