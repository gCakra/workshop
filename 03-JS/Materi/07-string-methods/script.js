// --- MATERI 32: STRING METHODS (Part 1) ---

let pesan = "Aku Suka Belajar Koding";

// 1. Mengubah jadi kapital semua
let teriak = pesan.toUpperCase();
console.log("Teriak:", teriak);

// 2. Mengubah jadi kecil semua
let bisik = pesan.toLowerCase();
console.log("Bisik:", bisik);

// --- TUGAS GARDA ---
let inputUser = "   GaRdA GaNtEnG   "; // Abaikan dulu spasinya, fokus ke hurufnya

// 1. Buat variabel 'namaKapital' yang isinya 'inputUser' tapi jadi huruf besar semua
let namaKapital = inputUser.toUpperCase();

// 2. Buat variabel 'namaKecil' yang isinya 'inputUser' tapi jadi huruf kecil semua
let namaKecil = inputUser.toLowerCase();

// 3. Method itu bisa "dirantai" (chained).
// Contoh: kata.toUpperCase().toLowerCase() -> hasilnya bakal kecil semua.
// Coba buat variabel 'namaNormal' yang mengambil 'inputUser' lalu jadikan KAPITAL dulu, baru jadikan KECIL.
let namaNormal = inputUser.toUpperCase().toLowerCase();

console.log("Kapital:", namaKapital);
console.log("Kecil:", namaKecil);
console.log("Normal:", namaNormal);
