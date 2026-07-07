// --- MATERI 45: CEK KONDISI BERLAPIS LEBIH AMAN (NESTED IF) ---

// Analogi:
// Bayangkan kamu mendaftar sekolah penerbangan ✈️:
// 1. Pintu Pertama: Apakah kamu sehat jasmani?
//    - JIKA SEHAT -> Kamu boleh masuk ke Pintu Kedua: Apakah tinggimu >= 165 cm?
//      - JIKA YA -> "Selamat, kamu diterima!"
//      - JIKA TIDAK -> "Maaf, tinggi badan kurang."
//    - JIKA TIDAK SEHAT -> "Maaf, tidak lulus tes kesehatan."
//
// Di JavaScript, kita bisa menaruh `if` di dalam blok `if` lainnya.
// Blok `if` di dalam hanya akan dievaluasi/dijalankan JIKA `if` pembungkusnya bernilai TRUE.
//
// Contoh:
let username = "garda_dev";
let password = "myPassword";

if (username === "garda_dev") {
    if (password === "myPassword") {
        console.log("Login sukses! Selamat datang, Garda.");
    } else {
        console.log("Password salah!");
    }
} else {
    console.log("Username tidak terdaftar!");
}

// --- TUGAS GARDA ---
// Skenario: Kamu membuat validasi pembuatan password baru agar lebih aman.
// Syarat password aman:
// 1. Panjang password harus minimal 8 karakter (`passwordBaru.length >= 8`).
// 2. Password TIDAK BOLEH mengandung spasi (`passwordBaru.indexOf(" ") === -1`).
//
// Variabel passwordBaru yang diinput user saat ini: "garda 123"
//
// 1. Lengkapi kondisi `if` berlapis di bawah ini untuk memeriksa panjang password dan keberadaan spasi.
// 2. Isi bagian yang dikosongkan (___) agar alur validasinya berjalan dengan benar!

let passwordBaru = "garda 123";

// Cek syarat 1: Panjang password
if (passwordBaru.length >= 8) {
    // Cek syarat 2: Apakah tidak mengandung spasi? (indexOf(" ") bernilai -1)
    ___ (passwordBaru.indexOf(" ") === -1) {
        console.log("Password aman dan valid! ✅");
    } ___ {
        console.log("Password gagal: Tidak boleh mengandung spasi! ❌");
    }
} ___ {
    console.log("Password gagal: Panjang minimal harus 8 karakter! ❌");
}
