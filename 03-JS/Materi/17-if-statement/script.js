// --- MATERI 42: IF STATEMENT PERTAMA YG KAMU PELAJARI ---

// Analogi:
// Bayangkan kamu sedang mengendarai motor. Di depan jalan bercabang, ada rambu: "Jalur Kiri Jalan Terus".
// - JIKA kamu berada di jalur kiri -> Kamu boleh langsung jalan tanpa berhenti.
// - JIKA TIDAK -> Kamu harus berhenti jika lampu merah.
//
// Struktur Penulisan `if`:
// if (kondisi) {
//     // kode yang akan dieksekusi jika kondisi bernilai true
// }
//
// Contoh:
let hariLibur = true;
if (hariLibur) {
    console.log("Saatnya bersantai! 😴");
}

// --- TUGAS GARDA ---
// Skenario: Kamu sedang membuat sistem pengumuman kelulusan ujian sekolah.
// Siswa dinyatakan lulus JIKA nilai ujian mereka lebih besar atau sama dengan Kriteria Ketuntasan Minimal (KKM).
//
// Nilai ujian siswa adalah 75.
// KKM (nilai minimum kelulusan) adalah 70.
//
// 1. Lengkapi penulisan `if` statement di bawah ini.
//    Kondisi yang diinginkan: nilaiUjian lebih besar atau sama dengan kkm.
// 2. Isi bagian yang dikosongkan (___) agar pesan kelulusan bisa dicetak ke console!

let nilaiUjian = 75;
let kkm = 70;

// LENGKAPI KODE DI BAWAH INI:
if (nilaiUjian >= kkm) {
    console.log("Selamat! Anda dinyatakan LULUS ujian! 🎓🎉");
}
