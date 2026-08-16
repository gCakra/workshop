// ============================================
// Materi 79 — Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup
// ============================================

// 🎯 TUJUAN:
// Memahami perbedaan Global Scope dan Local Scope (Function Scope),
// serta aturan akses variabel antar scope tersebut.

// ============================================
// 1. Konsep Dasar
// ============================================

// Scope (ruang lingkup) menentukan di mana suatu variabel bisa diakses.
//
// a. Global Scope:
//    Variabel yang dideklarasikan di LUAR function apa pun.
//    Bisa diakses dari MANA SAJA (di dalam function juga bisa).
//
// b. Local Scope (Function Scope):
//    Variabel yang dideklarasikan di DALAM suatu function.
//    Cuma bisa diakses dari DALAM function itu sendiri.
//    Orang luar (kode di luar function) tidak bisa melihat/mengaksesnya.

// Analogi:
// - Global Scope = Fasilitas umum (seperti taman kota). Siapa saja boleh pakai.
// - Local Scope = Kamar pribadi kamu. Orang luar rumah tidak bisa masuk dan
//   memakai barang di dalam kamarmu tanpa izin. Tapi kamu dari dalam kamar
//   tetap bisa melihat pemandangan taman kota (global scope) lewat jendela.

// ============================================
// 2. LATIHAN
// ============================================

// 📝 Tugas 1 (Membaca Variabel Global):
// Buat variabel global bernama "namaSekolah" dengan nilai "SMA Harapan".
// Buat function "tampilkanSekolah". Di dalamnya, lakukan console.log "Sekolah saya di [namaSekolah]".
// Panggil function-nya. (Ingat: function boleh mengakses variabel global).

// -- Tulis kode di sini --


// 📝 Tugas 2 (Membaca Variabel Local):
// Buat function "tokoBuku". Di dalamnya, buat variabel lokal "namaBuku" = "Harry Potter".
// Di LUAR function, coba lakukan console.log(namaBuku).
// Amati error apa yang muncul di console, lalu tulis di baris komentar di bawah tugas ini.

// -- Tulis kode di sini --


// 📝 Tugas 3 (Shadowing / Tumpang Tindih Nama Variabel):
// Buat variabel global "makanan" = "Nasi Goreng".
// Buat function "makanMalam". Di dalamnya:
// - Buat variabel lokal dengan nama yang SAMA: "makanan" = "Sate Ayam".
// - Lakukan console.log(makanan) di dalam function.
// Panggil function makanMalam().
// Di luar function, lakukan console.log(makanan) lagi.
// Amati perbedaannya! Mengapa di dalam bernilai "Sate Ayam" dan di luar tetap "Nasi Goreng"?

// -- Tulis kode di sini --

