// --- MATERI 58: APA ITU OBJECT ---
// Selama ini kita menyimpan banyak data memakai array.
// Array cocok untuk daftar berurutan, misalnya:
//   let buah = ["apel", "jeruk", "mangga"];
//
// Tapi bagaimana kalau kita ingin menyimpan data yang punya "label" jelas?
// Misalnya data satu orang:
//   nama: "Garda"
//   umur: 15
//   hobi: "coding"
//
// Untuk data seperti itu, JavaScript punya struktur bernama OBJECT.
// Object menyimpan data dalam bentuk pasangan:
//   key: value
//
// Analogi: Object seperti kartu identitas 🪪
//   - "nama" adalah label datanya
//   - "Garda" adalah isi datanya
//   - "umur" adalah label datanya
//   - 15 adalah isi datanya
//
// Contoh:
// const siswa = {
//   nama: "Garda",
//   umur: 15,
//   hobi: "coding",
// };
//
// Cara membaca property object:
//   siswa.nama  -> "Garda"
//   siswa.umur  -> 15

// --- TUGAS GARDA ---
// Ikuti petunjuk di bawah ini dengan mengisi bagian kosong `___`!

// 1. Buat object bernama `profil` berisi data berikut:
//    nama: "Garda"
//    umur: 15
//    kota: "Jakarta"
//    Gunakan keyword `const`.
const profil = ___;
console.log("Data profil:", profil);

// 2. Tampilkan nilai property `nama` dari object profil.
//    Petunjuk: profil.nama
console.log("Nama:", ___);

// 3. Tampilkan nilai property `umur` dari object profil.
console.log("Umur:", ___);

// 4. Ubah nilai property `kota` menjadi "Bandung".
//    Petunjuk: profil.kota = "Bandung";
___;
console.log("Setelah kota diubah:", profil);

// 5. Tambahkan property baru bernama `hobi` dengan nilai "coding".
//    Petunjuk: profil.hobi = "coding";
___;
console.log("Setelah tambah hobi:", profil);

// --- EKSPERIMEN OPSIONAL ---
// Coba buat object lain bernama `gameFavorit` yang punya property:
// judul, genre, dan tahunRilis.
