// --- MATERI 46: OPERATOR LOGIC AND (&&) ---

// Analogi:
// Bayangkan kamu ingin naik wahana Roller Coaster ekstrem 🎢:
// 1. Apakah tinggi badanmu >= 150 cm?
// 2. Apakah kamu bebas dari penyakit jantung?
//
// Di JavaScript, kedua kondisi ini harus bernilai TRUE agar seluruh blok bernilai TRUE.
// Kita menggunakan simbol `&&` (DAN).
// JIKA tinggi >= 150 DAN bebas penyakit jantung -> "Boleh naik! 🎉"
// JIKA salah satu saja FALSE -> "Maaf, dilarang naik! ❌"

let tinggiBadan = 160;
let bebasPenyakitJantung = true;

if (tinggiBadan >= 150 && bebasPenyakitJantung === true) {
    console.log("Silakan naik Roller Coaster! 🎢");
} else {
    console.log("Maaf, kamu belum memenuhi semua kriteria keamanan. ❌");
}

// --- TUGAS GARDA ---
// Skenario: Kita refaktor sistem validasi password baru dari materi sebelumnya agar kodenya lebih ringkas!
// Dulu kita butuh nested if, sekarang kita gabungkan dua syarat dalam satu baris `if` menggunakan `&&`.
// Syarat password aman:
// 1. Panjang password minimal 8 karakter (`passwordBaru.length >= 8`).
// 2. Password tidak mengandung spasi (`passwordBaru.indexOf(" ") === -1`).
//
// Variabel passwordBaru yang diinput user saat ini: "garda123"
//
// 1. Gabungkan kedua syarat di atas di dalam kondisi `if` dengan operator `&&`.
// 2. Isi bagian yang dikosongkan (___) agar alur validasi satu-baris berjalan benar!

let passwordBaru = "garda123";

// Gabungkan syarat 1 DAN syarat 2 di sini!
if (passwordBaru.length >= 8 && passwordBaru.indexOf(" ") === -1) {
    console.log("Password aman dan valid! ✅");
} else {
    console.log(
        "Password gagal: Harus minimal 8 karakter DAN tidak boleh mengandung spasi! ❌"
    );
}
