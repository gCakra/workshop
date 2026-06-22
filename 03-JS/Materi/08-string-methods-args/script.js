// --- MATERI 33: METHOD DENGAN ARGUMENT ---

// 1. .trim() -> Menghapus spasi di awal dan akhir string saja.
let sapa = "   halo garda   ";
let sapaBersih = sapa.trim();
console.log("Trim:", sapaBersih); // "halo garda"

// 2. .indexOf(arg) -> Mencari posisi index dari suatu karakter/kata.
// Kalau tidak ketemu, hasilnya -1.
let kalimat = "Belajar Javascript";
console.log("Index J:", kalimat.indexOf("J")); // 8
console.log("Index Kata 'Script':", kalimat.indexOf("script")); // 12

// 3. .slice(start, end) -> Memotong string dari index 'start' sampai SEBELUM 'end'.
let buah = "Semangka";
let potong = buah.slice(0, 4);
console.log("Hasil Potong:", potong); // "Sema" (index 0,1,2,3)

// --- TUGAS GARDA ---
let pesanRahasia = "   KODING ITU SERU   ";

// 1. Bersihkan spasi di depan dan belakang 'pesanRahasia' simpan di 'bersih'
let bersih = pesanRahasia.trim();

// 2. Cari di index keberapakah kata "ITU" berada di dalam variabel 'bersih'
let posisiItu = bersih.indexOf("ITU");

// 3. Potong kata "KODING" saja dari variabel 'bersih' menggunakan .slice()
// Petunjuk: KODING mulai dari index 0 sampai index 6 (biar angka 6-nya gak ikut dipotong)
let kataKoding = bersih.slice(0, 6);

console.log("Bersih:", bersih);
console.log("Posisi 'ITU':", posisiItu);
console.log("Hanya Kata:", kataKoding);
