// --- MATERI 55: BEBERAPA METHOD ARRAY YANG SERING DIGUNAKAN LAGI ---
// Kali ini kita belajar method untuk MENCARI data di dalam array:
// 1. indexOf()   -> mencari index pertama dari elemen tertentu. Kalau tidak ada, hasilnya -1.
// 2. includes()  -> mengecek apakah elemen tertentu ada di array. Hasilnya true atau false.
// 3. find()      -> mencari elemen PERTAMA yang memenuhi kondisi (pakai callback function).
// 4. findIndex() -> mencari INDEX elemen pertama yang memenuhi kondisi (pakai callback function).
//
// Contoh:
// let warna = ["merah", "biru", "hijau", "kuning"];
// console.log(warna.indexOf("hijau"));   // 2
// console.log(warna.includes("ungu"));   // false
//
// let angka = [10, 25, 30, 45];
// let hasilFind = angka.find(function(n) { return n > 20; });
// console.log(hasilFind); // 25 (elemen pertama yang > 20)
//
// let hasilIndex = angka.findIndex(function(n) { return n > 20; });
// console.log(hasilIndex); // 1 (index elemen pertama yang > 20)

// --- TUGAS GARDA ---
// Skenario: Mengelola daftar harga produk di toko online.

let hargaProduk = [15000, 25000, 50000, 75000, 100000];
let namaProduk = ["pensil", "buku", "tas", "sepatu", "jaket"];

// 1. Gunakan indexOf() untuk mencari index dari harga 50000.
//    Simpan hasilnya ke variabel `indexHarga` dan cetak.
let indexHarga = hargaProduk.indexOf(50000);
console.log("Index harga 50000:", indexHarga);

// 2. Gunakan indexOf() untuk mencari harga 99999 (yang tidak ada).
//    Simpan hasilnya ke variabel `indexTidakAda` dan cetak.
//    (Hasilnya harus -1 karena tidak ditemukan)
let indexTidakAda = hargaProduk.indexOf(99999);
console.log("Index harga 99999:", indexTidakAda);

// 3. Gunakan includes() untuk mengecek apakah "tas" ada di daftar produk.
//    Simpan hasilnya ke variabel `adaTas` dan cetak.
let adaTas = namaProduk.includes("tas");
console.log("Apakah ada tas?", adaTas);

// 4. Gunakan includes() untuk mengecek apakah "topi" ada di daftar produk.
//    Simpan hasilnya ke variabel `adaTopi` dan cetak.
let adaTopi = namaProduk.includes("topi");
console.log("Apakah ada topi?", adaTopi);

// 5. Gunakan find() untuk mencari harga PERTAMA yang lebih dari 40000.
//    Simpan hasilnya ke variabel `hargaMahal` dan cetak.
let hargaMahal = hargaProduk.find(function (harga) {
    return harga > 40000;
});
console.log("Harga pertama di atas 40000:", hargaMahal);

// 6. Gunakan findIndex() untuk mencari INDEX harga pertama yang lebih dari 40000.
//    Simpan hasilnya ke variabel `indexMahal` dan cetak.
let indexMahal = hargaProduk.findIndex(function (harga) {
    return harga > 40000;
});
console.log("Index harga pertama di atas 40000:", indexMahal);
