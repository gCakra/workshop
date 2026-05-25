// ==========================================
// DOM MANIPULATION (Menghubungkan JS & HTML)
// ==========================================

// 1. Ambil elemen HTML berdasarkan ID
const judul = document.getElementById("judul");
const kotak = document.getElementById("box");
const tombol = document.getElementById("btn-ubah");

// 2. Beri aksi saat tombol diklik (Event Listener)
tombol.addEventListener("click", function () {
  // TUGAS KAMU:
  // 1. Ubah teks di dalam 'judul' menjadi "Berhasil Diubah!"
  //    Cara: judul.innerText = "Teks Baru";
  judul.innerText = "berhasil diubah";

  // 2. Ubah warna background 'kotak' menjadi merah atau warna lain.
  //    Cara: kotak.style.backgroundColor = "red";
  kotak.style.backgroundColor = "crimson";

  // 3. (Opsional) Ubah teks di dalam 'kotak' menjadi "BOOM!"
  kotak.innerText = "BOOM!";
});
