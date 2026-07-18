// --- MATERI 64: CONTOH LAIN PERULANGAN FOR ---
// Kita akan melihat beberapa contoh lain penggunaan for loop.
// For loop sangat fleksibel untuk berbagai macam kasus.

// --- DEMO 1: Menampilkan huruf dari sebuah string ---
const nama = "Garda";
console.log("=== Huruf dari nama ===");
for (let i = 0; i < nama.length; i++) {
  console.log(nama[i]);
}

// --- DEMO 2: Menampilkan isi array ---
const buah = ["Apel", "Mangga", "Jeruk"];
console.log("\n=== Daftar Buah ===");
for (let i = 0; i < buah.length; i++) {
  console.log(`Buah ke-${i + 1}: ${buah[i]}`);
}

// --- TUGAS GARDA ---
// Isi semua bagian `___` di bawah ini.

// 1. Buat sebuah string (kalimat) dan tampilkan setiap hurufnya satu per satu.
console.log("\n--- Tugas 1 ---");
const kalimat = "Belajar itu menyenangkan";
for (let i = 0; i < kalimat.length; i++) {
  console.log(kalimat[i]);
}

// 2. Buat sebuah array angka dan tampilkan setiap angkanya,
//    lalu hitung juga total penjumlahannya.
console.log("\n--- Tugas 2 ---");
const angka = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < angka.length; i++) {
  console.log("Angka:", angka[i]);
  total = total + angka[i]; // atau total += angka[i];
}
console.log("Total penjumlahan:", total);

// 3. Tampilkan angka ganjil dari 1 sampai 15.
// Petunjuk: gunakan i += 2 dan mulai dari angka yang benar.
console.log("\n--- Tugas 3 ---");
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}

// 4. Challenge: tampilkan semua elemen dari array berikut,
//    tapi HANYA jika elemen itu adalah string.
//    Gunakan `typeof` untuk mengecek tipe data.
console.log("\n--- Tugas 4 ---");
const campuran = [1, "JavaScript", true, "HTML", 2.5, "CSS"];
for (let i = 0; i < campuran.length; i++) {
  if (typeof campuran[i] === "string") {
    console.log(campuran[i]);
  }
}

// --- EKSPERIMEN OPSIONAL ---
// Ubah salah satu contoh di atas agar menghitung berapa kali
// sebuah huruf muncul di dalam string.
// Misalnya: berapa kali huruf 'a' muncul di kalimat "Saya belajar JavaScript".
