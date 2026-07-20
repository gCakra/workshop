// --- MATERI 70: KATA KUNCI BREAK UNTUK MEMBERHENTIKAN PERULANGAN ---
// Kadang kita mau PAKSA berhentiin loop di tengah jalan,
// tanpa nunggu kondisinya jadi false. Nah, itu gunanya `break`.

// Analogi: Kamu lagi antri beli tiket konser.
// Rencananya mau antri sampai dapat, tapi tiba-tiba hujan deras —
// kamu langsung CABUT dari antrian. Itu `break`.

// --- CONTOH 1: Break di for loop ---
console.log("=== Cari Angka 7 ===");
for (let i = 1; i <= 20; i++) {
  console.log("Cek angka:", i);
  if (i === 7) {
    console.log("Ketemu angka 7! Berhenti.");
    break; // langsung keluar loop, angka 8-20 nggak dicek
  }
}

// --- CONTOH 2: Break di while loop ---
console.log("\n=== Cari Nama di Array ===");
const daftarNama = ["Andi", "Budi", "Citra", "Dewi", "Eka"];
let index = 0;

while (index < daftarNama.length) {
  console.log("Cek:", daftarNama[index]);
  if (daftarNama[index] === "Citra") {
    console.log("Citra ditemukan di index", index);
    break;
  }
  index++;
}

// --- CONTOH 3: Break di while(true) — Infinite loop yang terkendali ---
// Pattern ini UMUM BANGET: sengaja bikin loop tak terbatas,
// tapi ada `break` sebagai rem darurat.
console.log("\n=== Password Checker (simulasi) ===");
const passwordBenar = "rahasia123";
const percobaan = ["salah", "asal", "rahasia123"];
let coba = 0;

while (true) {
  console.log(`Percobaan ${coba + 1}: "${percobaan[coba]}"`);
  if (percobaan[coba] === passwordBenar) {
    console.log("✅ Password benar! Masuk.");
    break;
  }
  console.log("❌ Salah, coba lagi...");
  coba++;
}

// --- TUGAS GARDA ---
// Kamu punya array angka:
const angka = [3, 7, 12, 5, 20, 8, 15, 25, 9, 1];

// Tugas:
// 1. Gunakan for loop untuk menelusuri array `angka`.
// 2. Cetak setiap angka: "Angka: [nilai]"
// 3. TAPI — kalau ketemu angka yang LEBIH DARI 40, cetak:
//    "Stop! Angka [nilai] terlalu besar!"
//    lalu BREAK dari loop (angka sisanya nggak perlu dicek).
// 4. Kalau loop selesai tanpa ketemu angka > 40,
//    cetak: "Semua angka aman."
//
// Hint: Kamu butuh variabel boolean untuk tau apakah break terjadi atau tidak.

console.log("\n--- Tugas ---");

// Tulis kodemu di sini
let terlaluBesar = false;
for (let i = 0; i < angka.length; i++) {
  console.log(`Angka: ${angka[i]}`)
  if (angka[i] > 40) {
    terlaluBesar = true;
    console.log(`Stop! Angka ${angka[i]} terlalu besar!`)
    break;
  }
}
if (terlaluBesar === false) {
  console.log("Semua angka aman.")
}

