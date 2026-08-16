// ============================================
// Materi 76 — Argument Dan Parameter Dalam Function
// ============================================

// 🎯 TUJUAN:
// Memahami perbedaan parameter dan argument,
// serta cara mengirim data ke dalam function.

// ============================================
// 1. Parameter = variabel yang ditulis saat MENDEFINISIKAN function
//    Argument  = nilai nyata yang dikirim saat MEMANGGIL function
// ============================================

// Contoh:
// function sapa(nama) { ... }   ← "nama" adalah PARAMETER
// sapa("Garda");                ← "Garda" adalah ARGUMENT

// ============================================
// 2. LATIHAN: Buat function dengan parameter
// ============================================

// 📝 Tugas 1:
// Buat function bernama "pipiKucing" yang menerima 1 parameter "warna",
// lalu console.log → "Kucing warna [warna] sangat lucu!"
// Panggil function-nya dengan argument "oranye".

// -- Tulis kode di sini --
function pipiKucing(warna){
    console.log(`Kucing warna ${warna} sangat lucu!`)
}

pipiKucing('oranye')


// 📝 Tugas 2:
// Buat function bernama "hitungLuasPersegiPanjang" yang menerima
// 2 parameter: "panjang" dan "lebar".
// Console.log hasilnya → "Luas = [hasil]"
// Panggil dengan argument 10 dan 5.

// -- Tulis kode di sini --
function hitungLuasPersegiPanjang(panjang, lebar){
    console.log(`Luas = ${panjang * lebar}`)
}

hitungLuasPersegiPanjang(10, 5)


// 📝 Tugas 3:
// Apa yang terjadi kalau function punya parameter tapi dipanggil
// TANPA argument? Coba panggil function pipiKucing() tanpa argument.
// Perhatikan hasilnya di console.

// -- Tulis kode di sini --
pipiKucing()


// 📝 Tugas 4 (Tantangan):
// Buat function "perkenalan" dengan parameter "nama" dan "umur".
// Outputnya: "Halo, nama saya [nama] dan saya berumur [umur] tahun."
// Panggil 3x dengan data berbeda.

// -- Tulis kode di sini --
function perkenalan(nama, umur){
    console.log(`Halo, nama saya ${nama} dan saya berumur ${umur} tahun`)
}

perkenalan("garda", 21);
perkenalan("aldi", 15);
perkenalan("imel", 23);
