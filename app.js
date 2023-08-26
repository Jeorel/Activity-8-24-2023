const data = null;
let button = document.getElementById('button');

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

button.addEventListener('click', function () {
    if(xhr.status === 200 && xhr.readyState === 4) {
        const res = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
    }else{
        throw new Error('Something went wrong!');
    }
});

xhr.open('GET', 'https://odds.p.rapidapi.com/v4/sports');
xhr.setRequestHeader('X-RapidAPI-Key', '5cd923a73emshdcd724e0bc24203p1093aejsndb948d99de7b');
xhr.setRequestHeader('X-RapidAPI-Host', 'odds.p.rapidapi.com');
xhr.send(data);