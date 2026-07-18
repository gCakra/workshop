// --- MATERI 65: AWAS PERULANGAN TANPA HENTI (INFINITE LOOP) ---
// Infinite loop = loop yang tidak pernah berhenti karena kondisinya SELALU true.
// Ini salah satu bug paling berbahaya — browser bisa crash / hang.
//
// Contoh BERBAHAYA (JANGAN dijalankan):
// for (let i = 0; i >= 0; i++) {
//   console.log(i); // kondisi i >= 0 selalu true → loop selamanya!
// }
//
// Penyebab umum infinite loop:
// 1. Kondisi tidak pernah jadi false
// 2. Penghitung tidak diupdate (lupa i++ / i--)
// 3. Penghitung bergerak ke arah yang salah

// --- DEMO: Loop yang benar vs yang salah (versi aman) ---
// Loop normal yang BERHENTI:
console.log("=== Loop Normal ===");
for (let i = 1; i <= 5; i++) {
  console.log("Putaran ke-" + i);
}
console.log("Loop selesai!");

// --- TUGAS GARDA ---
// Analisis kode-kode di bawah ini — mana yang infinite loop? Mana yang normal?
// Jawab dengan komentar di bawah tiap blok.

// Contoh A:
// for (let i = 10; i > 0; i--) { console.log(i); }
// Jawaban A: normal

// Contoh B:
// for (let i = 1; i <= 5; i--) { console.log(i); }
// Jawaban B: infinite

// Contoh C:
// for (let i = 0; i < 3; i++) { console.log("Halo!"); }
// Jawaban C: normal

// Contoh D:
// for (let i = 5; i >= 0; i++) { console.log(i); }
// Jawaban D: infinite

// --- TUGAS PRAKTIK ---
// Perbaiki loop yang rusak di bawah ini agar tidak infinite loop
// dan bisa menampilkan angka 1 sampai 5.
console.log("\n--- Loop Rusak (perbaiki!) ---");
// Loop yang salah (sudah dikomentari biar browser tidak crash):
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Tulis loop yang sudah diperbaiki di sini:

