// --- MATERI 68: MENDAPATKAN DATA DARI NESTED ARRAY DENGAN NESTED LOOP ---
// Nested array adalah array di dalam array.
// Kita bisa menggunakan nested loop untuk mengakses setiap elemen di dalamnya.

const daftarBelanja = [
  ["Apel", "Pisang", "Jeruk"],
  ["Wortel", "Bayam", "Kentang"],
  ["Susu", "Keju", "Yogurt"]
];

console.log("=== Contoh Mengakses Nested Array ===");
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(`Kategori ke-${i + 1}:`);
  for (let j = 0; j < daftarBelanja[i].length; j++) {
    console.log(`  - ${daftarBelanja[i][j]}`);
  }
}

// --- TUGAS GARDA ---
// Kamu adalah manajer sebuah bioskop. Kamu punya data kursi penonton yang terisi.
// Data di bawah adalah denah kursi bioskop (3 baris, masing-masing baris punya 4 kursi).
// Nama penonton ditulis di posisinya, sedangkan kursi kosong ditulis null.
//
// Tugas:
// 1. Tampilkan penonton yang ada beserta posisi baris dan kursinya.
//    Format output di console: "Baris [i], Kursi [j]: [Nama Penonton]"
//    Ingat: i dan j pakai angka index asli saja (mulai dari 0).
// 2. Kursi yang bernilai null (kosong) jangan dicetak! Lewati saja.
//
// Hint: Gunakan nested loop untuk mengeksplor denahKursi.
//       Gunakan 'if' untuk memeriksa apakah kursi tersebut 'null' atau bukan.

console.log("\n--- Tugas ---");
const denahKursi = [
  ["Garda", null, "Budi", "Siti"],
  [null, "Rani", "Joko", null],
  ["Andi", "Deni", null, "Eka"]
];

// Tulis kodemu di sini
for (let i = 0; i < denahKursi.length; i++) {
  for (let j = 0; j < denahKursi[i].length; j++) {
    if (denahKursi[i][j] !== null) {
      console.log(`Baris ${i} Kursi ${j} ${denahKursi[i][j]}`)

    }
  }
}
