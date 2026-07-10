// --- MATERI 48: OPERATOR LOGIC NOT (!) ---
// Analogi:
// Operator `!` adalah tombol "kebalikan" atau "negasi".
// JIKA kondisinya TRUE, maka `!` menjadikannya FALSE.
// JIKA kondisinya FALSE, maka `!` menjadikannya TRUE.
//
// Contoh:
// let sudahLogin = true;
// if (!sudahLogin) { ... } // kondisi jadi false, blok tidak dijalankan.

// --- TUGAS GARDA ---
// Skenario: Sistem verifikasi user premium.
// Syarat: User BUKAN member biasa (bukan premium = false).

let isPremium = true;

// Lengkapi kondisi agar console.log dijalankan jika user BUKAN premium
if (!isPremium) {
    console.log("User adalah member biasa. 👤");
} else {
    console.log("User adalah member premium! 💎");
}
