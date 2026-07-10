// --- MATERI 47: OPERATOR LOGIC OR (||) ---

// Analogi:
// Bayangkan kamu mau masuk ke gedung konser musik 🎫:
// Untuk mendapatkan diskon tiket masuk, kamu cukup memenuhi SALAH SATU saja:
// 1. Apakah kamu punya kartu pelajar?
// 2. Apakah kamu punya voucher diskon?
//
// Di JavaScript, kita menggunakan simbol `||` (ATAU / OR).
// Cukup salah satu kondisi bernilai TRUE, maka seluruh blok akan bernilai TRUE.
// JIKA punya kartu pelajar ATAU punya voucher diskon -> "Dapat diskon! 🎟️"
// JIKA dua-duanya FALSE -> "Bayar penuh! ❌"

let punyaKartuPelajar = false;
let punyaVoucherDiskon = true;

if (punyaKartuPelajar || punyaVoucherDiskon) {
    console.log("Selamat, kamu berhak mendapatkan diskon tiket masuk! 🎟️");
} else {
    console.log("Maaf, kamu harus membayar harga tiket normal. ❌");
}

// --- TUGAS GARDA ---
// Skenario: Kamu ditunjuk membuat program kasir gerbang bioskop gratis khusus anak-anak! 🎬
// Syarat masuk bioskop GRATIS:
// 1. Usia di bawah 6 tahun (`usia < 6`)
// 2. ATAU tinggi badan di bawah 110 cm (`tinggi < 110`)
//
// Variabel anak saat ini:
// Usianya 7 tahun, tapi tinggi badannya 105 cm.
//
// 1. Lengkapi kondisi `if` di bawah menggunakan operator `||`.
// 2. Isi bagian yang kosong (___) agar sistem bisa memvalidasi dengan benar!

let usia = 7;
let tinggi = 105;

// Gabungkan syarat usia di bawah 6 tahun ATAU tinggi di bawah 110 cm!
if (usia < 6 || tinggi < 110) {
    console.log("Hore, anak boleh masuk bioskop secara GRATIS! 🍿🎈");
} else {
    console.log("Anak harus membeli tiket masuk reguler. ❌");
}
