// ============================================
// Mini Project — Kalkulator Sederhana
// Semua operasi pakai FUNCTION EXPRESSION
// ============================================

// ──────────────────────────────────────────
// STEP 1: Buat function expression "tambah"
//         Parameter: (a, b) → return a + b
//         Panggil: console.log(tambah(10, 5))
// ──────────────────────────────────────────

// -- tulis kode Step 1 di sini --
const tambah = function(a, b) {
  return a + b
}
console.log(tambah(10, 5))

// ──────────────────────────────────────────
// STEP 2: Buat function expression "kurang"
//         Parameter: (a, b) → return a - b
//         Panggil: console.log(kurang(10, 5))
// ──────────────────────────────────────────

// -- tulis kode Step 2 di sini --
const kurang = function(a, b) {
  return a - b
}
console.log(kurang(10, 5))

// ──────────────────────────────────────────
// STEP 3: Buat function expression "kali"
//         dan function expression "bagi"
//         Panggil keduanya dengan console.log
// ──────────────────────────────────────────

// -- tulis kode Step 3 di sini --
const kali = function(a, b) {
  return a * b
}
const bagi = function(a, b) {
  return a / b
}
console.log(kali(10, 5))
console.log(bagi(10, 5))
// ──────────────────────────────────────────
// STEP 4: Buat function expression "hitung"
//         Parameter: (a, operator, b)
//         operator bisa: "+", "-", "*", "/"
//         Pakai if/else atau switch untuk
//         memanggil function yang sudah dibuat
//         di Step 1-3 sesuai operator-nya.
//         Return hasilnya.
// ──────────────────────────────────────────

// -- tulis kode Step 4 di sini --
const hitung = function(a, operator, b) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b
  } else if (operator === "*") {
    return a * b
  } else {
    return a / b
  }
}

// ──────────────────────────────────────────
// step 5: panggil "" beberapa kali:
//         hitung(10, "+", 5)  → 15
// hitung(10, "-", 3)  → 7
// hitung(4, "*", 6)   → 24
// hitung(20, "/", 4)  → 5
//         console.log semua hasilnya.
// ──────────────────────────────────────────

// -- tulis kode step 5 di sini --
console.log(hitung(10, "+", 5))
console.log(hitung(10, "-", 3))
console.log(hitung(4, "*", 6))
console.log(hitung(20, "/", 4))
