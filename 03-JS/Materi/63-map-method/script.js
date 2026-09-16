// ============================================
// 89. Map Method
// ============================================
// Map mirip forEach — sama-sama looping array.
// Bedanya: map MENGEMBALIKAN array BARU.
// forEach cuma jalan-jalan, map jalan-jalan sambil bawa oleh-oleh 🎁
//
// Syntax:
//   const arrayBaru = array.map(function(item, index, arr) {
//     return /* nilai baru */;
//   });
//
// Aturan emas:
//   - SELALU pakai return di dalam callback map
//   - Array asli TIDAK berubah (immutable pattern)
//   - Panjang array hasil SELALU sama dengan array asal
// ============================================

const output = document.getElementById("output");
function tampilkan(label, data) {
  output.textContent += `${label}\n→ ${JSON.stringify(data)}\n\n`;
}

// ============================================
// TUGAS 1: Kalikan Semua Angka x2
// ============================================
// Diberikan array angka. Gunakan .map() untuk
// menghasilkan array baru yang setiap elemennya x2.
//
// Contoh: [1, 2, 3] → [2, 4, 6]

const angka = [3, 7, 11, 15, 20];

// 🔽 Tulis kode kamu di sini:
const kali2 = angka.map(function (item) {
  return item * 2;
});

// tampilkan("Tugas 1 — Angka x2", hasilKali);
console.log(`Tugas 1 - Angka x2, ${kali2}`);
// ============================================
// TUGAS 2: Ambil Nama Depan Saja
// ============================================
// Dari array nama lengkap, ambil nama depan saja
// menggunakan .map() + .split()
//
// Contoh: ["Budi Santoso", "Ani Wijaya"] → ["Budi", "Ani"]

const namaLengkap = [
  "Garda Pratama",
  "Budi Santoso",
  "Dewi Lestari",
  "Andi Cahyono",
];

// 🔽 Tulis kode kamu di sini:
const namaDepan = namaLengkap.map();
// tampilkan("Tugas 2 — Nama Depan", namaDepan);

// ============================================
// TUGAS 3: Ubah Array Angka Jadi Label Harga
// ============================================
// Dari array angka, ubah jadi string format Rupiah.
// Pakai .toLocaleString("id-ID") untuk format angka.
//
// Contoh: [5000, 12000] → ["Rp 5.000", "Rp 12.000"]

const hargaAngka = [15000, 250000, 1200000, 50000];

// 🔽 Tulis kode kamu di sini:

// tampilkan("Tugas 3 — Label Harga", labelHarga);

// ============================================
// 🛒 TUGAS 4: E-Commerce — Hitung Harga Diskon
// ============================================
// Diberikan array produk toko online.
// Gunakan .map() untuk menghasilkan array BARU
// yang setiap produknya punya properti tambahan:
//   - hargaDiskon: harga setelah dipotong diskon
//   - label: "NamaProduk — Rp xxx.xxx"
//
// Tips: hargaDiskon = harga - (harga * diskon / 100)

const produkToko = [
  { nama: "Kaos Polos", harga: 85000, diskon: 10 },
  { nama: "Celana Jeans", harga: 250000, diskon: 20 },
  { nama: "Sepatu Sneakers", harga: 450000, diskon: 15 },
  { nama: "Topi Baseball", harga: 60000, diskon: 5 },
];

// 🔽 Tulis kode kamu di sini:

// tampilkan("Tugas 4 — Produk + Diskon", produkDiskon);

// ============================================
// TUGAS 5: Map vs forEach — Buktikan Bedanya!
// ============================================
// a) Gunakan forEach untuk mengalikan setiap angka x3,
//    simpan hasilnya ke variabel hasilForEach.
// b) Gunakan map untuk hal yang sama,
//    simpan hasilnya ke variabel hasilMap.
// c) Console.log keduanya. Apa bedanya?

const dataNilai = [10, 20, 30];

// 🔽 Tulis kode kamu di sini:

// tampilkan("Tugas 5a — Hasil forEach", hasilForEach);
// tampilkan("Tugas 5b — Hasil map", hasilMap);
