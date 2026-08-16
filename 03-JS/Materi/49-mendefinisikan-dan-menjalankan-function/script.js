// ============================================
// 📦 Mendefinisikan Dan Menjalankan Function — Materi 75
// ============================================
// Di materi sebelumnya kita sudah kenalan sama function.
// Sekarang kita dalami lebih lanjut:
//
// 1. MENDEFINISIKAN = membuat "cetakan" function
// 2. MENJALANKAN    = memanggil/mengeksekusi function tersebut
//
// Ingat: function yang hanya didefinisikan TIDAK akan jalan.
// Kita HARUS memanggilnya dengan namaFunction()
//
// CONTOH:
// function hitungLuasPersegi(sisi) {
//   console.log(sisi * sisi);
// }
//
// hitungLuasPersegi(5);  // Output: 25
// hitungLuasPersegi(10); // Output: 100
//
// Perhatikan: function bisa dipanggil berkali-kali
// dengan nilai yang berbeda — inilah kekuatan function!
// ============================================

// TUGAS:
// 1. Buat function bernama `sapaTamu` yang menerima satu parameter `nama`.
//    Di dalamnya, tampilkan ke console:
//    "Halo [nama]! Selamat datang di workshop JavaScript!"
//
// 2. Buat function bernama `hitungUmur` yang menerima satu parameter `tahunLahir`.
//    Di dalamnya, hitung umur (2026 - tahunLahir), lalu tampilkan:
//    "Umur kamu adalah [umur] tahun."
//
// 3. Panggil `sapaTamu` 2 kali dengan nama berbeda.
// 4. Panggil `hitungUmur` 2 kali dengan tahun lahir berbeda.
//
// Contoh Output di console:
// Halo Garda! Selamat datang di workshop JavaScript!
// Halo Budi! Selamat datang di workshop JavaScript!
// Umur kamu adalah 22 tahun.
// Umur kamu adalah 30 tahun.

// 🔽 Tulis kode kamu di bawah ini:
function sapaTamu(nama){
    console.log(`Hallo ${nama}! Selamat datang di workshop JavaScript!`)
}
function hitungUmur(tahunLahir){
    console.log(`Umur kamu adalah ${2026 - tahunLahir} tahun`)
}

sapaTamu('garda');
hitungUmur(2005);
sapaTamu('abi')
hitungUmur(1990)