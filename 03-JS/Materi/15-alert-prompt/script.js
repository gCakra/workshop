// --- MATERI 40: CONSOLE ALERT DAN PROMPT ---

// Analogi:
// Bayangkan kamu adalah penjaga gerbang benteng:
// - `alert()` itu seperti kamu membunyikan terompet pengumuman 📢. Kamu hanya memberi informasi satu arah ("Ada naga datang!"), dan orang lain hanya bisa menekan tombol OK untuk menutupnya.
// - `prompt()` itu seperti kamu bertanya lewat celah pintu 🗣️: "Siapa namamu?". Pengunjung harus mengetikkan jawaban, lalu jawaban itu dikembalikan kepadamu sebagai data String.
//
// Contoh Alert:
// alert("Halo! Ini adalah pesan dari alert. 😉");
//
// Contoh Prompt:
// let nama = prompt("Siapa nama kamu?");
// console.log("Nama yang dimasukkan: " + nama);

// --- TUGAS GARDA ---
// Skenario: Kamu sedang membuat halaman web interaktif yang menyapa pengunjung secara personal.
// 
// 1. Mintalah nama pengunjung dengan menggunakan perintah `prompt()`. Berikan pesan di dalamnya: "Siapa nama kamu?"
// 2. Simpan hasil input tersebut ke dalam variabel `namaPengunjung`.
// 3. Tampilkan pop-up selamat datang menggunakan `alert()`. 
//    Pesan alert harus menyapa pengunjung dengan nama mereka, misalnya: "Selamat datang, [namaPengunjung]! 🚀"
//
// Catatan: Isilah bagian yang dikosongkan (___) di bawah ini!

// LENGKAPI KODE DI BAWAH INI:
let namaPengunjung = ___( "Siapa nama kamu?" );

if (namaPengunjung) {
    ___( "Selamat datang, " + namaPengunjung + "! 🚀" );
}
