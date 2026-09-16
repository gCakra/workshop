// ============================================
// Materi 88 — Foreach Method
// ============================================

// 📌 KONSEP UTAMA:
// `forEach()` adalah method bawaan Array di JavaScript yang digunakan untuk
// melakukan PERULANGAN (looping) pada setiap elemen array.
//
// Dibanding `for` loop biasa, `forEach()` jauh lebih rapi & elegan!
//
// Sintaks:
// array.forEach(function (item, index) {
//   // kode yang dijalankan untuk tiap elemen
// });

// ──────────────────────────────────────────
// 1. CONTOH PENGGUNAAN `forEach()`
// ──────────────────────────────────────────

const buah = ["Apel", "Mangga", "Pisang", "Jeruk"];

// Contoh 1: Mengambil nilai item-nya saja
buah.forEach(function (item) {
  console.log(`Buah: ${item}`);
});

// Contoh 2: Mengambil nilai item & urutan index-nya
buah.forEach(function (item, index) {
  console.log(`${index + 1}. ${item}`);
});

// ──────────────────────────────────────────
// 🏋️ LATIHAN — Kerjakan di bawah ini!
// ──────────────────────────────────────────

// TUGAS 1: Diberikan array angka berikut:
const angka = [10, 20, 30, 40, 50];

// Gunakan `forEach()` untuk mengalikan setiap angka dengan 2,
// lalu cetak ke console dengan format: "Hasil 10 x 2 = 20"
// (Lakukan untuk setiap item di dalam array `angka`)

// -- tulis kode Tugas 1 di sini --
angka.forEach(function (item) {
  console.log(`Hasil ${item} x 2 = ${item * 2} `);
});

// TUGAS 2: Diberikan array object nilai siswa berikut:
const daftarSiswa = [
  { nama: "Garda", nilai: 90 },
  { nama: "Budi", nilai: 75 },
  { nama: "Siti", nilai: 88 },
];

// Gunakan `forEach()` untuk mencetak status kelulusan setiap siswa ke console:
// Jika nilai >= 80  ➔ "[nama] LULUS dengan nilai [nilai] 🎉"
// Jika nilai < 80   ➔ "[nama] REMIDI dengan nilai [nilai] 📝"

// -- tulis kode Tugas 2 di sini --
daftarSiswa.forEach(function (item) {
  if (item.nilai >= 80) {
    console.log(`${item.nama} LULUS dengan nilai ${item.nilai}`);
  } else {
    console.log(`${item.nama} REMIDI dengan nilai ${item.nilai}`);
  }
});
// TUGAS 3: Menurut pemahamanmu, apa kelebihan menggunakan `array.forEach()`
//          dibandingkan perulangan `for` konvensional (`for(let i=0; i<arr.length; i++)`)?

// -- tulis jawaban Tugas 3 di sini --
// menurutku ini sangat memudahkan dan tidak bikin bingung tapi aku tidak tau ini karena dia memudahkan atau aku yang mulai terbiasa dengan baris kode
