var btnd = document.getElementById("btnd");
var btnw = document.getElementById("btnw");
var btnidk = document.getElementById("btnidk");
var daily = document.getElementById("daily");
var weekly = document.getElementById("weekly");
var idk = document.getElementById("idk");

function btndOn(){
    daily.style.display = 'block';
    weekly.style.display = 'none';
    idk.style.display = 'none';
}

function btnwOn(){
    daily.style.display = 'none';
    weekly.style.display = 'block';
    idk.style.display = 'none';
}

function btnidkOn(){
    daily.style.display = 'none';
    weekly.style.display = 'none';
    idk.style.display = 'block';
}

btnd.addEventListener('click', btndOn);
btnw.addEventListener('click', btnwOn);
btnidk.addEventListener('click', btnidkOn);


const audio = document.getElementById('myAudio');

setTimeout(() => {
    audio.play();
    console.log("awafd");
},3000);
