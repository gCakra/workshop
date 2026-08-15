// ============================================
// 🔄 Cara Elegan Perulangan Pada Array: For Of — Materi 72
// ============================================
// `for...of` mempermudah kita mengambil langsung nilai dari array
// tanpa harus memikirkan index (i) seperti pada `for` biasa.
//
// CONTOH:
// const buah = ['Apel', 'Mangga', 'Pisang'];
// for (let b of buah) {
//   console.log(b); // Output: Apel, Mangga, Pisang
// }
// ============================================

// TUGAS:
// 1. Buatlah sebuah array berisi 5 nama superhero favoritmu, simpan dalam variabel `superheroes`.
// 2. Gunakan `for...of` loop untuk menampilkan tulisan "[Nama Superhero] adalah pahlawan hebat!" ke console untuk masing-masing superhero.
//
// Contoh Output di console:
// Batman adalah pahlawan hebat!
// Iron Man adalah pahlawan hebat!
// ... dst

// 🔽 Tulis kode kamu di bawah ini:

const superheroes = ["Batman", "Ironman", "Spiderman", "Hulk", "Thor"]
for(let a of superheroes){
    console.log(`${a} adalah pahlawan hebat !`)
}