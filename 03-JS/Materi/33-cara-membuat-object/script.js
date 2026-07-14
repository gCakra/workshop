// --- MATERI 59: CARA MEMBUAT STRUKTUR DATA OBJECT ---
// Di materi sebelumnya, kita sudah tahu apa itu object.
// Sekarang kita belajar beberapa CARA untuk membuat object di JavaScript.
//
// === CARA 1: Object Literal (paling umum) ===
// Langsung tulis data di dalam kurung kurawal { }
//
// const kucing = {
//   nama: "Miko",
//   warna: "oranye",
//   umur: 3,
// };
//
// === CARA 2: Object Kosong, lalu isi satu per satu ===
// Buat object kosong dulu, lalu tambahkan property-nya.
//
// const anjing = {};
// anjing.nama = "Buddy";
// anjing.ras = "Golden";
// anjing.umur = 5;
//
// === CARA 3: Dari variabel yang sudah ada ===
// Kalau kita sudah punya variabel, bisa langsung masukkan ke object.
//
// let judul = "Minecraft";
// let genre = "Sandbox";
// const game = {
//   judul: judul,
//   genre: genre,
// };
//
// Atau versi singkatnya (shorthand):
// const game = { judul, genre };
// Kalau nama variabel SAMA dengan nama key, cukup tulis sekali!
//
// === KAPAN PAKAI YANG MANA? ===
// - Cara 1 (literal) → paling sering, data sudah tahu dari awal
// - Cara 2 (kosong dulu) → data ditambahkan bertahap / dari input
// - Cara 3 (dari variabel) → data sudah tersimpan di variabel lain

// --- DEMO ---
// Cara 1: Object Literal
const hewan = {
  nama: "Miko",
  jenis: "kucing",
  warna: "oranye",
};
console.log("🐱 Cara 1 (literal):", hewan);

// Cara 2: Object kosong, isi bertahap
const kendaraan = {};
kendaraan.merek = "Toyota";
kendaraan.tipe = "Avanza";
kendaraan.tahun = 2023;
console.log("🚗 Cara 2 (kosong lalu isi):", kendaraan);

// Cara 3: Dari variabel (shorthand)
let nama = "Garda";
let umur = 15;
let kota = "Jakarta";
const orang = { nama, umur, kota };
console.log("👤 Cara 3 (dari variabel):", orang);

// --- TUGAS GARDA ---
// Ikuti petunjuk di bawah ini dengan mengisi bagian kosong `___`!

// 1. Buat object `makanan` menggunakan CARA 1 (literal).
//    Isi property: nama → "Nasi Goreng", harga → 15000, pedas → true
const makanan = {
  nama: "Nasi Goreng",
  harga: 15000,
  pedas: true,
};
console.log("🍛 Makanan:", makanan);

// 2. Buat object `minuman` menggunakan CARA 2 (kosong lalu isi).
//    Tambahkan property: nama → "Es Teh", harga → 5000, dingin → true
const minuman = {};
minuman.nama = "Es Teh";
minuman.harga = 5000;
minuman.dingin = true;
console.log("🧊 Minuman:", minuman);

// 3. Buat object `film` menggunakan CARA 3 (dari variabel).
//    Variabel sudah disiapkan di bawah. Gunakan shorthand!
let judul = "Avengers";
let tahun = 2019;
let rating = 8.5;
const film = { judul, tahun, rating };
console.log("🎬 Film:", film);

// 4. Buat object `pemain` menggunakan cara APAPUN yang kamu mau.
//    Isi property: nickname, level, dan senjata.
//    Isi nilainya bebas sesukamu!
const pemain = {
  nickname: "garda",
  level: 8,
  senjata: "Akm 47",
};
console.log("🎮 Pemain:", pemain);
