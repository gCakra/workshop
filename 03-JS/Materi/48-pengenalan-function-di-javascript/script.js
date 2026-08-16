// ============================================
// 📦 Pengenalan Function Di Javascript — Materi 74
// ============================================
// Function = sebuah "mesin" yang kita buat sekali, lalu bisa
// dijalankan berulang kali kapan saja kita butuh.
//
// Analoginya: bayangkan blender di dapur. Kamu buat blender (definisi function),
// lalu setiap kali mau jus, tinggal tekan tombol (panggil function).
// Nggak perlu bikin blender baru setiap mau jus. 🍹
//
// SINTAKS:
// function namaFunction() {
//   // kode yang dijalankan
// }
//
// CONTOH:
// function spiSalam() {
//   console.log('Halo! Selamat datang di workshop!');
// }
//
// spiSalam();  // panggil function → output: Halo! Selamat datang di workshop!
// spiSalam();  // bisa dipanggil lagi → output sama
// ============================================

// TUGAS:
// 1. Buat sebuah function bernama `perkenalan` yang menampilkan 3 baris ke console:
//    - Nama kamu
//    - Hobi kamu
//    - Bahasa pemrograman yang sedang dipelajari
//
// 2. Panggil function `perkenalan` sebanyak 2 kali.
//
// Contoh Output di console (dipanggil 2x):
// Nama saya Garda
// Hobi saya bermain game
// Saya sedang belajar JavaScript
// Nama saya Garda
// Hobi saya bermain game
// Saya sedang belajar JavaScript

// 🔽 Tulis kode kamu di bawah ini:
function perkenalan() {
    console.log("Nama saya Garda")
    console.log("Hobi saya bermain game")
    console.log("Saya sedang belajar JavaScript")
};

perkenalan();
perkenalan();