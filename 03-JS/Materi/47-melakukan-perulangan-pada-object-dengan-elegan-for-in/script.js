// ============================================
// 🔄 Melakukan Perulangan Pada Object Dengan Elegan: For In — Materi 73
// ============================================
// Jika `for...of` digunakan untuk array, maka `for...in` sangat
// cocok digunakan untuk melakukan perulangan pada properti (key) sebuah Object.
//
// CONTOH:
// const mahasiswa = {
//   nama: 'Garda',
//   jurusan: 'Informatika',
//   angkatan: 2026
// };
//
// for (let key in mahasiswa) {
//   console.log(`${key}: ${mahasiswa[key]}`);
//   // Output:
//   // nama: Garda
//   // jurusan: Informatika
//   // angkatan: 2026
// }
// ============================================

// TUGAS:
// 1. Buatlah sebuah object bernama `gamingConsole` yang memiliki properti:
//    - `name` bernilai 'PlayStation 5'
//    - `manufacturer` bernilai 'Sony'
//    - `releaseYear` bernilai 2020
//    - `price` bernilai 'Rp 8.000.000'
// 2. Gunakan `for...in` loop untuk menampilkan semua property name (key) beserta nilainya (value) ke console.
//
// Contoh Output di console:
// name bernilai PlayStation 5
// manufacturer bernilai Sony
// ... dst

// 🔽 Tulis kode kamu di bawah ini:
const gamingConsole = {
    name: 'Playstation 5',
    manufacturer: 'Sony',
    releaseYear: 2020,
    price: 'Rp 8.000.000'
};
for (let key in gamingConsole){
    console.log(`${key}: ${gamingConsole[key]}`)
}