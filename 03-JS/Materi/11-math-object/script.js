// --- MATERI 36: MENGENAL OBJECT MATH & ANGKA ACAK ---

// Analogi:
// Math object itu seperti "Kotak Perkakas Matematika" (Toolbox) yang sudah disediakan oleh JavaScript.
// Kita tidak perlu membuat rumus pembulatan atau pengacak angka dari nol. Kita tinggal memanggil
// perkakas yang kita butuh dari dalam kotak tersebut!

// 1. Math.PI (Konstanta Pi)
console.log("Nilai PI:", Math.PI); // Output: 3.141592653589793

// 2. Pembulatan Angka:
// a. Math.round() -> Membulatkan ke angka terdekat (seperti pembulatan uang biasa).
console.log("Round 4.4:", Math.round(4.4)); // 4
console.log("Round 4.7:", Math.round(4.7)); // 5

// b. Math.floor() -> Membulatkan ke BAWAH (memangkas desimal, mirip lantai).
console.log("Floor 4.9:", Math.floor(4.9)); // 4

// c. Math.ceil() -> Membulatkan ke ATAS (selalu naik, mirip langit-langit/ceiling).
console.log("Ceil 4.1:", Math.ceil(4.1)); // 5

// 3. Pangkat & Absolut:
// a. Math.pow(x, y) -> x pangkat y
console.log("2 pangkat 3:", Math.pow(2, 3)); // 8

// b. Math.abs() -> Mengubah angka negatif menjadi positif (nilai mutlak)
console.log("Absolut -10:", Math.abs(-10)); // 10

// 4. Menghasilkan Angka Acak (Math.random()):
// Math.random() menghasilkan angka desimal acak dari 0 (inklusif) sampai kurang dari 1 (eksklusif).
let acakDesimal = Math.random();
console.log("Angka acak desimal (0 s.d <1):", acakDesimal);

// Cara membuat angka acak bulat (misal dadu 1 sampai 6):
// 1. Kalikan dengan 6 -> mendapatkan angka dari 0 s.d <6
// 2. Bulatkan ke bawah dengan Math.floor() -> mendapatkan angka bulat 0 sampai 5
// 3. Tambahkan 1 -> mendapatkan angka bulat 1 sampai 6
let lemparDadu = Math.floor(Math.random() * 6) + 1;
console.log("Hasil lempar dadu acak (1-6):", lemparDadu);


// --- TUGAS GARDA ---
// Skenario: Kamu sedang membuat game petualangan sederhana (RPG).
// 1. Buatlah variabel bernama 'attackPower' yang nilainya diacak dari 10 sampai 20 (inklusif).
//    (Petunjuk: Rumus acak antara min s.d max adalah: Math.floor(Math.random() * (max - min + 1)) + min)
// 2. Buatlah variabel bernama 'criticalHit' yang berisi hasil pembulatan ke ATAS dari angka desimal 15.7.
// 3. Tampilkan kedua variabel tersebut menggunakan console.log() dengan penjelasan yang jelas (gunakan template literals)!

// Tulis kode kamu di bawah ini:
