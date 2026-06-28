// --- MATERI 34: TEMPLATE LITERALS ---

// Analogi: Template Literals itu kayak "Surat Undangan" yang udah ada titik-titiknya.
// Kita tinggal isi titik-titik itu pake variabel, tanpa perlu ribet pake tanda plus (+).

// 1. Cara Lama (Concatenation) - Ribet dan gampang salah spasi
let nama = "Garda";
let umur = 20;
let kalimatLama =
  "Halo, nama saya " + nama + " dan umur saya " + umur + " tahun.";
console.log("Cara Lama:", kalimatLama);

// 2. Cara Baru (Template Literals) - Pake Backtick ( ` ) di sebelah angka 1
// Kita pake sintaks ${variabel} buat masukin datanya.
let kalimatBaru = `Halo, nama saya ${nama} dan umur saya ${umur} tahun.`;
console.log("Template Literals:", kalimatBaru);

// --- TUGAS GARDA ---
let produk = "Keyboard Mechanical";
let harga = 500000;
let jumlah = 2;

// Tugas: Buatlah kalimat menggunakan Template Literals untuk variabel 'nota'
// Hasil yang diharapkan: "Anda membeli 2 Keyboard Mechanical dengan total harga Rp. 1000000"
// Petunjuk: Di dalam ${ } kamu juga bisa melakukan perhitungan matematika lho! (jumlah * harga)

let nota = `Anda membeli ${jumlah} ${produk} dengan total harga Rp.${harga * jumlah}`;

console.log("Nota Pembelian:", nota);
