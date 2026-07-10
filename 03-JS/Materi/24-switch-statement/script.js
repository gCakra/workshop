// --- MATERI 49: SWITCH STATEMENT ---
// Switch adalah alternatif `if-else` jika kita ingin mengecek satu nilai
// dengan banyak kemungkinan (case).
//
// Contoh:
// let warnaLampu = "merah";
// switch (warnaLampu) {
//     case "merah":
//         console.log("Berhenti! 🛑");
//         break;
//     case "kuning":
//         console.log("Hati-hati! ⚠️");
//         break;
//     case "hijau":
//         console.log("Jalan! 🟢");
//         break;
//     default:
//         console.log("Lampu rusak! ❌");
// }

// --- TUGAS GARDA ---
// Skenario: Membuat sistem pengumuman hari kerja.
// Variabel: `hari` ("senin", "selasa", "rabu", dsb).

let hari = "jumat";

// Buat switch statement untuk mengecek nilai `hari`
// Jika "senin", print "Semangat kerja! 💻"
// Jika "jumat", print "Hari jumat, waktunya santai! ☕"
// Default-nya, print "Hari biasa... 🗓️"

switch (hari) {
    // Isi di sini!
    case "senin":
    console.log("semangat kerja");
    break;
    case "jumat":
    console.log('hari jumat, waktunya santai')
    break;
    default:
    console.log('hari biasa');
}
