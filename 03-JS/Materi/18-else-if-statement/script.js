// --- MATERI 43: ELSE IF STATEMENT MAKIN BANYAK PILIHAN ---

// Analogi:
// Bayangkan kamu sedang membeli tiket bioskop:
// - JIKA umurmu 18 tahun ke atas -> Diberikan tiket Dewasa (Adult).
// - JIKA TIDAK, tapi umurmu di atas 12 tahun -> Diberikan tiket Remaja (Teen).
// - JIKA TIDAK, tapi umurmu di atas 5 tahun -> Diberikan tiket Anak-anak (Child).
//
// Di JavaScript, kita menggunakan `else if` jika kita memiliki lebih dari dua kemungkinan pilihan kondisi.
// Program akan memeriksa kondisi dari atas ke bawah:
// - Jika kondisi pertama FALSE, dia akan lanjut memeriksa kondisi `else if` di bawahnya.
// - Begitu ada kondisi yang bernilai TRUE, blok kodenya dijalankan dan JavaScript akan langsung keluar dari alur pengecekan tersebut (kondisi di bawahnya tidak akan dicek lagi).
//
// Contoh:
let nilai = 85;
let indeksPrestasi = "";

if (nilai >= 90) {
    indeksPrestasi = "A";
} else if (nilai >= 80) {
    indeksPrestasi = "B"; // Ini yang akan dijalankan
} else if (nilai >= 70) {
    indeksPrestasi = "C";
}

console.log("Indeks Prestasi: " + indeksPrestasi);

// --- TUGAS GARDA ---
// Skenario: Kamu sedang membuat sistem pembayaran tol otomatis. 
// Tarif tol berbeda tergantung golongan kendaraan:
// - Golongan 1 (sedan, jip, pickup) -> Tarif: Rp10.000
// - Golongan 2 (truk kecil/sedang) -> Tarif: Rp15.000
// - Golongan 3 (truk besar)        -> Tarif: Rp20.000
//
// Kendaraan yang datang saat ini memiliki variabel `golonganKendaraan = 2`.
//
// 1. Lengkapi blok kode `else if` di bawah ini agar tarif tol diset dengan benar sesuai golongannya.
// 2. Isi bagian yang dikosongkan (___) dengan kata kunci dan kondisi pembanding yang tepat!

let golonganKendaraan = 2;
let tarifTol = 0;

if (golonganKendaraan === 1) {
    tarifTol = 10000;
} else if (golonganKendaraan === 2) {
    tarifTol = 15000;
} else {
    tarifTol = 20000;
}

console.log("Tarif Tol Anda: Rp" + tarifTol);
