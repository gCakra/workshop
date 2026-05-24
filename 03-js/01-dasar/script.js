// ==========================================
// VARIABEL DAN OPERASI DASAR
// ==========================================

// 1. Variabel (Tempat menyimpan data)
let nama = "Programmer";
let umur = 20;

// 2. Menampilkan ke console
console.log("Halo, nama saya " + nama);
console.log("Umur saya tahun depan adalah:");

// ==========================================
// TUGAS KAMU:
// 1. Buat variabel baru bernama 'angka1' dengan nilai 10.
// 2. Buat variabel baru bernama 'angka2' dengan nilai 5.
// 3. Buat variabel bernama 'hasil' yang isinya angka1 ditambah angka2.
// 4. Tampilkan 'hasil' tersebut ke console menggunakan console.log().
// ==========================================

// TULIS DI BAWAH INI
let angka1 = 3;
let angka2 = 5;
let hasil = angka1 + angka2;
console.log(hasil);

if (hasil > 10) {
  console.log("hasilnya besar banget");
} else {
  console.log("hasilnya kecil");
}

function hitungLuasPersegi(sisi) {
  console.log(sisi * sisi);
}

hitungLuasPersegi(10);
