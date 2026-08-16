// ============================================
// Materi 78 — Statement Return Pada Function
// ============================================

// 🎯 TUJUAN:
// Memahami fungsi keyword "return" untuk mengembalikan
// nilai dari function agar bisa disimpan atau diolah lagi.

// ============================================
// 1. Konsep Dasar
// ============================================

// Sampai sekarang, kita selalu pakai console.log() di dalam function.
// Tapi, console.log() cuma MENAMPILKAN nilai ke layar, tidak memberikan
// nilai tersebut untuk dipakai di kode selanjutnya.
//
// Keyword "return" mengembalikan nilai ke tempat function dipanggil.
// Selain itu, "return" langsung MENGHENTIKAN eksekusi function seketika.

// Analogi:
// Kamu menyuruh robot belanja ke toko (function).
// robot belanja(barang) { ... }
// - Jika robot cuma teriak "Saya beli telur!" (console.log) → Kamu tidak dapat telurnya.
// - Jika robot membawa telur itu lalu memberikan ke kamu (return telur) → Kamu bisa masak telurnya!

// ============================================
// 2. LATIHAN
// ============================================

// 📝 Tugas 1:
// Buat function "tambah" dengan 2 parameter: a, b.
// Di dalamnya, gunakan keyword "return" untuk mengembalikan hasil pertambahan.
// Simpan hasil panggilan tambah(5, 7) ke dalam variabel "hasilTambah".
// Console.log variabel "hasilTambah" di luar function.

// -- Tulis kode di sini --
function tambah(a, b) {
  return a + b;
}
let hasilTambah = tambah(5, 7);
console.log(hasilTambah);

// 📝 Tugas 2:
// Buat function "hitungLuasLingkaran" dengan 1 parameter: "r" (jari-jari).
// Rumus luas lingkaran = 3.14 * r * r.
// Return hasil luasnya.
// Simpan hasilnya di variabel lalu tampilkan di console.

// -- Tulis kode di sini --
function hitungLuasLingkaran(r) {
  return 3.14 * r * r;
}
let jariJari = hitungLuasLingkaran(7);
console.log(jariJari);

// 📝 Tugas 3:
// Function dengan return bisa kita gabungkan nilainya!
// Panggil function "tambah" tadi untuk menjumlahkan hasil dari:
// tambah(3, 4) DITAMBAH hasil tambah(5, 5).
// Contoh: tambah(tambah(3, 4), tambah(5, 5))
// Tampilkan hasil akhirnya di console.

// -- Tulis kode di sini --
let gabungTambah = tambah(tambah(3, 4), tambah(5, 5));

console.log(gabungTambah);

// 📝 Tugas 4 (Tantangan - Return menghentikan function):
// Buat function "cekUmurMengemudi" dengan parameter "umur".
// - Jika "umur" kurang dari 17, langsung RETURN string "Belum boleh mengemudi".
// - Jika 17 ke atas, RETURN string "Sudah boleh mengemudi".
// ⚠️ Gunakan IF tanpa ELSE! Karena jika kondisi IF terpenuhi,
//    keyword return akan langsung menghentikan function sehingga
//    baris di bawahnya tidak akan dieksekusi.
// Panggil dengan umur 15 dan 20, lalu console.log hasilnya.

// -- Tulis kode di sini --
function cekUmurMengemudi(umur) {
  if (umur < 17) {
    return "Belum boleh mengemudi";
  }
  return "Sudah boleh mengemudi";
}

let umur1 = cekUmurMengemudi(15);
let umur2 = cekUmurMengemudi(21);

console.log(umur1);
console.log(umur2);
