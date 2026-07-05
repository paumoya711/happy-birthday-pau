const btn=document.getElementById("openBtn");
const msg=document.getElementById("message");
const music=document.getElementById("music");

btn.onclick=()=>{

msg.classList.remove("hidden");

music.play();

window.scrollTo({

top:document.body.scrollHeight,
behavior:"smooth"

});

};

const birthday=new Date("2026-07-20");

function updateCountdown(){

const now=new Date();

const diff=now-birthday;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("countdown").innerHTML=

`❤️ Kita sudah melewati ${731} hari sejak ulang tahun ayang ❤️`;
`masih banyak foto kita yang lain yang ga bakal muat di web ini`;

}

updateCountdown();

function openGift(){
  document.getElementById("gallery").classList.remove("hidden");
}

const tombolBuka = document.getElementById('tombolBuka');
const lagu = document.getElementById('laguUlangTahun');

tombolBuka.addEventListener('click', () => {
    // Jalankan musik
    lagu.play().catch(error => {
        console.log("Autoplay diblokir browser, tapi harusnya aman setelah diklik:", error);
    });

    // ... di sini teruskan kode kamu yang buat buka pesan/suratnya ...
});