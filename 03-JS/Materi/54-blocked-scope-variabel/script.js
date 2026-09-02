// ============================================
// Materi 80 — Blocked Scope Variabel (Block Scope)
// ============================================

// 🎯 TUJUAN:
// Memahami konsep Block Scope di JavaScript,
// perbedaan antara let/const dengan var di dalam block {} (kondisional, loop, dll).

// ============================================
// 1. Konsep Dasar
// ============================================

// Block Scope:
// Ruang lingkup variabel yang dibatasi oleh sepasang kurung kurawal `{ ... }`
// selain function (misalnya: blok if-else, loop for, loop while, atau sekadar blok biasa).
//
// Aturan penting JavaScript Modern (ES6+):
// 1. Variabel yang dideklarasikan dengan `let` dan `const` memiliki BLOCK SCOPE.
//    Artinya, variabel tersebut HANYA hidup di dalam blok `{}` tempat ia dibuat.
//    Dari luar blok, variabel tersebut tidak bisa diakses.
//
// 2. Variabel yang dideklarasikan dengan `var` TIDAK memiliki block scope.
//    Meskipun ia dibuat di dalam blok `if` atau `for`, ia tetap bocor keluar blok
//    dan bisa diakses dari luar. (Hanya terisolasi jika berada di dalam function scope).
//
// Analogi:
// - let / const = Kartu VIP akses terbatas. Hanya bisa digunakan di ruangan tertentu ({ ... }).
// - var = Kunci master tua. Dia tidak peduli pintu kaca/sekat biasa (block), dia bisa menembusnya.
//   Satu-satunya yang bisa menahan `var` adalah tembok beton tebal, yaitu tembok Function.

// ============================================
// 2. LATIHAN
// ============================================

// 📝 Tugas 1 (Membuktikan Block Scope pada let/const):
// Buat struktur kondisional sederhana:
// if (true) {
//    Buat variabel "aksesVIP" menggunakan let dengan nilai "Selamat datang!".
// }
// Di luar blok if, coba lakukan console.log(aksesVIP).
// Jalankan dan amati error yang keluar, lalu beri komentar pada baris console.log tersebut
// dan tulis nama error-nya di sebelahnya.

// -- Tulis kode di sini --
if (true) {
  let aksesVIP = "Selamat datang!";
}
// console.log(aksesVIP);
//ReferenceError: aksesVIP is not defined

// 📝 Tugas 2 (Membuktikan Kebocoran var):
// Buat struktur kondisional sederhana:
// if (true) {
//    Buat variabel "aksesUmum" menggunakan var dengan nilai "Halo semua!".
// }
// Di luar blok if, lakukan console.log(aksesUmum).
// Amati apakah nilainya muncul atau menghasilkan error! Mengapa hal ini terjadi? (Tulis di komentar).

// -- Tulis kode di sini --
if (true) {
  var aksesUmum = "Halo semua!";
}
console.log(aksesUmum);

// 📝 Tugas 3 (Block Scope di dalam Loop):
// Kita akan melihat bagaimana loop `for` berinteraksi dengan let dan var.
//
// a. Buat loop for menggunakan `var i = 0` yang berjalan 3 kali (i < 3).
//    Di luar loop, lakukan console.log(`Nilai akhir var i: ${i}`).
//
// b. Buat loop for menggunakan `let j = 0` yang berjalan 3 kali (j < 3).
//    Di luar loop, lakukan console.log(`Nilai akhir let j: ${j}`).
//    Amati error yang terjadi pada let j, lalu beri komentar pada baris console.log(j) tersebut.

// -- Tulis kode di sini --
// 3.a
for (var i = 0; i < 3; i++) {}
console.log(`Nilai akhir var i: ${i}`);
//3.b
for (let j = 0; j < 3; j++) {}
// console.log(`Nilai akhir let j: ${j}`);
// ReferenceError: j is not defined
