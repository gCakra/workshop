// ============================================
// Materi 81 — Lexical Scope
// ============================================

// 🎯 TUJUAN:
// Memahami bagaimana nested function (fungsi di dalam fungsi) berinteraksi dengan variabel,
// serta arah aksesibilitas variabel dari dalam ke luar (bukan sebaliknya).

// ============================================
// 1. Konsep Dasar
// ============================================

// Di JavaScript, kita bisa membuat function di dalam function (nested function).
//
// Lexical Scope menentukan bahwa:
// - Inner Function (fungsi di dalam) bisa mengakses variabel yang dideklarasikan
//   di Outer Function (fungsi luar yang membungkusnya) maupun variabel global.
// - Outer Function (fungsi luar) TIDAK bisa mengakses variabel dari Inner Function.
//
// Kenapa disebut "Lexical"? Karena pencarian variabel ditentukan saat kode ditulis (lexing time),
// berdasarkan posisi fisik kode itu berada, bukan saat kode dipanggil/dieksekusi.

// Contoh Struktur:
// function outer() {
//   let nama = "Budi";
//
//   function inner() {
//     // inner() bisa mengakses `nama` karena berada di lingkup pembungkusnya (outer).
//     console.log(nama);
//   }
// }

// ============================================
// 2. LATIHAN
// ============================================

// 📝 Tugas 1 (Nested Function Sederhana):
// Buat function bernama "induk". Di dalamnya:
// - Buat variabel "namaAyah" dengan nilai "Joko".
// - Buat function di dalamnya bernama "anak".
// - Di dalam function "anak", tampilkan console.log dengan template literal: "Nama ayah saya adalah [namaAyah]".
// - Panggil function "anak()" di dalam "induk" (tepat setelah deklarasi function anak).
// - Terakhir, panggil function "induk()" di bagian paling luar.

// -- Tulis kode di sini --
function induk() {
  let namaAyah = "Joko";
  function anak() {
    console.log(`Nama ayah saya adalah ${namaAyah}`);
  }
  anak();
}

induk();

// 📝 Tugas 2 (Akses Satu Arah):
// Kita ingin membuktikan kalau Outer Function tidak bisa membaca variabel milik Inner Function.
// Buat function "indukDua". Di dalamnya:
// - Buat function "anakDua" yang memiliki variabel lokal "mainan" = "Mobil Remot".
// - Panggil function "anakDua()".
// - Di dalam "indukDua" (tapi di LUAR "anakDua"), coba lakukan console.log(mainan).
// - Panggil "indukDua()" di luar.
// Amati apakah terjadi error, lalu beri komentar pada baris console.log(mainan) tersebut beserta pesan errornya.

// -- Tulis kode di sini --
function indukDua() {
  function anakDua() {
    let mainan = "Mobil Remot";
  }
  anakDua()
  console.log(mainan)
}
// indukDua()

// 📝 Tugas 3 (Nested Multi-level):
// Hubungan lexical scope bisa sangat dalam. Mari buat 3 tingkat fungsi!
// Buat function "negara". Di dalamnya:
// - Buat variabel "namaNegara" = "Indonesia".
// - Buat function "provinsi". Di dalamnya:
//   - Buat variabel "namaProvinsi" = "Jawa Barat".
//   - Buat function "kota". Di dalamnya:
//     - Lakukan console.log yang menggabungkan kedua variabel di atas: "[namaProvinsi] ada di [namaNegara]".
//     - Panggil function kota().
//   - Panggil function provinsi().
// - Panggil function negara().
// Jalankan dan pastikan tidak ada error!

// -- Tulis kode di sini --
function negara() {
  let namaNegara = "Indonesia"
  function provinsi() {
    let namaProvinsi = "Jawa Barat"
    function kota() {
      console.log(`${namaProvinsi} ada di ${namaNegara}`)
    }
    kota()
  }
  provinsi()
}
negara()
