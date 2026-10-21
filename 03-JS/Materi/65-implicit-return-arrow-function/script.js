/* ============================================
   Materi 91 — Return Secara Implisit Dari Arrow Function
   ============================================ */

// =============================================
// 📖 PENJELASAN
// =============================================
// Di materi 90 kamu udah kenal arrow function. Sekarang kita belajar
// trik paling POWERFUL-nya: IMPLICIT RETURN.
//
// 🧠 Analoginya gini:
//   Arrow function biasa (explicit return) itu kayak kamu ke warung,
//   buka tas, ambil uang, kasih ke penjual, bilang "ini uangnya" → ribet.
//
//   Implicit return itu kayak kamu langsung SODORIN uangnya tanpa
//   bilang apa-apa → singkat, to the point!
//
// 📝 ATURAN:
//   Kalau body arrow function CUMA 1 EKSPRESI (1 baris yang menghasilkan nilai),
//   kamu bisa:
//     1. Hapus kurung kurawal { }
//     2. Hapus kata "return"
//     → Nilai otomatis di-return!
//
// Contoh transformasi:
//
//   // STEP 1: Function biasa
//   function tambah(a, b) {
//     return a + b;
//   }
//
//   // STEP 2: Arrow function (explicit return)
//   const tambah = (a, b) => {
//     return a + b;
//   };
//
//   // STEP 3: Arrow function (implicit return) ✨
//   const tambah = (a, b) => a + b;
//
// ⚠️ PENTING:
//   - Implicit return HANYA bisa kalau body-nya 1 ekspresi
//   - Kalau ada 2+ baris / ada if-else → WAJIB pakai { } dan return
//   - Mau return OBJECT secara implisit? Bungkus pakai ( ):
//       const bikinUser = (nama) => ({ nama: nama, aktif: true });
//     Tanpa ( ), JS mengira { } itu body function, bukan object!

// =============================================
// 🏋️ LATIHAN 1 — Singkatkan ke Implicit Return
// =============================================
// Ubah arrow function berikut dari explicit return → implicit return.

// Contoh sudah dikerjakan:
// SEBELUM:
// const spiKucing = () => {
//   return "Meow!";
// };
// SESUDAH:
const spiKucing = () => "Meow!";
console.log("Contoh:", spiKucing());

// a) Singkatkan ke implicit return
// const sapaTeman = (nama) => {
//   return "Halo, " + nama + "!";
// };

// const sapaTeman = ... ← tulis jawaban di sini
const sapaTeman = (nama) => "Halo, " + nama + "!";

console.log("1a:", sapaTeman("Garda")); // "Halo, Garda!"

// b) Singkatkan ke implicit return
// const kaliTiga = (angka) => {
//   return angka * 3;
// };

// const kaliTiga = ... ← tulis jawaban di sini
const kaliTiga = (angka) => angka * 3;
console.log("1b:", kaliTiga(7)); // 21

// c) Singkatkan ke implicit return (1 parameter → kurung boleh dihapus!)
// const kuadrat = (x) => {
//   return x * x;
// };

// const kuadrat = ... ← tulis jawaban di sini
const kuadrat = (angka) => angka * angka;
console.log("1c:", kuadrat(5)); // 25
// =============================================
// 🏋️ LATIHAN 2 — Implicit Return dengan Method Array
// =============================================
// Sekarang kombinasikan implicit return + forEach/map!

const angka = [2, 4, 6, 8, 10];

// a) Gunakan map + implicit return untuk bikin array baru: setiap angka ditambah 1
// const tambahSatu = angka.map( ... )
const tambahSatu = angka.map((item) => item + 1);
console.log("2a:", tambahSatu);
// [3, 5, 7, 9, 11]

// b) Gunakan map + implicit return untuk bikin array baru: setiap angka jadi string "Nomor: X"
const daftarNomor = angka.map((item) => `Nomor: ${item}`);

console.log("2b:", daftarNomor);
// ["Nomor: 2", "Nomor: 4", ...]

// =============================================
// 🏋️ LATIHAN 3 — Implicit Return Object (pakai parentheses!)
// =============================================
// Ingat: return object secara implisit harus dibungkus ( )!

const namaHewan = ["Kucing", "Anjing", "Kelinci"];

// a) Gunakan map + implicit return untuk bikin array of object:
//    Setiap item jadi: { nama: "Kucing", jenis: "hewan" }
//
// const daftarHewan = namaHewan.map( ... )
const daftarHewan = namaHewan.map((hewan) => ({ nama: hewan, jenis: "hewan" }));

console.log("3a:", daftarHewan);
// [ { nama: "Kucing", jenis: "hewan" }, { nama: "Anjing", jenis: "hewan" }, ... ]

// =============================================
// 🛒 LATIHAN 4 — E-Commerce: TokoKu Makin Ringkas!
// =============================================
// Refactor kode e-commerce dari materi 90 pakai implicit return!

const produkToko = [
  { nama: "Kaos Polos", harga: 75000, stok: 12 },
  { nama: "Celana Jeans", harga: 250000, stok: 5 },
  { nama: "Topi Keren", harga: 45000, stok: 20 },
  { nama: "Sepatu Sneakers", harga: 350000, stok: 3 },
  { nama: "Tas Ransel", harga: 180000, stok: 8 },
];

// a) Buat array berisi HANYA nama produk, pakai map + implicit return
//    Hasil: ["Kaos Polos", "Celana Jeans", ...]
// const namaProduk = produkToko.map( ... )
const namaProduk = produkToko.map((item) => item.nama);
// console.log("4a:", namaProduk);

// b) Buat array berisi harga yang sudah diformat, pakai map + implicit return
//    Hasil: ["Rp 75.000", "Rp 250.000", ...]
//    Hint: angka.toLocaleString("id-ID")
// const hargaFormatted = produkToko.map( ... )
const hargaFormatted = produkToko.map(
  (item) => `Rp ${item.harga.toLocaleString("id-ID")}`,
);
// console.log("4b:", hargaFormatted);

// c) Buat array of object baru pakai map + implicit return object!
//    Setiap item jadi: { label: "Kaos Polos", nilai: 900000 }
//    (nilai = harga × stok)
// const inventaris = produkToko.map( ... )
const inventaris = produkToko.map((item) => ({
  label: item.nama,
  nilai: item.harga * item.stok,
}));
// console.log("4c:", inventaris);

// =============================================
// 🔥 BONUS — Kapan TIDAK bisa pakai implicit return?
// =============================================
// Jelaskan di komentar: kenapa function di bawah ini TIDAK bisa
// disingkat jadi implicit return?

// const cekDiskon = (harga) => {
//   if (harga > 200000) {
//     return "Diskon 10%!";
//   } else {
//     return "Belum dapat diskon";
//   }
// };

// Jawab di sini (tulis sebagai komentar):
// alasan = karena ada lebih dari 1 ekspresi dimana implicit return hanya membalikan nilai dengan 1 ekspresi
