// === DATA PRODUK ===
const products = [
  { id: 1, nama: "Kaos Polos Hitam", harga: 89000, gambar: "👕", stok: 15 },
  { id: 2, nama: "Celana Jeans Slim", harga: 250000, gambar: "👖", stok: 8 },
  { id: 3, nama: "Sepatu Sneakers", harga: 450000, gambar: "👟", stok: 5 },
  { id: 4, nama: "Topi Baseball", harga: 75000, gambar: "🧢", stok: 20 },
  { id: 5, nama: "Tas Ransel", harga: 320000, gambar: "🎒", stok: 12 },
  { id: 6, nama: "Kacamata Hitam", harga: 150000, gambar: "🕶️", stok: 10 },
];
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

formatRupiah(products.angka);
// === TUGAS 1: RENDER KATALOG PRODUK ===
//
// Instruksi:
// 1. Buat fungsi "formatRupiah(angka)" yang mengubah angka jadi format "Rp 89.000"
//    - Hint: pakai .toLocaleString("id-ID")
//
// 2. Buat fungsi "renderProduk()" yang:
//    a. Ambil elemen #daftar-produk dari DOM
//    b. Loop array "products"
//    c. Untuk setiap produk, buat kartu HTML berisi:
//       - Emoji gambar (besar, sebagai pengganti foto)
//       - Nama produk
//       - Harga (pakai formatRupiah)
//       - Stok tersedia
//       - Tombol "Tambah ke Keranjang" (belum perlu berfungsi)
//    d. Masukkan semua kartu ke dalam #daftar-produk
//
// 3. Panggil renderProduk() di baris terakhir
//
// Kerjakan di bawah ini 👇

//tugas 2
function renderProduk() {
  return;
}
