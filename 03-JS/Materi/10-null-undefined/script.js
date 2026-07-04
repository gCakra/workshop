// --- MATERI 35: MENGENAL NULL DAN UNDEFINED ---

// Analogi:
// 1. UNDEFINED (Belum ditentukan/tidak terdefinisi):
//    Bayangkan kamu punya dompet baru yang masih kosong dan belum pernah kamu isi apa-apa, bahkan kamu belum masukin kartu/uang sama sekali. Pas orang tanya "Isi dompetmu apa?", jawabannya "Belum tahu/belum ada isinya". Di JavaScript, variabel yang dideklarasikan tapi belum diberi nilai adalah `undefined`.
//
// 2. NULL (Sengaja dikosongkan):
//    Bayangkan dompet kamu awalnya ada isinya, tapi sekarang kamu sengaja mengosongkannya (mengeluarkan semua uangnya) karena mau dicuci atau disimpan. Kamu secara sadar berkata "Dompet ini sengaja saya kosongkan (null)". Di JavaScript, `null` digunakan ketika kita secara eksplisit ingin menyatakan bahwa variabel tersebut TIDAK memiliki nilai.

// 1. Contoh Undefined
let dompetGarda;
console.log("Status dompetGarda:", dompetGarda); // Output: undefined
console.log("Tipe data dompetGarda:", typeof dompetGarda); // Output: undefined

// 2. Contoh Null
let keranjangBelanja = null;
console.log("Status keranjangBelanja:", keranjangBelanja); // Output: null
console.log("Tipe data keranjangBelanja:", typeof keranjangBelanja); // Output: object (Ini adalah bug bersejarah di JS, tapi biarkan saja 😂)

// --- TUGAS GARDA ---
// Skenario: Kamu sedang membuat sistem login pengguna untuk sebuah website.
// 1. Buat variabel bernama 'currentUser' yang nilainya sengaja belum ada karena belum ada user yang login (gunakan null).
// 2. Buat variabel bernama 'userBio' yang baru dideklarasikan saja tanpa diberi nilai (sehingga otomatis bernilai undefined).
// 3. Tampilkan kedua variabel tersebut menggunakan console.log()!

// Tulis kode kamu di bawah ini:
let currentUser = null;
let userBio;
console.log(currentUser);
console.log(userBio);
