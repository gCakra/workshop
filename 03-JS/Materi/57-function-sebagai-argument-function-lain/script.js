// ============================================
// Materi 83 — Function Sebagai Argument Function Lain
// (Higher-Order Function & Callback Function)
// ============================================

// 📌 KONSEP UTAMA:
// Di JavaScript, function adalah "First-Class Citizen".
// Artinya: Function diperlakukan SAMA seperti tipe data lain (number, string, boolean).
// Jadi, function BISA dimasukkan sebagai ARGUMENT ke dalam function lain!

// Terminology:
// - Callback Function     : Function yang dikirim sebagai argument.
// - Higher-Order Function: Function yang menerima function lain sebagai argument.

// ──────────────────────────────────────────
// 1. ANTIMAINSTREAM: NGINRIM FUNCTION SEBAGAI ARGUMENT
// ──────────────────────────────────────────

// Callback 1: Menyapa santai
const sapaSantai = function (nama) {
  return `Halo bro ${nama}! 👋`;
};

// Callback 2: Menyapa formal
const sapaFormal = function (nama) {
  return `Selamat pagi Bapak/Ibu ${nama}, semoga hari Anda menyenangkan. 🙏`;
};

// Higher-Order Function (menerima callback)
const prosesPenyapaan = function (nama, fnCallback) {
  // Panggil callback yang dikirim lewat parameter
  console.log(fnCallback(nama));
};

// Coba jalankan:
prosesPenyapaan("Garda", sapaSantai); // Output: Halo bro Garda! 👋
prosesPenyapaan("Garda", sapaFormal); // Output: Selamat pagi Bapak/Ibu Garda...

// ⚠️ CATATAN PENTING!
// Perhatikan: kita tulis `sapaSantai`, BUKAN `sapaSantai()`.
// `sapaSantai`   → Mengirim FUNCTION-nya (belum dijalankan).
// `sapaSantai()` → Mengirim HASIL RETURN dari function (langsung dijalankan saat itu juga).

// ──────────────────────────────────────────
// 2. CONTOH NYATA: MENGULANG EKSEKUSI FUNCTION
// ──────────────────────────────────────────

const eksekusiDuaKali = function (fn) {
  fn();
  fn();
};

const lemparDadu = function () {
  const hasil = Math.floor(Math.random() * 6) + 1;
  console.log(`🎲 Hasil lempar dadu: ${hasil}`);
};

eksekusiDuaKali(lemparDadu);

// ──────────────────────────────────────────
// 🏋️ LATIHAN — Kerjakan di bawah ini!
// ──────────────────────────────────────────

// TUGAS 1: Buat dua callback function:
//          - `tambahDua(n)` → return n + 2
//          - `kaliTiga(n)`  → return n * 3
//
//          Lalu buat Higher-Order Function `olahAngka(n, fn)`
//          yang mengembalikan (return) hasil dari pemanggilan fn(n).
//
//          Test dan console.log:
//          olahAngka(5, tambahDua) // Output: 7
//          olahAngka(5, kaliTiga)  // Output: 15

// -- tulis kode Tugas 1 di sini --
const tambahDua = function (n) {
  return n + 2;
};
const kaliTiga = function (n) {
  return n * 3;
};

const olahAngka = function (n, fn) {
  return fn(n);
};

console.log(olahAngka(5, tambahDua));
console.log(olahAngka(5, kaliTiga));
// TUGAS 2: Buat Higher-Order Function `ulangiN(n, action)`
//          yang menjalankan callback `action()` sebanyak `n` kali pakai loop.
//
//          Buat callback `tepukTangan()` yang me-log "👏 Tepuk tangan!"
//
//          Panggil: ulangiN(3, tepukTangan)
//          Output di console harus muncul 3x:
//          👏 Tepuk tangan!
//          👏 Tepuk tangan!
//          👏 Tepuk tangan!

// -- tulis kode Tugas 2 di sini --
const ulangiN = function (n, action) {
  for (let i = 0; i < n; i++) {
    action();
  }
};
const tepukTangan = function () {
  console.log("👏 Tepuk tangan!");
};

ulangiN(3, tepukTangan);

// TUGAS 3: Menurutmu, apa bedanya `olahAngka(5, tambahDua)`
//          dengan `olahAngka(5, tambahDua(5))`?
//          Kenapa yang kedua akan bikin error / salah perilaku?
//          Tulis jawabanmu sebagai komentar di bawah.

// -- tulis jawaban Tugas 3 di sini --
//  - Tanda kurung () artinya "Jalankan SEKARANG JUGA!".
// - Jadi sebelum olahAngka dipanggil, tambahDua(5) langsung berjalan dan menghasilkan angka 7.
// - Berarti kamu sama saja memanggil: olahAngka(5, 7).
// - Di dalam olahAngka, dia bakal mencoba menjalankan 7(5).
// - JavaScript bakal protes dan melempar Error: TypeError: fn is not a function (karena angka 7 itu bukan function, gak bisa dipanggil pakai tanda kurung!).
//
