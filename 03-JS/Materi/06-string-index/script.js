// --- MATERI 31: INDEX & LENGTH STRING ---
// Analogi: Bayangkan String itu seperti barisan antrean tiket.
// 1. Length: Adalah jumlah total orang di antrean tersebut.
// 2. Index: Adalah nomor posisi orang. TAPI, di pemrograman, hitungnya mulai dari 0!

let kata = "GARDA";

// Mengetahui jumlah karakter (Length)
console.log("Jumlah karakter:", kata.length); // Output: 5

// Mengambil karakter spesifik berdasarkan posisi (Index)
// G A R D A
// 0 1 2 3 4
console.log("Huruf pertama (index 0):", kata[0]); // G
console.log("Huruf ketiga (index 2):", kata[2]); // R

// --- TUGAS GARDA ---
let kalimat = "BELAJAR JS";

// 1. Berapa jumlah karakter (length) dari variabel 'kalimat'? (Ingat: Spasi juga dihitung!)
let totalKarakter = kalimat.length;

// 2. Ambil huruf "J" dari variabel 'kalimat' menggunakan index dan simpan di variabel 'hurufJ'
let hurufJ = kalimat[8];

// 3. Apa yang terjadi kalau kita panggil index yang tidak ada? (Contoh: kalimat[50])
// Coba simpan hasilnya di variabel 'hasilGaib'
let hasilGaib = kalimat[50];

// Tampilkan semua di console
console.log("Total:", totalKarakter);
console.log("Huruf J:", hurufJ);
console.log("Hasil Gaib:", hasilGaib);
