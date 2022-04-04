// auto writting function
const text = document.getElementById('auto-text');
const val = "Digital World";
let index = 1;

setInterval(autoWriting, 150);

function autoWriting(){
    text.innerText = val.slice(0 , index);
    index++;
    if(index > val.length){
        index = 1;
    }
}

const menu = document.querySelector('.menu');
menu.addEventListener('click', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});


const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');
const teamContainer = document.querySelector('.team_container');
const engineers = document.querySelectorAll('.eng');
const size = engineers[0].clientWidth;
let counter = 1;

teamContainer.style.transform = 'translateX('+ -size * counter +'px)';

btnRight.addEventListener('click', function(){
    if(counter >= engineers.length - 4) return;
    teamContainer.style.transition = 'all 0.5s ease-in-out';
    counter++;
    teamContainer.style.transform = 'translateX('+ -size * counter +'px)';
    check();
});
btnLeft.addEventListener('click', function(){
    if(counter <= 0 ) return;
    teamContainer.style.transition = 'all 0.5s ease-in-out';
    counter--;
    teamContainer.style.transform = 'translateX('+ -size * counter +'px)';
    check();
});

function check(){
    if(counter >= engineers.length - 4){
        btnRight.style.display = 'none';
    }else{
        btnRight.style.display = 'block';
    }
    if(counter <= 0){
        btnLeft.style.display = 'none';
    }else{
        btnLeft.style.display = 'block';
    }
}
// testimonial
const clients = document.querySelector('.clients');
const client = document.querySelectorAll('.client');
const clientSize = client[0].clientWidth;

let counter2 = 0;
function autoSlider(){
    clients.style.transition = '2s';
    counter2++;
    clients.style.transform = 'translateX('+ counter2 * -clientSize +'px)';
}
// tryBtn.addEventListener('click', autoSlider);

clients.addEventListener("transitionend", function(){
    if(client[counter2].id === 'firstOne'){
        clients.style.transition = 'none';
        counter2 = 0;
        clients.style.transform = 'translateX('+ counter2 * clientSize +'px)';
    }
})
function fire(){
    autoSlider();
    window.setInterval("autoSlider()", 5000)
}
fire();

// pricing button
const toggleBtn = document.querySelector('.toggleBtn');
const priceBasic = document.querySelector('.price_basic');
const priceStandard = document.querySelector('.price_standard');
const pricePremium = document.querySelector('.price_priemum');

toggleBtn.addEventListener('click', function(){
    toggleBtn.style.transition = 'all 0.5s ease-in-out';
    toggleBtn.classList.toggle('active');
    if(priceBasic.innerText == '$15'){
        priceBasic.innerText = '$180';
    }else{
        priceBasic.innerText = '$15'
    }
    if(priceStandard.innerText == '$40'){
        priceStandard.innerText = '$220';
    }else{
        priceStandard.innerText = '$40'
    }
    if(pricePremium.innerText == '$65'){
        pricePremium.innerText = '$300';
    }else{
        pricePremium.innerText = '$65'
    }
});

// clock
function getTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let daynum = now.getDay();
    let dayname = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let period = "AM";

    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        period = "PM"
    }

    const months = ["January", "February", "March", "April", "May", "June", "Jully", "Augest", "September", "October", "November", "December"];
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const ids = ["day", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    const values = [weeks[daynum], months[month], dayname, year, hours, minutes, seconds, period];
    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}
function updateTime(){
    getTime();
    window.setInterval("getTime()", 1);
}
updateTime();