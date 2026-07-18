// --- MATERI 63: PENGENALAN PERULANGAN ---
// Perulangan (loop) dipakai untuk menjalankan kode yang sama berulang kali.
// Bayangkan kamu diminta menulis "Belajar JavaScript" 5 kali.
// Daripada menulis console.log 5 kali, kita pakai perulangan.
//
// Bentuk dasar for loop:
// for (let i = 0; i < 5; i++) {
//   console.log("Belajar JavaScript");
// }
//
// Bagian-bagiannya:
// 1. let i = 0  → nilai awal penghitung
// 2. i < 5      → kondisi; loop berjalan selama kondisi bernilai true
// 3. i++        → menambah i satu per satu setiap putaran

// --- DEMO ---
console.log("=== Mulai Demo ===");

for (let i = 1; i <= 10; i++) {
  console.log(`Putaran ke-${i}`);
}

console.log("=== Demo Selesai ===");

// --- TUGAS GARDA ---
// Isi semua bagian `___` di bawah ini.

// 1. Buat perulangan yang menampilkan angka 1 sampai 5.
console.log("--- Tugas 1 ---");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. Buat perulangan yang menampilkan kata "Semangat belajar!" sebanyak 3 kali.
console.log("--- Tugas 2 ---");
for (let i = 1; i <= 3; i++) {
  console.log("Semangat belajar!");
}

// 3. Buat perulangan mundur dari 5 sampai 1.
// Petunjuk: gunakan i-- untuk mengurangi nilai i satu per satu.
console.log("--- Tugas 3 ---");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// 4. Tampilkan semua angka genap dari 2 sampai 10.
// Petunjuk: nilai i bertambah 2 setiap putaran.
console.log("--- Tugas 4 ---");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 5. Challenge: tampilkan format berikut menggunakan perulangan:
// "Saya belajar perulangan ke-1", lalu sampai ke-5.
console.log("--- Tugas 5 ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Saya belajar perulangan ke-${i}`);
}

// --- EKSPERIMEN OPSIONAL ---
// Ubah kondisi `i <= 3` pada demo menjadi `i <= 10`.
// Perhatikan bagaimana jumlah putaran berubah.
