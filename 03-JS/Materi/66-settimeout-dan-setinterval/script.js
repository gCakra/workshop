/* ============================================
   Materi 92 — Memahami setTimeout & setInterval
   ============================================ */

// =============================================
// 📖 PENJELASAN
// =============================================
// Bayangin kamu lagi di dapur:
//
// 🍳 setTimeout = "Timer oven"
//   Kamu set timer 5 menit → alarm bunyi SEKALI → selesai.
//   "Jalankan kode ini SEKALI setelah X milidetik."
//
//   Sintaks:
//     setTimeout(callback, milidetik);
//     setTimeout(() => { ... }, 2000);  // jalan setelah 2 detik
//
// ⏰ setInterval = "Alarm berulang"
//   Kamu set alarm tiap 1 jam → bunyi terus setiap 1 jam.
//   "Jalankan kode ini BERULANG setiap X milidetik."
//
//   Sintaks:
//     setInterval(callback, milidetik);
//     setInterval(() => { ... }, 1000);  // jalan setiap 1 detik
//
// 🛑 Cara menghentikan:
//   - clearTimeout(idTimer)     → batalkan setTimeout sebelum dia jalan
//   - clearInterval(idInterval) → hentikan setInterval yang sedang berjalan
//
//   Kedua fungsi itu return sebuah ID (angka). Simpan ID itu ke variabel
//   supaya bisa kamu "cancel" nanti.
//
// ⚠️ PENTING:
//   - Satuan waktu = MILIDETIK (1 detik = 1000 milidetik)
//   - setTimeout/setInterval itu ASINKRON — kode di bawahnya jalan duluan,
//     nggak nunggu timer selesai!

// =============================================
// 🧪 DEMO — Lihat bagaimana asinkron bekerja
// =============================================
// Uncomment blok di bawah, buka console, dan perhatikan URUTAN log-nya.
//
// console.log("1. Sebelum setTimeout");
// setTimeout(() => {
//   console.log("2. Ini dari setTimeout (setelah 2 detik)");
// }, 2000);
// console.log("3. Setelah setTimeout (tapi muncul DULUAN!)");
//
// Urutan di console: 1 → 3 → 2
// Kenapa? Karena setTimeout itu ASINKRON — JS nggak mau nunggu,
// dia langsung lanjut ke baris berikutnya!

// =============================================
// 🏋️ LATIHAN 1 — setTimeout Dasar
// =============================================
// Buat setTimeout yang menampilkan pesan setelah waktu tertentu.

// a) Tampilkan "⏰ Waktunya istirahat!" di console setelah 3 detik
// setTimeout( ... )
// setTimeout(() => {
//   console.log("⏰ Waktunya istirahat!");
// }, 3000);

// b) Tampilkan "🍕 Pesanan kamu sudah siap!" di console setelah 5 detik
// setTimeout( ... )
// setTimeout(() => {
//   console.log("🍕 Pesanan kamu sudah siap!");
// }, 5000);

// c) Buat 3 setTimeout berurutan yang menampilkan hitungan mundur:
//    Setelah 1 detik: "3..."
//    Setelah 2 detik: "2..."
//    Setelah 3 detik: "1... 🚀 GO!"
// setTimeout( ... )
// setTimeout( ... )
// setTimeout( ... )
// setTimeout(() => {
//   console.log("3");
// }, 1000);
// setTimeout(() => {
//   console.log("2");
// }, 2000);
// setTimeout(() => {
//   console.log("1");
// }, 3000);

// =============================================
// 🏋️ LATIHAN 2 — setInterval Dasar
// =============================================
// Buat interval yang berjalan berulang.

// a) Buat setInterval yang menampilkan "💓 Detak..." setiap 1 detik.
//    Simpan ID-nya ke variabel supaya bisa dihentikan nanti.
// const idDetak = setInterval( ... )
// const idDetak = setInterval(() => {
//   console.log("💓 Detak...");
// }, 1000);
// b) Buat counter yang naik terus setiap 1 detik:
//    "Detik ke-1", "Detik ke-2", "Detik ke-3", ...
//    Simpan ID-nya ke variabel.
//    Hint: buat variabel let counter = 0 di luar, lalu counter++ di dalam callback.
// let counter = 0;
// const idCounter = setInterval( ... )
// let counter = 0;
// const idCounter = setInterval(() => {
//   (console.log(`Detik ke-${counter}`), counter++);
// }, 1000);
// =============================================
// 🏋️ LATIHAN 3 — Menghentikan Timer
// =============================================
// Ini penting! Kalau nggak dihentikan, setInterval jalan selamanya.

// a) Buat setInterval yang menampilkan "Ping!" setiap 1 detik,
//    tapi BERHENTI setelah 5 kali.
//    Hint: pakai counter, kalau sudah 5 → clearInterval(id)
// let pingCount = 0;
// const idPing = setInterval( ... )
let pingCount = 0;
const idPing = setInterval(() => {
  (console.log("Ping!"), pingCount++);
  if (pingCount >= 5) {
    clearInterval(idPing);
  }
}, 1000);
// b) Buat setTimeout yang MEMBATALKAN sebuah interval.
//    - Buat setInterval yang log "🔄 Loading..." setiap 500ms
//    - Buat setTimeout yang menghentikan interval itu setelah 3 detik
//      dan log "✅ Loading selesai!"
// const idLoading = setInterval( ... )
// setTimeout( ... )
const idLoading = setInterval(() => {
  console.log("🔄 Loading...");
}, 500);
setTimeout(() => {
  clearInterval(idLoading);
  console.log("✅ Loading selesai!");
}, 3000);
// =============================================
// 🛒 LATIHAN 4 — E-Commerce: Fitur TokoKu
// =============================================
// Implementasi fitur-fitur toko online yang pakai timer!

const produkFlashSale = [
  { nama: "Kaos Polos", harga: 75000, diskon: 50 },
  { nama: "Celana Jeans", harga: 250000, diskon: 30 },
  { nama: "Sepatu Sneakers", harga: 350000, diskon: 40 },
];

// a) COUNTDOWN FLASH SALE ⏳
//    Buat setInterval yang menampilkan hitungan mundur dari 10 ke 0:
//    "⏳ Flash Sale berakhir dalam: 10 detik"
//    "⏳ Flash Sale berakhir dalam: 9 detik"
//    ...
//    "⏳ Flash Sale berakhir dalam: 0 detik"
//    "🔥 Flash Sale BERAKHIR!"
//    Lalu interval berhenti sendiri.
// let sisaWaktu = 10;
// const idFlashSale = setInterval( ... )
let sisaWaktu = 10;
const idFlashSale = setInterval(() => {
  console.log(`⏳ Flash Sale berakhir dalam: ${sisaWaktu} detik`);
  sisaWaktu--;
  if (sisaWaktu == 0) {
    clearInterval(idFlashSale);
    console.log("🔥 Flash Sale BERAKHIR!");
  }
}, 1000);
// b) NOTIFIKASI PROMO 📢
//    Buat function "mulaiPromo" yang:
//    - Menerima parameter: arrayProduk
//    - Setiap 2 detik, tampilkan promo produk SATU PER SATU dari array:
//      "📢 PROMO: Kaos Polos — Diskon 50%! Harga: Rp 37.500"
//      (hitung harga setelah diskon!)
//    - Setelah semua produk sudah ditampilkan, interval berhenti
//      dan tampilkan "🛍️ Itu dia semua promo hari ini!"
//    Hint: pakai index counter, kalau index >= array.length → clearInterval
// const mulaiPromo = (arrayProduk) => {
//   ...
// };
// mulaiPromo(produkFlashSale);
const mulaiPromo = (arrayProduk) => {
  let index = 0;
  const idInterval = setInterval(() => {
    const item = arrayProduk[index];
    const hargaDiskon = item.harga - (item.harga * item.diskon) / 100;
    console.log(
      `📢 PROMO: ${item.nama} — Diskon ${item.diskon}%! Harga: Rp ${hargaDiskon.toLocaleString("id-ID")}`,
    );
    index++;
    if (index >= arrayProduk.length) {
      clearInterval(idInterval);
      console.log("🛍️ Itu dia semua promo hari ini!");
    }
  }, 2000);
};

mulaiPromo(produkFlashSale);
// =============================================
// 🔥 BONUS — Simulasi Antrian Pesanan
// =============================================
// Simulasikan sistem antrian pesanan TokoKu!
//
// Data antrian:
// const antrianPesanan = ["Pesanan #101", "Pesanan #102", "Pesanan #103", "Pesanan #104"];
//
// Buat function "prosesAntrian" yang:
// 1. Tampilkan "📦 Memproses antrian... (4 pesanan)"
// 2. Setiap 1.5 detik, proses 1 pesanan:
//    "✅ Pesanan #101 selesai diproses! (sisa: 3)"
//    "✅ Pesanan #102 selesai diproses! (sisa: 2)"
//    ...
// 3. Setelah semua selesai:
//    "🎉 Semua pesanan sudah diproses!"
//
// Hint: bisa pakai setInterval + shift() atau index counter
// const prosesAntrian = (antrian) => {
//   ...
// };
// prosesAntrian(antrianPesanan);
