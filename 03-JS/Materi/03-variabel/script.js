// ==========================================
// MATERI 28: VARIABEL (LET, CONST, VAR)
// ==========================================

// 1. LET (Bisa diubah/re-assign)
// Analogi: Kotak bekal yang isinya bisa diganti tiap hari.
let tabungan = 1000;
tabungan = 2000; // Berubah jadi 2000
console.log("Tabungan saya:", tabungan);

// TUGAS 1: Buat variabel let bernama 'skor' dengan nilai 0,
// lalu di baris bawahnya ubah nilainya menjadi 10.
// (Ketik di bawah)
let skor = 0;
skor = 10;
console.log("Skor saya:", skor);

// 2. CONST (Constant - Tidak bisa diubah)
// Analogi: Nama lahir, biasanya tetap selamanya.
const namaIbu = "Siti";
// namaIbu = "Ani"; // <-- Ini akan menyebabkan ERROR! Coba buka console browser.

// TUGAS 2: Buat variabel const bernama 'pi' dengan nilai 3.14.
// Coba ubah nilainya menjadi 5 dan lihat error-nya di console.
// (Ketik di bawah)
const pi = 3.14;
console.log("Nilai pi:", pi);

// 3. VAR (Jadul/Old School)
// var adalah cara lama. Sekarang hampir tidak pernah dipakai karena sering bikin bingung.
// TUGAS 3: Cukup tahu saja, jangan gunakan var kecuali terpaksa.

// 4. Update Nilai (Shortcuts)
let nyawa = 3;
nyawa = nyawa + 1; // Cara panjang
nyawa += 1; // Cara pendek
nyawa++; // Cara paling pendek (tambah 1)
console.log("Nyawa akhir:", nyawa);

// TUGAS 4: Kurangi nyawa tadi sebanyak 1 menggunakan cara paling pendek.
// (Ketik di bawah)
nyawa--;
console.log("Nyawa setelah dikurangi:", nyawa);
