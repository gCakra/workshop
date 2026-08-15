// ============================================
// 🎯 Game Tebak Angka — Materi 71
// ============================================
// Kombinasi: while loop, break, prompt(), Math.random()
//
// ATURAN GAME:
// - Komputer pilih angka acak 1–10
// - User menebak lewat prompt()
// - Kalau salah → kasih petunjuk "Terlalu besar" / "Terlalu kecil"
// - Kalau benar → ucapkan selamat + tampilkan jumlah percobaan
// - User bisa ketik "quit" untuk menyerah
// ============================================

// LANGKAH 1: Buat angka acak 1–10
// Rumus: Math.floor(Math.random() * 10) + 1
// Simpan di variabel `angkaRahasia`
// 🔽 Tulis kode kamu di sini:
let angkaRahasia = Math.floor(Math.random() * 10) + 1;

// LANGKAH 2: Buat variabel untuk tracking
// - `tebakan`   → null (belum ada tebakan)
// - `percobaan` → 0 (counter berapa kali nebak)
// 🔽 Tulis kode kamu di sini:
let tebakan = null;
let percobaan = 0;


// LANGKAH 3: Buat while loop
// Kondisi: selama `tebakan` TIDAK SAMA dengan `angkaRahasia`, terus looping
// Di dalam loop:
//   a. Minta input pakai prompt("Tebak angka 1-10:")
//   b. Kalau user ketik "quit" → alert("Menyerah ya? Angkanya: " + angkaRahasia) lalu `break`
//   c. Ubah input jadi Number (pakai Number() atau parseInt())
//   d. Tambah `percobaan` + 1
//   e. Cek:
//      - Kalau tebakan > angkaRahasia → console.log("Terlalu besar! Coba lagi.")
//      - Kalau tebakan < angkaRahasia → console.log("Terlalu kecil! Coba lagi.")
//      - Kalau sama → console.log("🎉 BENAR! Kamu butuh " + percobaan + " percobaan!")
// 🔽 Tulis kode kamu di sini:
while (tebakan !== angkaRahasia) {
  tebakan = prompt("tebak angka 1-10");
  if (tebakan == "quit") {
    alert("Menyerah ya? Angkanya: " + angkaRahasia)
    break;
  }
  tebakan = Number(tebakan)
  percobaan++;
  if (tebakan > angkaRahasia) {
    alert("Terlalu besar! Coba lagi.")
  } else if (tebakan < angkaRahasia) {
    alert("Terlalu kecil! Coba lagi.")
  } else {
    alert("🎉 BENAR! Kamu butuh " + percobaan + " percobaan!")
  }
}


