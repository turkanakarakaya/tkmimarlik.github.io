var idleTimer; // Değişken, imleç hareket etmediği süreyi takip etmek için

function startIdleTimer() {
    idleTimer = setTimeout(function () {
var answer = confirm("Hala aramızda mısınız?");
if (answer) {
}
    }, 10000); // 10 saniye bekleyip uyarı mesajını görüntüler
}

function resetIdleTimer() {
    clearTimeout(idleTimer); // Süreyi sıfırla
    startIdleTimer(); // Yeniden başlat
}


// İmleç hareket ettiğinde süreyi sıfırlar
document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keypress", resetIdleTimer);

// Sayfa yüklendiğinde timer'ı başlatır ve kullanıcıya günün saatine göre selam verir
window.onload = function () {
   startIdleTimer();


    // Saat ve tarih gösterme
    setInterval(function () {
var date = new Date();
var formattedDate = date.toLocaleDateString();
var time = date.toLocaleTimeString();

document.getElementById("datetime").innerHTML = formattedDate + " " + time;
    }, 1000); // Her 1 saniyede bir günceller

    // Fuarın başlangıç tarihi
    var fuarBaslangicTarihi = new Date(2024, 11, 31, 10, 0, 0); // 2024-12-31 10:00:00
    updateCountdown(fuarBaslangicTarihi);

    // Sayfa yüklendiğinde timer'ı başlatır
    startIdleTimer();
};

// Geri sayımı güncelleyen fonksiyon
function updateCountdown(targetDate) {
    setInterval(function () {
var currentDate = new Date();
var timeDiff = targetDate - currentDate;

var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
    "Fuara Kalan Süre: " +
    days + " gün " +
    hours + " saat " +
    minutes + " dakika " +
    seconds + " saniye";
    }, 1000); // Her 1 saniyede bir günceller
}
