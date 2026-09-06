// ============================================
// Materi 86 — This Adalah Keyword Sakti
// ============================================

// 📌 KONSEP UTAMA:
// Keyword `this` merujuk ke OBJECT yang sedang mengesekusi method tersebut.
//
// Bayangkan `this` seperti kata ganti "saya/diriku sendiri" di dunia nyata:
// "Nama saya Garda, umur saya 20 tahun." -> "saya" merujuk ke diri Garda sendiri!

// ──────────────────────────────────────────
// 1. PENGGUNAAN `this` DALAM METHOD OBJECT
// ──────────────────────────────────────────

const kucing = {
  nama: "Mimi",
  ras: "Persia",
  bersuara() {
    // `this.nama` mengakses property `nama` milik object `kucing` ini sendiri!
    return `${this.nama} si kucing ${this.ras} bersuara: Meonggg! 🐱`;
  },
};

console.log(kucing.bersuara());
// Output: Mimi si kucing Persia bersuara: Meonggg! 🐱

// ──────────────────────────────────────────
// 🏋️ LATIHAN — Kerjakan di bawah ini!
// ──────────────────────────────────────────

// TUGAS 1: Buat object `mahasiswa` dengan property:
//          - `nama`: String
//          - `jurusan`: String
//          - `angkatan`: Number
//          - method `perkenalan()` → me-return string:
//            "Halo! Nama saya [nama], mahasiswa [jurusan] angkatan [angkatan]."
//          Wajib gunakan keyword `this`!
//
//          Test dan console.log method `perkenalan()`!

// -- tulis kode Tugas 1 di sini --
const mahasiswa = {
  nama: "Garda",
  jurusan: "TI",
  angkatan: 1,
  perkenalan() {
    return `Halo! Nama saya ${this.nama}, mahasiswa ${this.jurusan} angkatan ${this.angkatan}`;
  },
};

console.log(mahasiswa.perkenalan());

// TUGAS 2: Buat object `dompet` dengan property:
//          - `pemilik`: String (contoh: "Garda")
//          - `saldo`: Number (contoh: 100000)
//          - method `simpanUang(jumlah)` → menambahkan `jumlah` ke `this.saldo`,
//            lalu me-return string: "Berhasil menyimpan [jumlah]. Saldo [pemilik] sekarang: [saldo]"
//          - method `tarikUang(jumlah)`  → mengurangkan `jumlah` dari `this.saldo`,
//            lalu me-return string: "Berhasil menarik [jumlah]. Saldo [pemilik] sekarang: [saldo]"
//
//          Test simpanUang(50000) dan tarikUang(20000), lalu console.log hasilnya!

// -- tulis kode Tugas 2 di sini --
const dompet = {
  pemilik: "Garda",
  saldo: 100000,
  simpanUang(jumlah) {
    this.saldo += jumlah;
    return `Berhasil menyimpan ${jumlah}. Saldo ${this.pemilik} sekarang: ${this.saldo}`;
  },
  tarikUang(jumlah) {
    this.saldo -= jumlah;
    return `Berhail menarik ${jumlah}. Saldo ${this.pemilik} sekarang: ${this.saldo}`;
  },
};

console.log(dompet.simpanUang(50000));
console.log(dompet.tarikUang(20000));
// TUGAS 3: Pertanyaan Singkat:
//          Jika kita mengubah `nama` pada object `mahasiswa` di Tugas 1 secara langsung
//          (misal: `mahasiswa.nama = "Budi"`), apakah hasil dari `mahasiswa.perkenalan()` akan ikut berubah?
//          Jelaskan alasannya secara singkat di komentar!

// -- tulis jawaban Tugas 3 di sini --
// tidak tahu
