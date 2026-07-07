// --- MATERI 39: PERBEDAAN SAMA DENGAN DUA (==) DAN TIGA (===) ---

// Analogi:
// Bayangkan kamu mau masuk ke klub eksklusif.
// - `==` (Loose Equality / Sama Dengan Dua) adalah penjaga pintu yang santai. Dia hanya melihat nilainya saja.
//   Jika kamu membawa string `"5"` dan angka `5`, bagi dia "ah, nilainya mirip-mirip" karena JS akan memaksa mengubah tipe data (Type Coercion).
// - `===` (Strict Equality / Sama Dengan Tiga) adalah penjaga pintu yang sangat ketat! Dia mengecek TIPE DATA dan juga NILAINYA.
//   Bagi dia, string `"5"` (teks) dan angka `5` (angka) adalah dua hal yang berbeda.
//
// Contoh:
console.log("Perbandingan == (Loose):");
console.log(5 == "5"); // Output: true (karena nilainya 'mirip' setelah diubah tipenya)

console.log("Perbandingan === (Strict):");
console.log(5 === "5"); // Output: false (karena tipenya beda, Number vs String)

// Kebalikan dari itu adalah != (tidak sama dengan loose) dan !== (tidak sama dengan strict).
// 5 != "5"   -> false (karena dianggap sama)
// 5 !== "5"  -> true (karena memang beda tipe datanya)

// --- TUGAS GARDA ---
// Skenario: Kamu membuat sistem login. User memasukkan PIN mereka.
// Input dari form web biasanya berbentuk String: `"1234"`
// Di database, PIN disimpan dalam bentuk Number: `1234`
//
// Kita ingin memvalidasi dengan sangat aman (Strict) agar tipe data input harus cocok dengan database.
//
// 1. Lengkapi kode di bawah ini dengan operator perbandingan STRICT (`===` atau `!==`) yang tepat.
// 2. Kita ingin `apakahPinValid` bernilai `true` HANYA JIKA inputPin sama persis nilainya DAN tipe datanya dengan databasePin.

let databasePin = 1234;
let inputPin = "1234";

// LENGKAPI KODE DI BAWAH INI:
let apakahPinValid = databasePin === inputPin;

console.log("Apakah PIN valid?");
console.log(apakahPinValid); // Seharusnya menghasilkan: false (karena tipe datanya beda)
