// ============================================
// Materi 82 — Function Expressions
// ============================================

// 📌 APA ITU FUNCTION EXPRESSION?
// Selama ini kamu pakai "function declaration" → function namaFn() { ... }
// Function Expression = menyimpan function ke dalam VARIABEL.

// ──────────────────────────────────────────
// 1. FUNCTION DECLARATION vs FUNCTION EXPRESSION
// ──────────────────────────────────────────

// Declaration (cara lama yang sudah kamu kenal):
function spiEnam() {
  return "Ini function declaration";
}

// Expression (cara baru — simpan function di variabel):
const spiEnam2 = function() {
  return "Ini function expression";
};

console.log(spiEnam());
console.log(spiEnam2());

// ──────────────────────────────────────────
// 2. NAMED vs ANONYMOUS FUNCTION EXPRESSION
// ──────────────────────────────────────────

// Anonymous (tanpa nama) — paling umum:
const tambah = function(a, b) {
  return a + b;
};

// Named (punya nama sendiri) — berguna untuk debugging:
const kurang = function kurangkan(a, b) {
  return a - b;
};

console.log(tambah(5, 3)); // 8
console.log(kurang(10, 4)); // 6
// console.log(kurangkan(1, 1)); // ❌ Error! nama "kurangkan" tidak bisa diakses dari luar

// ──────────────────────────────────────────
// 3. HOISTING — PERBEDAAN PALING PENTING!
// ──────────────────────────────────────────

// Function Declaration → DI-HOIST (bisa dipanggil SEBELUM ditulis)
// Function Expression  → TIDAK DI-HOIST (harus ditulis dulu, baru dipanggil)

// Uncomment baris di bawah untuk lihat error:
// console.log(hoistTest()); // ❌ ReferenceError!
// const hoistTest = function() { return "Halo!"; };

// ──────────────────────────────────────────
// 🏋️ LATIHAN — Kerjakan di bawah ini!
// ──────────────────────────────────────────

// TUGAS 1: Buat function expression bernama "luas" yang menerima
//          parameter (panjang, lebar) dan return hasilnya.
//          Panggil dan console.log hasilnya dengan nilai 8 dan 5.

// -- tulis kode di sini --
const luas = function(panjang, lebar) {
  return panjang * lebar;
};
console.log(luas(8, 5));

// TUGAS 2: Buat function expression bernama "spiReverse" yang menerima
//          parameter (kalimat) dan return kalimat itu dibalik.
//          Hint: split('').reverse().join('')
//          Panggil dengan "JavaScript" dan console.log hasilnya.

// -- tulis kode di sini --
const spiReverse = function(kalimat) {
  return kalimat.split('').reverse().join('');

};

console.log(spiReverse("JavaScript"))
// TUGAS 3: Apa yang terjadi jika kamu panggil function expression
//          SEBELUM baris definisinya? Tulis jawabanmu sebagai komentar.

// -- tulis jawaban di sini --
// Akan terjadi ReferenceError karena function expression tidak di-hoist.
// Variabel const/let masuk Temporal Dead Zone sebelum baris definisinya.
