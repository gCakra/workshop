// ============================================
// Materi 87 — Try And Catch Adalah Penyelamat
// ============================================

// 📌 KONSEP UTAMA:
// Biasanya, kalau ada error di JavaScript, seluruh program akan TERHENTI (crash).
// `try...catch` hadir sebagai "jaring pengaman" (safety net)!
//
// 1. `try`   ➔ Coba jalankan kode ini.
// 2. `catch` ➔ Kalau di dalam `try` terjadi error, TANGKAP error-nya di sini
//              tanpa membuat sisa program crash!

// ──────────────────────────────────────────
// 1. CONTOH PENGGUNAAN TRY...CATCH
// ──────────────────────────────────────────

try {
  // Panggil function yang belum pernah dibuat (akan menghasilkan ReferenceError)
  panggilFunctionGhoib();
} catch (error) {
  console.log("⚠️ Terjadi error, tapi program selamat & tidak crash!");
  console.log("Pesan error resmi:", error.message);
}

// Program di bawah ini tetap jalan normal meskipun di atas ada error!
console.log("✅ Program terus berjalan sampai baris akhir!");

// ──────────────────────────────────────────
// 🏋️ LATIHAN — Kerjakan di bawah ini!
// ──────────────────────────────────────────

// TUGAS 1: Buat function `teriak(teks)`:
//          - Di dalam function, ubah `teks` menjadi huruf kapital dengan method `teks.toUpperCase()`,
//            lalu return hasilnya.
//          - Bungkus proses tersebut dengan `try...catch`!
//          - Jika `teks` yang dimasukkan bukan string (misal: number atau null),
//            `teks.toUpperCase()` akan error.
//          - Di blok `catch(error)`, tangkap error tersebut dan return string:
//            "Input harus berupa string!"
//
//          Test function `teriak` dengan 2 kasus:
//          1. `teriak("halo dunia")`  → Harusnya return: "HALO DUNIA"
//          2. `teriak(12345)`         → Harusnya return: "Input harus berupa string!"

// -- tulis kode Tugas 1 di sini --
const teriak = function (teks) {
  try {
    return teks.toUpperCase();
  } catch (error) {
    return "Input Harus berupa string";
  }
};

console.log(teriak("Hello world"));
console.log(teriak(12345));
// TUGAS 2: Buat function `bagiAngka(a, b)`:
//          - Gunakan `try...catch`!
//          - Di blok `try`:
//            - Jika `b` bernilai 0, lemparkan error buatan sendiri memakai `throw new Error("Tidak bisa membagi angka dengan nol!")`
//            - Jika `b` tidak 0, return `a / b`
//          - Di blok `catch(error)`:
//            - Return `error.message`
//
//          Test function `bagiAngka` dengan:
//          1. `bagiAngka(10, 2)`  → Output: 5
//          2. `bagiAngka(10, 0)`  → Output: "Tidak bisa membagi angka dengan nol!"

// -- tulis kode Tugas 2 di sini --
const bagiAngka = function (a, b) {
  try {
    if (b === 0) {
      throw new Error("Tidak bisa membagi angka dengan nol!");
    } else {
      return a / b;
    }
  } catch (error) {
    return error.message;
  }
};

console.log(bagiAngka(10, 2));
console.log(bagiAngka(10, 0));

// TUGAS 3: Menurut pemahamanmu, kenapa `try...catch` sangat penting dipakai saat program aplikasi kita sudah digunakan oleh user nyata di internet?

// -- tulis jawaban Tugas 3 di sini --
// mencegah adanya bug bahkan kebocoran data
