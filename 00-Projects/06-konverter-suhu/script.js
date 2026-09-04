// ============================================
// Mini Project — Konverter Suhu
// Semua fungsi pakai FUNCTION EXPRESSION
// ============================================
// Rumus:
//   F = (C × 9/5) + 32
//   K = C + 273.15
//   C = (F - 32) × 5/9
// ============================================

// ──────────────────────────────────────────
// STEP 1: Buat 3 function expression:
//         - celsiusKeF(c)     → return Fahrenheit
//         - celsiusKeK(c)     → return Kelvin
//         - fahrenheitKeC(f)  → return Celsius
// ──────────────────────────────────────────
const celsiusKeF = function(c) {
  return (c * 9 / 5) + 32;
}
const celsiusKeK = function(c) {
  return (c + 273.15)
}
const fahrenheitKeC = function(f) {
  return (f - 32) * 5 / 9
}



// ──────────────────────────────────────────
// STEP 2: Panggil ketiga fungsi di atas.
//         Test dengan: 100°C, 0°C, dan 212°F
//         Console.log hasilnya dengan pesan
//         yang jelas (contoh: "100°C = ...°F")
// ──────────────────────────────────────────
console.log(`100C = ${celsiusKeF(100)}F`)
console.log(`0K = ${celsiusKeK(0)}K`)
console.log(`212F = ${fahrenheitKeC(212)}C`)


// ──────────────────────────────────────────
// STEP 3: Buat function expression "konversi"
//         Parameter: (suhu, dari, ke)
//         "dari" dan "ke" berupa string: "C", "F", "K"
//         Fungsi ini harus memanggil fungsi
//         yang sudah kamu buat di Step 1.
//         Return hasilnya.
//
//         Contoh: konversi(100, "C", "F") → 212
// ──────────────────────────────────────────



// ──────────────────────────────────────────
// STEP 4: Panggil "konversi" beberapa kali
//         dan console.log hasilnya:
//         konversi(100, "C", "F")  → 212
//         konversi(100, "C", "K")  → 373.15
//         konversi(212, "F", "C")  → 100
//         konversi(0, "C", "F")    → 32
// ──────────────────────────────────────────


