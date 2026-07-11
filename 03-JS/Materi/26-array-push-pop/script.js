// --- MATERI 52: METHOD ARRAY PUSH DAN POP ---
// Bayangkan array seperti tumpukan buku.
// - push() -> menambah buku ke ATAS tumpukan (akhir array).
// - pop()  -> mengambil buku dari ATAS tumpukan (akhir array) dan menghapusnya.
//
// Contoh:
// let tumpukan = ["buku1", "buku2"];
// tumpukan.push("buku3"); // ["buku1", "buku2", "buku3"]
// let ambil = tumpukan.pop(); // ambil = "buku3", tumpukan jadi ["buku1", "buku2"]

// --- TUGAS GARDA ---
// Skenario: Kamu lagi main game, simpan nama item yang didapat.

let inventory = [];

// 1. Tambahkan "pedang kayu" ke inventory menggunakan push().
inventory.push("pedang kayu");

// 2. Tambahkan "perisai kayu" ke inventory menggunakan push().
inventory.push("perisai kayu");

// 3. Cetak inventory untuk memastikan dua item sudah masuk.
console.log("Inventory setelah 2 push:", inventory);

// 4. Ambil (pop) item terakhir dari inventory dan simpan ke variabel `itemTerakhir`.
//    Setelah itu cetak `itemTerakhir` dan inventory-nya.
let itemTerakhir = inventory.pop();
console.log("Item yang di-pop:", itemTerakhir);
console.log("Inventory setelah 1 pop:", inventory);
