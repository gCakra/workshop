// --- MATERI 38: OPERATOR PEMBANDING ---

// Analogi:
// Bayangkan kamu ingin menaiki roller coaster di taman bermain.
// Di depan wahana, ada papan pengukur tinggi badan dengan tulisan: "Tinggi minimal 120 cm".
// Petugas akan membandingkan tinggi badanmu dengan angka 120.
// - Apakah tinggi badanmu > 120? (Lebih dari 120)
// - Apakah tinggi badanmu >= 120? (Lebih dari atau sama dengan 120)
//
// Di JavaScript, kita menggunakan "Operator Pembanding" (Comparison Operators) untuk membandingkan dua nilai.
// Hasil dari pembandingan ini SELALU menghasilkan tipe data Boolean: `true` (benar) atau `false` (salah).
//
// Beberapa Operator Pembanding Dasar:
// `>`  : Lebih besar dari
// `<`  : Lebih kecil dari
// `>=` : Lebih besar dari atau sama dengan
// `<=` : Lebih kecil dari atau sama dengan

let tinggiGarda = 165;
let syaratTinggi = 120;

console.log("Apakah Garda boleh naik roller coaster?");
console.log(tinggiGarda >= syaratTinggi); // Output: true

// --- TUGAS GARDA ---
// Skenario: Kamu sedang membuat sistem filter otomatis untuk toko online.
// Sistem ini akan memeriksa apakah harga sebuah barang masuk dalam anggaran (budget) pembeli.
//
// Pembeli memiliki budget sebesar 150000.
// Ada barang dengan harga 175000.
//
// 1. Lengkapi kondisi pembandingan di bawah ini agar bernilai `true` jika hargaBarang LEBIH KECIL ATAU SAMA DENGAN budget.
// 2. Gunakan operator pembanding yang tepat untuk mengisi bagian yang dikosongkan (___)!

let budget = 150000;
let hargaBarang = 175000;

// LENGKAPI KODE DI BAWAH INI:
let masukBudget = hargaBarang ___ budget;

console.log("Apakah barang masuk budget?");
console.log(masukBudget); // Seharusnya menghasilkan: false
