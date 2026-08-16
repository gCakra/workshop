// ============================================
// Materi 77 — Multiple Parameter Dan Argument
// ============================================

// 🎯 TUJUAN:
// Memahami cara menggunakan lebih dari 1 parameter
// dan mengirim banyak argument ke dalam function.

// ============================================
// 1. Konsep Dasar
// ============================================

// Di materi sebelumnya kamu sudah pakai 2 parameter.
// Sekarang kita perluas — function bisa punya
// BANYAK parameter, dipisahkan koma.
//
// function namaFunction(param1, param2, param3, ...) { }
// namaFunction(arg1, arg2, arg3, ...);
//
// ⚠️ Urutan PENTING! Argument ke-1 masuk ke parameter ke-1, dst.

// ============================================
// 2. LATIHAN
// ============================================

// 📝 Tugas 1:
// Buat function "biodata" dengan 3 parameter: "nama", "umur", "kota".
// Console.log → "Nama: [nama], Umur: [umur], Kota: [kota]"
// Panggil dengan data dirimu sendiri.

// -- Tulis kode di sini --
function biodata(nama, umur, kota){
    console.log(`Nama: ${nama}, Umur: ${umur}, Kota: ${kota}`)
}
biodata("garda", 21, "kediri")


// 📝 Tugas 2:
// Buat function "hitungBMI" dengan 3 parameter:
// "nama", "beratKg", "tinggiCm".
// Rumus BMI = berat / (tinggi dalam meter)²
// Hint: tinggi dalam meter = tinggiCm / 100
// Console.log → "[nama], BMI kamu: [hasil BMI]"
// Panggil dengan argument: "Garda", 70, 170

// -- Tulis kode di sini --
function hitungBMI(nama, beratKg, tinggiCm){
    console.log(`${nama}, BMI kamu : ${beratKg/(tinggiCm/100) ** 2}`)
}
hitungBMI("garda", 70, 170)

// 📝 Tugas 3:
// Buat function "hitungDiskon" dengan 3 parameter:
// "namaBarang", "harga", "persenDiskon".
// Hitung harga setelah diskon.
// Console.log → "[namaBarang]: Rp [harga] - diskon [persen]% = Rp [hargaAkhir]"
// Panggil 2x dengan data berbeda.

// -- Tulis kode di sini --
function hitungDiskon(namaBarang, harga, persenDiskon){
    console.log(`${namaBarang}: Rp ${harga} - diskon ${persenDiskon}% = Rp ${harga - (persenDiskon/100 * harga)}`)
}

hitungDiskon("kemeja", 200000, 10);
hitungDiskon("celana", 150000, 25)
// 📝 Tugas 4 (Tantangan):
// Buat function "pesanMakanan" dengan 4 parameter:
// "pelanggan", "makanan", "minuman", "jumlahOrang".
// Console.log →
//   "Pesanan untuk [pelanggan]:"
//   "  Makanan: [makanan]"
//   "  Minuman: [minuman]"
//   "  Jumlah orang: [jumlahOrang]"
// Panggil 2x dengan data berbeda.
// ⚠️ Perhatikan: kalau kamu tukar urutan argument, apa yang terjadi?

// -- Tulis kode di sini --
function pesanMakanan(pelanggan, makanan, minuman, jumlahOrang){
    console.log(
        `Pesanan untuk ${pelanggan}:
        Makanan: ${makanan}
        Minuman: ${minuman}
        Jumlah orang: ${jumlahOrang}`
    )
}

pesanMakanan("Garda", "Burger", "Cola", 1)
pesanMakanan("Aldi", "Nasi Goreng", "Teh Manis", 3)

