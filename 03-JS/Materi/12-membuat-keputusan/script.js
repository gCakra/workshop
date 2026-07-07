// --- MATERI 37: BAGAIMANA MEMBUAT KEPUTUSAN DI DALAM CODE ---

// Analogi:
// Hidup kita penuh dengan pilihan. Bayangkan kamu sedang berdiri di depan pintu bioskop.
// Petugas akan bertanya: "Berapa umurmu?"
// - JIKA umurmu 17 tahun ke atas -> "Silakan masuk, boleh menonton."
// - JIKA TIDAK (umur di bawah 17) -> "Maaf, kamu belum cukup umur."
//
// Di dalam pemrograman, alur ini disebut "Control Flow" atau "Conditional Statement".
// Kode kita tidak lagi berjalan lurus dari baris 1 sampai akhir, melainkan bisa bercabang
// mengambil jalan yang berbeda tergantung pada apakah suatu kondisi bernilai TRUE atau FALSE.

// Struktur Dasar Keputusan (Preview):
// JIKA (kondisi benar) {
//     Jalankan kode ini
// }

let hariHujan = true;

console.log("Persiapan sebelum keluar rumah...");

if (hariHujan) {
    console.log("Hasil keputusan: Bawa payung! ☔");
}

console.log("Perjalanan dimulai.");

// --- TUGAS GARDA ---
// Skenario: Kamu sedang membuat sistem keamanan untuk mesin ATM.
// Mesin ATM hanya akan mengeluarkan uang JIKA saldo nasabah mencukupi.
//
// 1. Lengkapi kondisi di dalam tanda kurung `if` di bawah ini.
//    Kondisi yang diinginkan: saldo harus lebih besar atau sama dengan jumlahTarikan.
// 2. Silakan lengkapi bagian yang dikosongkan (___) di bawah ini agar kode berjalan dengan benar!

let saldo = 500000;
let jumlahTarikan = 200000;

// LENGKAPI KODE DI BAWAH INI:
if (saldo >= jumlahTarikan) {
    console.log("Transaksi sukses! Uang sedang disiapkan... 💵");
}
