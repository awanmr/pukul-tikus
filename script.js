const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const start = document.querySelector('.start');
const span = document.querySelector('span');
let tanahSebelumnya;
let selesai;
let nilai;

start.addEventListener('click', function () {
    selesai = false;
    nilai = 0;
    cetakSkor();
    tikusTanah();
    setTimeout(() => {
        selesai = true;
    }, 20000);
})
tikus.forEach((e, i) => {
    e.addEventListener('click', function () {
        this.parentNode.classList = 'tanah';
        nilai++
        cetakSkor();
    })
})
function cetakSkor() {
    span.textContent = nilai;
}
function randomTanah() {
    const indexTanah = Math.floor(Math.random() * tanah.length);
    if (indexTanah == tanahSebelumnya) {
        return randomTanah();
    }
    tanahSebelumnya = indexTanah;
    return indexTanah;
}
function tikusTanah() {
    const random = randomTanah();
    const waktu = Math.round(Math.random() * (800 - 300) + 300);
    tanah[random].classList.add('tikus-muncul');
    setTimeout(() => {
        tanah[random].classList.remove('tikus-muncul');
        if (selesai) {
            return false;
        }
        tikusTanah();
    }, waktu);
}