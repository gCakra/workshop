// --- MATERI 62: CARA MEMANGGIL OBJECT DI DALAM ARRAY ---
// Sebelumnya kita sudah belajar Array dan Object secara terpisah.
// Sekarang kita gabungkan keduanya!
//
// Array bisa menyimpan tipe data apapun — termasuk object.
// Ketika array berisi object, kita bisa mengakses property
// setiap object menggunakan index + dot notation.
//
// Contoh:
// const daftar = [
//   { nama: "Budi", umur: 20 },
//   { nama: "Ani", umur: 22 }
// ];
// console.log(daftar[0].nama); // "Budi" — ambil object ke-0, property "nama"
// console.log(daftar[1].umur); // 22 — ambil object ke-1, property "umur"
//
// Kalau mau ambil semua data, gunakan perulangan (for loop):
// for (let i = 0; i < daftar.length; i++) {
//   console.log(daftar[i].nama);
// }

// --- DEMO ---
const mahasiswa = [
  { nama: "Rina", jurusan: "TI", ipk: 3.8 },
  { nama: "Dian", jurusan: "SI", ipk: 3.5 },
  { nama: "Rizky", jurusan: "TI", ipk: 3.9 },
];

console.log("=== Daftar Mahasiswa ===");
console.log(mahasiswa[0].nama, "-", mahasiswa[0].jurusan);
console.log(mahasiswa[1].nama, "-", mahasiswa[1].jurusan);
console.log(mahasiswa[2].nama, "-", mahasiswa[2].jurusan);

console.log("\n=== Semua Mahasiswa (pakai for loop) ===");
for (let i = 0; i < mahasiswa.length; i++) {
  console.log(
    `${mahasiswa[i].nama} | Jurusan: ${mahasiswa[i].jurusan} | IPK: ${mahasiswa[i].ipk}`,
  );
}

// --- TUGAS GARDA ---
// Ikuti petunjuk di bawah ini dengan mengisi bagian kosong `___`!

// 1. Buat array `buah` yang berisi minimal 3 object.
//    Setiap object punya property `nama` dan `stok`.
//    Contoh: { nama: "Apel", stok: 50 }

const buah = [
  { nama: "Apel", stok: 50 },
  { nama: "Mangga", stok: 30 },
  { nama: "Jeruk", stok: 45 },
];

// 2. Tampilkan nama buah pertama ke console
console.log("\n--- Tugas 2 ---");
console.log("Buah pertama:", buah[0].nama);

// 3. Tampilkan stok buah kedua ke console
console.log("--- Tugas 3 ---");
console.log("Stok buah kedua:", buah[1].stok);

// 4. Buat perulangan untuk menampilkan SEMUA data buah ke console
//    Format: "Nama: Apel, Stok: 50"
console.log("--- Tugas 4 ---");
for (let i = 0; i < buah.length; i++) {
  console.log(`Nama: ${buah[i].nama}, Stok: ${buah[i].stok}`);
}

// 5. CHALLENGE: Buat array `siswa` berisi minimal 3 object dengan property
//    `nama` dan `nilai`. Lalu buat perulangan untuk menampilkan:
//    "Nama: Budi, Nilai: 85, Grade: A/B/C" (grade dihitung dari nilai).
//    - Nilai >= 80 → Grade A
//    - Nilai >= 60 → Grade B
//    - Selain itu → Grade C

console.log("--- Tugas 5 ---");
const siswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Sari", nilai: 72 },
  { nama: "Andi", nilai: 55 },
];

for (let i = 0; i < siswa.length; i++) {
  let grade;
  if (siswa[i].nilai >= 80) {
    grade = "A";
  } else if (siswa[i].nilai >= 60) {
    grade = "B";
  } else {
    grade = "C";
  }
  console.log(
    `Nama: ${siswa[i].nama}, Nilai: ${siswa[i].nilai}, Grade: ${grade}`,
  );
}

// --- EKSPERIMEN OPSIONAL ---
// Coba akses property dari object yang lebih dalam (nested object di dalam array).
// Misalnya: const users = [{ nama: "Budi", alamat: { kota: "Bandung" } }];
// Lalu coba: console.log(users[0].alamat.kota);
