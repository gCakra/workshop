// --- MATERI 61: CARA MEMBUAT OBJECT BERJALAN (METHOD) ---
// Object tidak hanya bisa menyimpan data (seperti teks atau angka),
// tapi juga bisa menyimpan FUNCTION!
//
// Function yang ada di dalam object disebut dengan METHOD.
// Inilah yang membuat sebuah object bisa melakukan sesuatu (berjalan/beraksi).
//
// Untuk mengakses property lain di dalam object yang sama dari dalam method,
// kita menggunakan keyword `this`.
//
// Contoh:
// const mobil = {
//   merk: "Honda",
//   klakson: function() {
//     return "Tin tin! Mobil " + this.merk + " lewat!";
//   }
// };
// console.log(mobil.klakson()); // Harus pakai kurung buka-tutup () untuk menjalankan function

// --- DEMO ---
const kucing = {
  nama: "Blacky",
  warna: "Hitam",
  bersuara: function() {
    return `Meoow! Kata ${this.nama} si kucing ${this.warna}.`;
  }
};
console.log("Kucingku:", kucing);
console.log(kucing.bersuara());


// --- TUGAS GARDA ---
// Ikuti petunjuk di bawah ini dengan mengisi bagian kosong `___`!

// 1. Lengkapi object `kalkulator` di bawah ini.
//    - Buat property `angka1` dan isi dengan nilai 10.
//    - Buat property `angka2` dan isi dengan nilai 5.
//    - Lengkapi method `tambah` agar menjumlahkan `angka1` dan `angka2`.
//      (ingat gunakan keyword `___` untuk memanggil property milik object sendiri)

const kalkulator = {
  ___: ___,
  ___: ___,
  tambah: function() {
    return ___.___ + ___.___;
  },
  kurang: function() {
    // 2. Buat fungsi untuk mengurangkan angka1 dengan angka2
    return ___.___ ___ ___.___;
  }
};

// 3. Panggil method `tambah` dari object kalkulator
console.log("Hasil tambah:", kalkulator.___());

// 4. Panggil method `kurang` dari object kalkulator
console.log("Hasil kurang:", kalkulator.___());


// 5. Kita buat object baru `player`. Lengkapi method `sapa`!
const player = {
  username: "Garda",
  level: 99,
  sapa: ___() {
    return `Halo, saya ${___.___} dengan level ${___.___}!`;
  }
};

console.log(player.___());

// --- EKSPERIMEN OPSIONAL ---
// Coba buat object yang method-nya menerima parameter (seperti function biasa).
// Misalnya: sapaTeman: function(namaTeman) { return "Halo " + namaTeman; }
