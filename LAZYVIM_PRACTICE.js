/**
 * ⚡ SESI LATIHAN LAZYVIM (5-10 MENIT)
 *
 * Instruksi:
 * 1. Jangan gunakan arrow keys! Gunakan h, j, k, l.
 * 2. Ikuti tantangan di setiap blok komentar.
 * 3. Jika salah, tekan 'u' (undo).
 */

// --- TANTANGAN 1: NAVIGASI CEPAT ---
// MISI: Lompat ke kata "TARGET" di bawah dan hapus kata tersebut.
// TRIK: Gunakan '/' lalu ketik TARGET, atau gunakan 'f'/'F'.
const nav1 = "Lari ke sana, lari ke sini, cari dan hapus aku.";

// MISI: Pergi ke akhir baris ini dan tambahkan titik koma (;)
// TRIK: Tekan '$' lalu 'a' atau langsung 'A'.
const nav2 = "Aku lupa kasih titik koma di akhir baris ini";

// --- TANTANGAN 2: EDITING SAKTI (Operator + Motion) ---
// MISI: Ganti isi di dalam tanda kutip ini menjadi "Garda Hebat"
// TRIK: Letakkan kursor di dalam kutip, tekan 'ci"' (change inner ")
const edit1 = "Garda Hebat";

// MISI: Hapus satu kata "SANGAT" di bawah ini.
// TRIK: Letakkan kursor di kata tersebut, tekan 'diw' (delete inner word).
const edit2 = "Belajar Javascript itu  sangat menyenangkan!";

// MISI: Copy baris di bawah ini dan paste tepat di bawahnya.
// TRIK: Tekan 'yy' lalu 'p'.
const edit3 = "Copy aku satu kali saja ya.";

const edit3 = "Copy aku satu kali saja ya.";

// --- TANTANGAN 3: VISUAL BLOCK (Multi-cursor ala Vim) ---
// MISI: Tambahkan tulisan "const " di depan setiap baris di bawah ini secara bersamaan.
// TRIK:
// 1. Letakkan kursor di huruf 'a' baris pertama.
// 2. Tekan Ctrl+v (Visual Block).
// 3. Tekan 'j' 2 kali untuk blok 3 baris.
// 4. Tekan 'I' (Shift + i).
// 5. Ketik "const " (pake spasi).
// 6. Tekan 'Esc' dan tunggu 1 detik.
const item1 = "Apel";
const item2 = "Jeruk";
const item3 = "Mangga";

// --- TANTANGAN 4: LAZYVIM LEADER KEYS ---
// MISI:
// 1. Buka file explorer (Neo-tree) -> Space + e
// 2. Cari file 'README.md' di explorer, tapi jangan dibuka, tutup lagi -> Space + e
// 3. Format file ini agar rapi -> Space + c + f
// 4. Save file ini -> Space + f + s

console.log(
  "Latihan Selesai! Kamu siap lanjut ke materi Template Literals? 🚀",
);
