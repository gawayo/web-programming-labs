function    showDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString("ru-RU");
}

function showDaysCount(params) {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    let result = document.getElementById('result');
    daysCount = Math.floor(daysCount); //округляем в меньшею сторону
    result.innerHTML = daysCount;
}
window.addEventListener('load', showDate);