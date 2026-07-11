// --- MATERI 53: METHOD ARRAY UNSHIFT DAN SHIFT ---
// Kalau push() dan pop() bekerja di akhir array,
// unshift() dan shift() bekerja di awal array.
//
// - unshift() -> menambah item ke AWAL array.
// - shift()   -> mengambil item dari AWAL array dan menghapusnya.
//
// Contoh:
// let antrean = ["Budi", "Siti"];
// antrean.unshift("Andi"); // ["Andi", "Budi", "Siti"]
// let orangPertama = antrean.shift(); // "Andi", antrean jadi ["Budi", "Siti"]

// --- TUGAS GARDA ---
// Skenario: Ada antrean pemain yang ingin masuk ke arena.

let antreanPemain = ["Budi", "Siti"];

// 1. Tambahkan "Andi" ke paling depan antrean menggunakan unshift().
antreanPemain.unshift("andi");

// 2. Cetak antrean setelah Andi masuk.
console.log("Antrean setelah unshift:", antreanPemain);

// 3. Ambil pemain paling depan dari antrean menggunakan shift().
//    Simpan ke variabel `pemainMasuk`.
let pemainMasuk = antreanPemain.shift();

// 4. Cetak pemain yang masuk dan antrean yang tersisa.
console.log("Pemain yang masuk arena:", pemainMasuk);
console.log("Antrean yang tersisa:", antreanPemain);
