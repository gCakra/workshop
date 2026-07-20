// --- MATERI 69: PERULANGAN MENGGUNAKAN PERINTAH WHILE ---
// While loop mengulang blok kode SELAMA kondisi bernilai true.
// Berbeda dengan for loop, while loop cocok ketika kita tidak tahu
// pasti berapa kali perulangan harus berjalan.

// Sintaks:
// while (kondisi) {
//   // kode yang diulang
// }

// --- CONTOH 1: Hitung mundur ---
console.log("=== Hitung Mundur ===");
let hitungMundur = 5;
while (hitungMundur > 0) {
  console.log(hitungMundur);
  hitungMundur--;
}
console.log("🚀 Meluncur!");

// --- CONTOH 2: While vs For ---
// For loop cocok kalau kita TAHU berapa kali mau mengulang.
// While loop cocok kalau kita TIDAK TAHU — tergantung kondisi tertentu.

console.log("\n=== Contoh: Menumpuk Buku ===");
let tinggiBuku = 0;
let jumlahBuku = 0;
while (tinggiBuku < 30) {
  jumlahBuku++;
  const tebalBuku = Math.ceil(Math.random() * 8) + 2; // tebal acak 2-10 cm
  tinggiBuku += tebalBuku;
  console.log(`Buku ke-${jumlahBuku}: tebal ${tebalBuku} cm → total tinggi ${tinggiBuku} cm`);
}
console.log(`Tumpukan melebihi 30 cm setelah ${jumlahBuku} buku.`);

// --- TUGAS GARDA ---
// Kamu punya saldo rekening Rp 100.000.
// Setiap hari kamu belanja Rp 15.000.
//
// Tugas:
// 1. Gunakan while loop untuk mencetak saldo setiap hari setelah belanja.
//    Format: "Hari ke-[n]: Saldo Rp [sisa]"
// 2. Loop berhenti ketika saldo TIDAK CUKUP untuk belanja lagi (< 15000).
// 3. Setelah loop selesai, cetak: "Sisa saldo akhir: Rp [sisa]"
//
// Hint: Kondisi while-nya → selama saldo >= 15000

console.log("\n--- Tugas ---");
let saldo = 100000;
const belanja = 15000;
let hari = 0;

// Tulis kodemu di sini
while (saldo >= belanja) {
  hari++;
  saldo -= belanja
  console.log(`Hari ke-${hari}: Saldo Rp ${saldo}`)
}
console.log(`Sisa saldo akhir: Rp ${saldo}`)
