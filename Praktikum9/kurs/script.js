const inp_valas = document.getElementById("valas");
const inp_nilai = document.getElementById("nilai");
const inp_rupiah = document.getElementById("rupiah");

const kurs =  {
    "usd": 9.915,
    "rm": 874,
    "sgd": 13.472,
    "yen": 120,
    "eur": 15.888,
    "rial": 3.592
}
function hitung_kurs() {
    const nilai = document.getElementById("nilai").value;
    const valas = inp_valas.value;
    console.log(nilai, valas);
    const rupiah = nilai * kurs[valas];
    inp_rupiah.value = rupiah;
}

inp_valas.addEventListener("change", hitung_kurs );
inp_nilai.addEventListener("input", hitung_kurs );