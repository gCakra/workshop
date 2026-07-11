// --- MATERI 51: MENDAPATKAN NILAI DENGAN INDEX DAN MENGUBAH ISINYA ---
// Analogi: Array seperti deretan loker yang punya nomor urut.
// Untuk mengambil isinya, kita pakai nomor urutnya (index).
// Untuk mengubah isinya, kita juga pakai nomor urutnya.
//
// Ingat: Index selalu dimulai dari 0!
//
// Contoh:
// let namaMurid = ["Budi", "Siti", "Andi"];
// console.log(namaMurid[0]); // Output: Budi (karena index 0 adalah Budi)
//
// Mengubah nilai:
// namaMurid[1] = "Dewi"; // Sekarang array jadi ["Budi", "Dewi", "Andi"]
// console.log(namaMurid); // Output: ["Budi", "Dewi", "Andi"]

// --- TUGAS GARDA ---
// Skenario: Kamu punya daftar belanjaan.

let daftarBelanja = ["sabun", "shampoo", "pasta gigi", "sikat gigi"];

// 1. Ambil dan cetak nama barang di posisi pertama (index 0).
let barangPertama = daftarBelanja[0];
console.log("Barang pertama di daftar belanja:", barangPertama);

// 2. Ambil dan cetak nama barang di posisi ketiga (index 2).
let barangKetiga = daftarBelanja[2];
console.log("Barang ketiga di daftar belanja:", barangKetiga);

// 3. Ubah "shampoo" menjadi "kondisioner".
//    Setelah itu, cetak seluruh `daftarBelanja` untuk memastikan perubahan.
daftarBelanja[1] = "kondisioner";
console.log("Daftar belanja setelah diubah:", daftarBelanja);

// 4. Coba ambil dan cetak nilai dari index yang tidak ada, misalnya index 10.
//    Apa hasilnya?
let barangNonExistent = daftarBelanja[10];
console.log("Barang di index 10:", barangNonExistent);
