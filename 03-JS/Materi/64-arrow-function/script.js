/* ============================================
   Materi 90 — Sebelum Lanjut, Kenalan Dengan Arrow Function
   ============================================ */

// =============================================
// 📖 PENJELASAN
// =============================================
// Arrow function adalah cara penulisan function yang lebih singkat,
// diperkenalkan di ES6 (2015).
//
// Sintaks dasar:
//   const namaFungsi = (param1, param2) => {
//     // isi fungsi
//     return hasil;
//   };
//
// Perbandingan:
//   // Function biasa (function declaration)
//   function tambah(a, b) {
//     return a + b;
//   }
//
//   // Arrow function
//   const tambah = (a, b) => {
//     return a + b;
//   };
//
// Aturan singkat:
//   - 1 parameter → kurung boleh dihilangkan:  x => { ... }
//   - 0 atau 2+ parameter → kurung WAJIB:      () => { ... }  atau  (a, b) => { ... }
//   - Body 1 baris → kurung kurawal & return boleh dihilangkan (implicit return, dibahas materi 91)

// =============================================
// 🏋️ LATIHAN 1 — Ubah ke Arrow Function
// =============================================
// Ubah function biasa di bawah ini menjadi arrow function.

// Contoh sudah dikerjakan:
// SEBELUM:
// function spiKucing() {
//   return "Meow!";
// }
// SESUDAH:
const spiKucing = () => {
  return "Meow!";
};
console.log("Contoh:", spiKucing());

// a) Ubah ke arrow function
// function sapaTeman(nama) {
//   return "Halo, " + nama + "!";
// }

// const sapaTeman = ... ← tulis jawaban di sini
const sapaTeman = (nama) => {
  return "Halo, " + nama + "!";
};

// b) Ubah ke arrow function
// function kaliDua(angka) {
//   return angka * 2;
// }

// const kaliDua = ... ← tulis jawaban di sini
const kaliDua = (angka) => {
  return angka * 2;
};

// c) Ubah ke arrow function (2 parameter)
// function hitungLuas(panjang, lebar) {
//   return panjang * lebar;
// }
//
// const hitungLuas = ... ← tulis jawaban di sini
const hitungLuas = (panjang, lebar) => {
  return panjang * lebar;
};

// =============================================
// 🏋️ LATIHAN 2 — Arrow Function sebagai Callback
// =============================================
// Di materi forEach & map kemarin kamu pakai function biasa sebagai callback.
// Sekarang coba pakai arrow function!

const angka = [1, 2, 3, 4, 5];

// a) Gunakan forEach + arrow function untuk console.log setiap angka dikali 3
// angka.forEach( ... )
angka.forEach((item) => {
  console.log(item * 3);
});

// b) Gunakan map + arrow function untuk bikin array baru berisi angka kuadrat
// const kuadrat = angka.map( ... )
// console.log("Kuadrat:", kuadrat);
const kuadrat = angka.map((item) => {
  return item * item;
});

console.log("Kuadrat: ", kuadrat);
// =============================================
// 🛒 LATIHAN 3 — E-Commerce: Daftar Produk TokoKu
// =============================================
// Kamu punya array produk toko online.
// Gunakan arrow function di semua callback.

const produkToko = [
  { nama: "Kaos Polos", harga: 75000, stok: 12 },
  { nama: "Celana Jeans", harga: 250000, stok: 5 },
  { nama: "Topi Keren", harga: 45000, stok: 20 },
  { nama: "Sepatu Sneakers", harga: 350000, stok: 3 },
  { nama: "Tas Ransel", harga: 180000, stok: 8 },
];

// a) Gunakan forEach + arrow function untuk tampilkan:
//    "Produk: [nama] — Rp [harga]" di console
// produkToko.forEach( ... )
produkToko.forEach((item) => {
  console.log(`Produk: ${item.nama} - Rp ${item.harga}`);
});
// b) Gunakan map + arrow function untuk bikin array berisi string:
//    "[nama] (Stok: [stok])"
// const daftarStok = produkToko.map( ... )
// console.log("Daftar stok:", daftarStok);
const daftarStok = produkToko.map((item) => {
  return `${item.nama} (stok: ${item.stok})`;
});
console.log(`Daftar stok: `, daftarStok);
// c) Buat arrow function hitungTotal yang menerima array produk
//    dan mengembalikan total harga semua produk (harga × stok).
//    Gunakan forEach di dalamnya.
// const hitungTotal = ...
// console.log("Total nilai inventaris:", hitungTotal(produkToko));
const hitungTotal = (arrayProduk) => {
  let total = 0;
  arrayProduk.forEach((item) => {
    // tambahin harga × stok ke total
    total = total + item.harga * item.stok;
  });
  return total;
};

console.log("Total nilai inventaris:", hitungTotal(produkToko));

// =============================================
// 🔥 LATIHAN BONUS — Pendalaman Arrow Function
// =============================================

// BONUS 1: Buat arrow function "formatRupiah"
//   - Menerima 1 parameter: angka (number)
//   - Return string format: "Rp 75.000"
//   - Hint: gunakan .toLocaleString("id-ID")
//
// const formatRupiah = ...
// console.log(formatRupiah(75000));    // "Rp 75.000"
// console.log(formatRupiah(1250000));  // "Rp 1.250.000"
const formatRupiah = (angka) => {
  return "Rp " + angka.toLocaleString("id-ID");
};
console.log(formatRupiah(75000));
console.log(formatRupiah(1250000));
// BONUS 2: Buat arrow function "cariProduk"
//   - Menerima 2 parameter: (arrayProduk, keyword)
//   - Gunakan forEach di dalamnya
//   - Cek apakah nama produk MENGANDUNG keyword (hint: .toLowerCase() + .includes())
//   - Console.log produk yang cocok: "Ditemukan: [nama] — Rp [harga]"
//   - Kalau nggak ada yang cocok, console.log: "Produk tidak ditemukan"
//
// const cariProduk = ...
// cariProduk(produkToko, "kaos");    // "Ditemukan: Kaos Polos — Rp 75000"
// cariProduk(produkToko, "laptop");  // "Produk tidak ditemukan"
const cariProduk = (arrayProduk, keyword) => {
  let ketemu = false;
  arrayProduk.forEach((item) => {
    if (item.nama.toLowerCase().includes(keyword.toLowerCase())) {
      console.log(`Ditemukan: ${item.nama} - Rp ${item.harga}`);
      ketemu = true;
    }
  });
  if (!ketemu) {
    console.log("Produk tidak Ditemukan");
  }
};

// BONUS 3: Buat arrow function "ringkasanToko"
//   - Menerima 1 parameter: arrayProduk
//   - Return sebuah OBJECT dengan isi:
//     {
//       totalProduk: jumlah item di array,
//       totalStok: jumlah semua stok,
//       produkTermahal: nama produk dengan harga tertinggi
//     }
//   - Gunakan forEach untuk hitung totalStok & cari termahal
//
// const ringkasanToko = ...
// console.log(ringkasanToko(produkToko));
// Hasil: { totalProduk: 5, totalStok: 48, produkTermahal: "Sepatu Sneakers" }
const ringkasanToko = (arrayProduk) => {
  let totalStok = 0;
  let totalProduk = 0;
  let hargaTermahal = 0;
  let produkTermahal = "";
  arrayProduk.forEach((item) => {
    totalStok += item.stok;
    if (item.harga > hargaTermahal) {
      hargaTermahal = item.harga;
      produkTermahal = item.nama;
    }
  });
  totalProduk = arrayProduk.length;
  return {
    totalProduk,
    totalStok,
    produkTermahal,
  };
};
