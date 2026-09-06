// ============================================
// Materi 85 — Definisi Sebuah Method
// ============================================

// 📌 KONSEP UTAMA:
// Apa itu Method?
// Method HANYALAH sebuah Function yang disimpan sebagai PROPERTY dari sebuah Object!
//
// Jadi:
// - Kalau berdiri sendiri  ➔ Disebut FUNCTION  (contoh: `hitung()`)
// - Kalau nempel di object ➔ Disebut METHOD    (contoh: `kalkulator.hitung()` atau `console.log()`)

// ──────────────────────────────────────────
// 1. CARA MEMBUAT METHOD PADA OBJECT
// ──────────────────────────────────────────

// Cara 1: Menulis function expression biasa sebagai property
const aritmatika = {
  penjumlahan: function (a, b) {
    return a + b;
  },
  pengurangan: function (a, b) {
    return a - b;
  },
};

console.log(aritmatika.penjumlahan(10, 5)); // 15
console.log(aritmatika.pengurangan(10, 5)); // 5

// Cara 2: Shorthand Method Syntax (Cara Modern & Lebih Singkat! ✨)
const hewan = {
  nama: "Mimi",
  // Cukup tulis namaFunction(parameter) { ... } tanpa kata `function`
  bersuara() {
    return "Meonggg! 🐱";
  },
  makan(makanan) {
    return `Mimi sedang makan ${makanan}! 🐟`;
  },
};

console.log(hewan.bersuara()); // Meonggg! 🐱
console.log(hewan.makan("Ikan")); // Mimi sedang makan Ikan! 🐟

// ──────────────────────────────────────────
// 🏋️ LATIHAN — Kerjakan di bawah ini!
// ──────────────────────────────────────────

// TUGAS 1: Buat object `kalkulatorSederhana` yang memiliki 4 method (boleh pakai cara biasa atau shorthand):
//          - `tambah(a, b)` → me-return a + b
//          - `kurang(a, b)` → me-return a - b
//          - `kali(a, b)`   → me-return a * b
//          - `bagi(a, b)`   → me-return a / b
//
//          Test dan console.log ke-4 method tersebut!

// -- tulis kode Tugas 1 di sini --
const kalkulatorSederhana = {
  tambah(a, b) {
    return a + b;
  },
  kurang(a, b) {
    return a - b;
  },
  kali(a, b) {
    return a * b;
  },
  bagi(a, b) {
    return a / b;
  },
};

console.log(kalkulatorSederhana.tambah(5, 6));
console.log(kalkulatorSederhana.kurang(5, 6));
console.log(kalkulatorSederhana.kali(5, 6));
console.log(kalkulatorSederhana.bagi(5, 6));
// TUGAS 2: Buat object `mobil` menggunakan SHORTHAND METHOD SYNTAX dengan 3 method:
//          - `nyalakanMesin()`       → me-return "Broomm! Mesin mobil menyala 🚗"
//          - `tancapGas(kecepatan)`  → me-return "Mobil melaju dengan kecepatan [kecepatan] km/jam!"
//          - `matikanMesin()`       → me-return "Mesin mobil mati 🛑"
//
//          Test dan console.log ketiga method tersebut!

// -- tulis kode Tugas 2 di sini --
const mobil = {
  nyalakanMesin() {
    return "Broomm! Mesin mobil menyala 🚗";
  },
  tancapGas(kecepatan) {
    return `Mobil melaju dengan kecepatan ${kecepatan} km/jam!`;
  },
  matikanMesin() {
    return "Mesin mobil mati 🛑";
  },
};

console.log(mobil.nyalakanMesin());
console.log(mobil.tancapGas(50));
console.log(mobil.matikanMesin());

// TUGAS 3: Menurut pemahamanmu, apa perbedaan antara `Function biasa` dengan `Method`?
//          Berikan 1 contoh Method bawaan JavaScript yang sering kamu pakai selama ini!
//          Tulis jawabanmu sebagai komentar di bawah.

// -- tulis jawaban Tugas 3 di sini --
// menurutku method bisa menggunakan banyak function dan lebih mudah dalam menyimpan dan memanggilnya
