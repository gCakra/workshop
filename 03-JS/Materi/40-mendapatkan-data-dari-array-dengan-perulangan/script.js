// --- MATERI 66: MENDAPATKAN DATA DARI ARRAY DENGAN PERULANGAN ---
// Array menyimpan banyak data dalam satu variabel.
// Dengan for loop, kita bisa mengambil data satu per satu berdasarkan index.

const namaBuah = ["Apel", "Mangga", "Jeruk", "Pisang"];

console.log("=== Daftar Buah ===");
for (let i = 0; i < namaBuah.length; i++) {
  console.log(namaBuah[i]);
}

// --- TUGAS GARDA ---
// Isi bagian-bagian di bawah ini sendiri ya.

// 1. Buat array berisi 5 nama hewan, lalu tampilkan semuanya satu per satu.
console.log("\n--- Tugas 1 ---");
const hewan = ["sapi", "banteng", "kuda", "anjing", "kucing"];
for (let i = 0; i < hewan.length; i++) {
  console.log(hewan[i]);
}

// 2. Buat array angka, lalu tampilkan angka-angkanya dan hitung totalnya.
console.log("\n--- Tugas 2 ---");
const angka = [10, 20, 30, 40, 50]; // ganti angka 0 dengan angka pilihanmu
let total = 0;
for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
  total += angka[i];
}
console.log("Total:", total);

// 3. Tampilkan data array berikut dalam format:
// "Nama: ..., Umur: ..."
console.log("\n--- Tugas 3 ---");
const dataOrang = ["garda", 21, "abi", 21]; // ganti ___ dan 0 dengan data pilihanmu
for (let i = 0; i < dataOrang.length; i += 2) {
  console.log(`Nama: ${dataOrang[i]}, Umur: ${dataOrang[i + 1]}`);
}

