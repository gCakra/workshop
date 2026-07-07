// --- MATERI 44: ELSE ADALAH PILIHAN TERAKHIR ---

// Analogi:
// Bayangkan kamu sedang memilih pakaian:
// - JIKA cuaca dingin sekali -> Pakai jaket tebal.
// - JIKA TIDAK -> (Untuk cuaca apapun selain dingin sekali: panas, hangat, dll), pakai kaos biasa saja.
//
// Di JavaScript, `else` adalah blok kode penyelamat terakhir.
// Jika semua kondisi `if` dan `else if` di atasnya bernilai FALSE, maka blok `else` ini yang PASTI akan dijalankan.
// Karena dia menangani "semua kasus sisa", `else` TIDAK membutuhkan kondisi di dalam tanda kurung `(...)`.
//
// Contoh:
let nilaiTugas = 55;
if (nilaiTugas >= 60) {
    console.log("Tugas dinyatakan Lulus! 👍");
} else {
    console.log("Tugas dinyatakan Gagal, silakan remedial! 📝");
}

// --- TUGAS GARDA ---
// Skenario: Kamu sedang membuat sistem otentikasi login sederhana untuk website-mu.
// Pengguna memasukkan password, dan kita akan mencocokkannya dengan password yang terdaftar di sistem.
//
// Password terdaftar: "garda123"
// Password input: "sandiSalah"
//
// 1. Lengkapi blok kode di bawah ini agar menampilkan pesan "Login Berhasil! 🔓" jika password cocok,
//    dan menampilkan pesan "Password Salah! Akses ditolak! ❌" jika password tidak cocok.
// 2. Isi bagian yang dikosongkan (___) dengan kata kunci if dan else yang tepat!

let passwordTerdaftar = "garda123";
let passwordInput = "sandiSalah";

___ (passwordInput === passwordTerdaftar) {
    console.log("Login Berhasil! Akses diberikan. 🔓");
} ___ {
    console.log("Password Salah! Akses ditolak. ❌");
}
