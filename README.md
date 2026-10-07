# SIMOBILE - Toko Makmur Jaya

**PROJECT UTS**

Aplikasi kasir mobile yang sederhana berbasis Ionic Angular
Mata Kuliah: Hybrid Mobile Programming 
Teknik Informatika 
Universitas Surabaya.

**Kelompok:** adavincent<br>
**Anggota:**<br>
Gregory Evan Kusuma ~ 160424169<br>
Kenzo Dani Gracia ~ 160424154<br>
Vincent Kosasih ~ 160424143<br>
Rafly Ardiansyah Putra Pratama ~ 160424147

## Cara Instalasi

1. Clone repository: git clone https://github.com/s160424169/adaVincentHybrid.git
2. Masuk ke folder project : cd adaVincentHybrid 
3. Install dependency: npm install


## Cara Menjalankan Aplikasi
- Ketik 'ionic serve' 

Aplikasi akan terbuka otomatis di browser pada `http://localhost:8100`.

## Fitur yang Berhasil Diimplementasikan

- [x] Navigasi utama (tab bawah) dibungkus menu geser (drawer) berisi Pengaturan, Tentang Aplikasi, dan Logout
- [x] Dashboard menampilkan ringkasan: jumlah produk, total transaksi hari ini, dan produk terlaris
- [x] Pencarian produk real-time tanpa tombol submit (two-way binding)
- [x] Detail produk melalui route parameter, menampilkan stok, harga beli, harga jual, dan perhitungan untung
- [x] Gambar produk kosong menampilkan gambar default (property binding)
- [x] Tombol "Tambah ke Keranjang" otomatis nonaktif saat stok habis (property binding)
- [x] Form tambah & edit produk dengan validasi per field dan pesan error informatif
- [x] Logic data dipisah ke 4 service: Produk, Keranjang, Transaksi, Tema
- [x] Tema warna kustom (4 pilihan palet) dan mode gelap/terang
- [x] Animasi: swipe-to-delete pada item keranjang, dan animasi perubahan jumlah (bump) saat tambah/kurang qty
- [x] Keranjang belanja dengan checkbox pilih produk, hitung total, dan konfirmasi transaksi
- [x] Riwayat transaksi dengan halaman detail per transaksi
- [x] 10 data dummy produk dengan variasi harga, stok, dan kategori

## Catatan
Seluruh data (produk, keranjang, transaksi) disimpan di memori aplikasi (service Angular) selama aplikasi berjalan
