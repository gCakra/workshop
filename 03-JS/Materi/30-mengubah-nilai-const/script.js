// --- MATERI 56: MENGUBAH NILAI CONST DENGAN ARRAY ---
// Di JavaScript, kita sering menggunakan `const` untuk mendeklarasikan array.
// Tapi, apa arti `const` (constant) di sini?
//
// 1. Yang TIDAK BOLEH: Re-assignment (Menunjuk variabel ke nilai/array baru)
//    const buah = ["Apel", "Jeruk"];
//    buah = ["Mangga", "Pisang"]; // ❌ ERROR: TypeError: Assignment to constant variable.
//
// 2. Yang BOLEH: Memodifikasi ISI di dalam array (karena alamat memori array tetap sama!)
//    const buah = ["Apel", "Jeruk"];
//    buah[0] = "Mangga";       // ✅ BOLEH! Index 0 diganti jadi "Mangga"
//    buah.push("Pisang");      // ✅ BOLEH! Menambah "Pisang" ke dalam array
//
// Analogi: `const` seperti kotak kayu besar yang dipaku ke lantai (tidak bisa diganti dengan kotak lain),
// tapi kamu bebas memasukkan, mengeluarkan, atau menata barang di dalam kotak tersebut! 📦✨

// --- TUGAS GARDA ---
// Ikuti petunjuk di bawah ini dengan mengisi bagian kosong `___`!

// 1. Buat sebuah array konstan bernama `hobi` berisi 3 hobi favorit kamu.
//    Gunakan keyword `const`.
const hobi = ["nulis", "renang", "coding"];
console.log("Hobi awal:", hobi);

// 2. Ubah hobi pertama (index 0) menjadi hobi baru pilihanmu menggunakan index.
hobi[0] = "nonton";
console.log("Hobi setelah diubah:", hobi);

// 3. Tambahkan satu hobi baru di bagian akhir array menggunakan method push().
hobi.push("game");
console.log("Hobi setelah push:", hobi);

// 4. (Eksperimen / Opsional) Coba hilangkan tanda komentar pada 2 baris di bawah ini,
//    lalu lihat apa yang terjadi di console browser/terminal saat mencoba me-reassign variabel!
//    Setelah melihat error-nya, beri komentar kembali agar tidak merusak kode kita.
// hobi = ["Membaca", "Menulis", "Koding"];
// console.log("Hobi setelah re-assignment:", hobi);
