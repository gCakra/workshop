// ============================================
// Materi 84 — Function Bernilai Balik Function
// (Factory Function / Returning Function)
// ============================================

// 📌 KONSEP UTAMA:
// Karena function adalah First-Class Citizen di JS,
// selain bisa dijadikan ARGUMENT, function juga bisa di-RETURN oleh function lain!
//
// Function yang me-return function lain sering disebut PABRIK FUNCTION (Factory Function).

// ──────────────────────────────────────────
// 1. CONTOH SEDERHANA: PABRIK SALAM
// ──────────────────────────────────────────

const buatPenyapa = function (sapaan) {
  // Me-return function baru
  return function (nama) {
    return `${sapaan}, ${nama}! 👋`;
  };
};

// Panggil "pabrik" untuk bikin function khusus:
const sapaPagi = buatPenyapa("Selamat pagi");
const sapaMalam = buatPenyapa("Selamat malam");

// Sekarang `sapaPagi` dan `sapaMalam` adalah FUNCTION!
console.log(sapaPagi("Garda")); // Selamat pagi, Garda! 👋
console.log(sapaMalam("Garda")); // Selamat malam, Garda! 👋

// ──────────────────────────────────────────
// 2. CONTOH KEDUA: PABRIK DISKON
// ──────────────────────────────────────────

const buatHitungDiskon = function (persenDiskon) {
  return function (hargaAwal) {
    const potongan = hargaAwal * (persenDiskon / 100);
    return hargaAwal - potongan;
  };
};

const diskon10 = buatHitungDiskon(10);
const diskon50 = buatHitungDiskon(50);

console.log(`Harga baju diskon 10%: Rp${diskon10(100000)}`); // Rp90000
console.log(`Harga baju diskon 50%: Rp${diskon50(100000)}`); // Rp50000

// ──────────────────────────────────────────
// 🏋️ LATIHAN — Kerjakan di bawah ini!
// ──────────────────────────────────────────

// TUGAS 1: Buat Factory Function `buatPembangkitPangkat(pangkat)`
//          yang mengembalikan (return) sebuah function `function(n)`.
//          Function anak tersebut mengembalikan nilai `n ** pangkat` (n pangkat).
//
//          Buat dua function dari pabrik tersebut:
//          - `kuadrat` = buatPembangkitPangkat(2)
//          - `kubik`   = buatPembangkitPangkat(3)
//
//          Test dan console.log:
//          console.log(kuadrat(5)); // Output: 25
//          console.log(kubik(3));   // Output: 27

// -- tulis kode Tugas 1 di sini --
const buatPembangkitPangkat = function (pangkat) {
  return function (n) {
    return n ** pangkat;
  };
};
const kuadrat = buatPembangkitPangkat(2);
const kubik = buatPembangkitPangkat(3);

console.log(kuadrat(5));
console.log(kubik(3));

// TUGAS 2: Buat Factory Function `buatPemeriksaJangkauan(min, max)`
//          yang mengembalikan function `function(nilai)`.
//          Function anak mengembalikan `true` jika nilai berada di antara min dan max (inklusif),
//          dan `false` jika tidak.
//
//          Buat dua pemeriksa dari pabrik tersebut:
//          - `isDewasa`    = buatPemeriksaJangkauan(18, 60)
//          - `isNilaiLulus` = buatPemeriksaJangkauan(75, 100)
//
//          Test dan console.log:
//          console.log(isDewasa(20));     // true
//          console.log(isDewasa(15));     // false
//          console.log(isNilaiLulus(80)); // true

// -- tulis kode Tugas 2 di sini --

const buatPemeriksaJangkauan = function (min, max) {
  return function (nilai) {
    return nilai >= min && nilai <= max;
  };
};

const isDewasa = buatPemeriksaJangkauan(18, 60);
const isNilaiLulus = buatPemeriksaJangkauan(75, 100);
console.log(isDewasa(20));
console.log(isDewasa(15));
console.log(isNilaiLulus(80));
// TUGAS 3: Menurutmu, apa keuntungan menggunakan Factory Function (seperti `buatHitungDiskon`)
//          dibandingkan membuat function terpisah satu per satu (`hitungDiskon10`, `hitungDiskon20`, dll)?
//          Tulis jawabanmu sebagai komentar di bawah.

// -- tulis jawaban Tugas 3 di sini --
// agar tidak perlu membuat banyak function jadi 1 function bisa digunakan berkali kali
