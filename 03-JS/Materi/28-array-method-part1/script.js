// --- MATERI 54: BEBERAPA METHOD ARRAY YANG SERING DIGUNAKAN ---
// Ada beberapa method array lagi yang sangat berguna untuk manipulasi data, yaitu:
// 1. splice()  -> mengubah isi array dengan menghapus, mengganti, atau menambah elemen.
// 2. slice()   -> membuat salinan sebagian dari array menjadi array baru.
// 3. toString()-> mengubah array menjadi string (elemen dipisahkan koma).
// 4. fill()    -> mengubah semua elemen dalam array dengan nilai statis.
// 5. reverse() -> membalikkan urutan elemen dalam array.
// 6. sort()    -> mengurutkan elemen array.
//
// Contoh:
// let buah = ["apel", "mangga", "jeruk", "anggur"];
// buah.splice(1, 1, "nanas"); // Hapus 1 elemen dari index 1, lalu tambah "nanas"
// console.log(buah); // ["apel", "nanas", "jeruk", "anggur"]
//
// let buahBaru = buah.slice(1, 3); // Ambil dari index 1 sampai sebelum 3
// console.log(buahBaru); // ["nanas", "jeruk"]

// --- TUGAS GARDA ---
// Skenario: Mengelola daftar nilai siswa.

let nilaiSiswa = [80, 95, 70, 60, 90];

// 1. Gunakan splice() untuk mengganti nilai 70 (index 2) dengan 75.
//    Cetak `nilaiSiswa` setelah perubahan.
nilaiSiswa.splice(2, 1, 75);
console.log("Nilai siswa setelah splice (ganti):", nilaiSiswa);

// 2. Gunakan slice() untuk mengambil 3 nilai pertama (dari index 0 sampai sebelum 3)
//    dan simpan ke variabel `tigaNilaiPertama`. Cetak variabel tersebut.
let tigaNilaiPertama = nilaiSiswa.slice(0, 3);
console.log("Tiga nilai pertama:", tigaNilaiPertama);

// 3. Ubah array `nilaiSiswa` menjadi string menggunakan toString().
//    Simpan ke variabel `nilaiString`. Cetak variabel tersebut.
let nilaiString = nilaiSiswa.toString();
console.log("Nilai siswa dalam string:", nilaiString);

// 4. Gunakan fill() untuk mengubah semua nilai di `nilaiSiswa` menjadi 100.
//    Cetak `nilaiSiswa` setelah perubahan.
nilaiSiswa.fill(100);
console.log("Nilai siswa setelah fill:", nilaiSiswa);

// Catatan: setelah fill(), semua nilai jadi 100.
// Jadi reverse() dan sort() tetap valid, tapi hasil array-nya akan terlihat sama.

// 5. Balikkan urutan `nilaiSiswa` menggunakan reverse().
//    Cetak `nilaiSiswa` setelah perubahan.
nilaiSiswa.reverse();
console.log("Nilai siswa setelah reverse:", nilaiSiswa);

// 6. Urutkan `nilaiSiswa` (yang sudah dibalik) dari kecil ke besar menggunakan sort().
//    Cetak `nilaiSiswa` setelah perubahan.
nilaiSiswa.sort((a, b) => a - b);
console.log("Nilai siswa setelah sort:", nilaiSiswa);
