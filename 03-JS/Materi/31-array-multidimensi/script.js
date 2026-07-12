// --- MATERI 57: ARRAY MULTIDIMENSI ATAU NESTED ARRAY ---
// Selama ini kita hanya membuat array 1 dimensi (satu baris data).
// Tapi bagaimana jika di dalam array, ada array lagi di dalamnya?
// Itulah yang disebut **Array Multidimensi** atau **Nested Array**!
//
// Contoh sederhana:
//   const matriks = [
//     [1, 2, 3],    // ← ini array pertama (baris 0)
//     [4, 5, 6],    // ← ini array kedua (baris 1)
//     [7, 8, 9]     // ← ini array ketiga (baris 2)
//   ];
//
// Cara mengakses elemen dalam array multidimensi:
//   matriks[baris][kolom]
//   matriks[0][0] = 1
//   matriks[0][1] = 2
//   matriks[1][2] = 6
//
// Analogi: Seperti lemari bertingkat! 🗄️
//   - Angka pertama [baris] = lantai ke berapa (0 = lantai dasar)
//   - Angka kedua [kolom] = nomor rak di lantai tersebut
//   - Jadi matriks[1][2] = lantai ke-2, rak ke-3

// --- TUGAS GARDA ---
// Ikuti petunjuk di bawah ini dengan mengisi bagian kosong `___`!

// 1. Buatlah array multidimensi bernama `kelas` berisi nama-nama siswa dalam 2 kelompok.
//    Kelompok 1: "Budi", "Siti", "Andi"
//    Kelompok 2: "Rina", "Dodi", "Maya"
//    Gunakan keyword `const`.
const kelas = [
  ["Budi", "Siti", "Andi"],
  ["Rina", "Dodi", "Maya"],
];
console.log("Data kelas:", kelas);

// 2. Akses dan tampilkan nama siswa di kelompok 1, posisi ke-2 (index 1) menggunakan kelas[?][?].
//    (Seharusnya menampilkan "Siti")
console.log("Siswa kelompok 1 posisi 2:", kelas[0][1]);

// 3. Tambahkan nama "Fajar" ke akhir kelompok 2 menggunakan method push().
//    Petunjuk: akses dulu kelompok-nya, baru push.
//    kelas[?].push("Fajar");
kelas[1].push("Fajar");
console.log("Setelah push:", kelas);

// 4. Ubah nama "Budi" (kelompok 1, posisi 1) menjadi "Bagus" menggunakan index.
//    kelas[?][?] = "Bagus";
kelas[0][0] = "Bagus";
console.log("Setelah diubah:", kelas);

// 5. Tampilkan jumlah anggota di kelompok 1 menggunakan property .length
//    kelas[?].length
console.log("Jumlah anggota kelompok 1:", kelas[0].length);

// --- EKSPERIMEN OPSIONAL ---
// Coba buat array 3 dimensi! (array di dalam array di dalam array lagi)
const tigaDimensi = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log("tigaDimensi[1][0][1] =", tigaDimensi[0][1][0]);
