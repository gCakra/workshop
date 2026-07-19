// --- MATERI 67: PENGENALAN NESTED LOOP ---
// Nested loop adalah loop di dalam loop.
// Loop luar berjalan sekali, loop dalam berjalan sampai selesai.
// Loop luar berjalan lagi, loop dalam mengulang lagi dari awal.
// Analogi: Jam. Jarum detik (loop dalam) harus berputar 60x baru jarum menit (loop luar) geser 1x.

// console.log("=== Contoh Nested Loop ===");
// for (let i = 1; i <= 3; i++) {
//   console.log(`Loop luar ke-${i}`);
//   for (let j = 1; j <= 2; j++) {
//     console.log(`  Loop dalam ke-${j}`);
//   }
// }

// --- TUGAS GARDA ---
// 1. Buat nested loop.
//    Loop luar dari 1 sampai 5.
//    Loop dalam dari 1 sampai 3.
//    Cetak: "Minggu ke-[luar], Hari ke-[dalam]"
console.log("\n--- Tugas 1 ---");
// Tulis kodemu di sini
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`Minggu ke-${i}, Hari ke${j}`)
  }
}


// 2. Buat papan catur sederhana 3x3 menggunakan # dan spasi.
//    Hasilnya harus seperti ini di console:
//    # # #
//     # # #
//    # # #
// Hint: Gunakan satu variabel string, tambahkan karakter di loop dalam,
//       lalu cetak (console.log) dan reset string-nya di loop luar.
//       Gunakan `if ((i + j) % 2 === 0)` untuk menentukan # atau spasi.
console.log("\n--- Tugas 2 ---");
// Tulis kodemu di sini

for (let i = 1; i <= 3; i++) {
  let baris = "";
  if (i % 2 === 0) {
    baris += " "
  }
  for (let j = 1; j <= 3; j++) {
    baris += "# "
  }
  console.log(baris)
}
