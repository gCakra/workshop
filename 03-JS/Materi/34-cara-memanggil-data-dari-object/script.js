// --- MATERI 60: CARA MEMANGGIL DATA DARI OBJECT ---
// Object menyimpan data dalam bentuk key: value.
// Sekarang kita belajar bagaimana CARA MEMANGGIL datanya.
//
// Ada 2 cara utama:
// 1. Dot notation  -> object.key
// 2. Bracket notation -> object["key"]
//
// Contoh:
// const siswa = {
//   nama: "Garda",
//   umur: 15,
//   kota: "Jakarta",
// };
//
// console.log(siswa.nama);
// console.log(siswa["umur"]);
//
// Bracket notation berguna kalau nama key disimpan di variabel.

// --- DEMO ---
const siswa = {
  nama: "Garda",
  umur: 15,
  kota: "Jakarta",
  hobi: "coding",
};
console.log("Data siswa:", siswa);
console.log("Nama pakai dot:", siswa.nama);
console.log("Umur pakai bracket:", siswa["umur"]);

const keyKota = "kota";
console.log("Kota pakai variabel:", siswa[keyKota]);

// --- TUGAS GARDA ---
// Ikuti petunjuk di bawah ini dengan mengisi bagian kosong `___`!

// 1. Buat object bernama `profil` dengan property:
//    nama: "Garda"
//    umur: 15
//    kelas: "9A"
const profil = {
  nama: "Garda",
  umur: 15,
  kelas: "9A",
};

// 2. Tampilkan nilai property `nama` menggunakan dot notation.
console.log("Nama:", profil.nama);

// 3. Tampilkan nilai property `umur` menggunakan bracket notation.
console.log("Umur:", profil["umur"]);

// 4. Simpan string "kelas" ke dalam variabel `key` lalu tampilkan nilai property `kelas`.
const key = "kelas";
console.log("Kelas:", profil[key]);

// 5. Tampilkan gabungan teks menggunakan template literal:
//    "Halo, nama saya Garda dan saya dari kelas 9A"
console.log(
  `Halo, nama saya ${profil.nama} dan saya dari kelas ${profil.kelas}`,
);

// --- EKSPERIMEN OPSIONAL ---
// Coba ambil property yang belum ada, misalnya profil.alamat.
// Apa hasilnya?
