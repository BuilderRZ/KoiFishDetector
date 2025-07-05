# 🐟 KoiFishDetector — Powered by Nebulir Labs

![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=github)
[![MIT License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

**KoiFishDetector** adalah aplikasi AI berbasis web untuk mendeteksi apakah gambar yang diunggah mengandung ikan koi. Dibangun menggunakan TensorFlow.js dan model custom hasil training pribadi.

---

## 🌐 Live Demo

🚀 Langsung coba aplikasinya di sini:  
👉 [https://builderrz.github.io/KoiFishDetector/](https://builderrz.github.io/KoiFishDetector/)

---

## 🎯 Fitur Utama

- ✅ Deteksi ikan koi secara lokal di browser (tanpa upload ke server)
- 🎯 Menggunakan model TensorFlow.js custom
- 🖼️ Preview gambar dan hasil prediksi real-time
- 🔈 Suara responsif saat prediksi berhasil
- ⚡ Ringan & bisa dijalankan offline (via Python local server)

---

## 🧠 Teknologi yang Digunakan

| Komponen      | Teknologi                    |
|---------------|-------------------------------|
| Framework     | HTML, CSS, JavaScript         |
| AI/ML         | TensorFlow.js                 |
| Model         | Trained Koi Image Classifier  |
| Hosting       | GitHub Pages                  |
| Dev Team      | Rizal (Nebulir Labs)          |

---

## 📁 Struktur Folder

📦KoiFishDetector
┣ 📁audio/ # Efek suara prediksi
┣ 📁model/ # Model TensorFlow.js (.json & .bin)
┣ 📜index.html # Halaman utama web
┣ 📜script.js # Logika utama AI & UI
┣ 📜README.md # Dokumentasi proyek
┗ 📜LICENSE # Lisensi MIT

## 🧪 Cara Menjalankan Secara Lokal

> ⚠️ Diperlukan Python terinstall
```bash
cd path/ke/folder/proyek
python -m http.server 8000
# Buka browser dan kunjungi: http://localhost:8000

📜 Lisensi
Proyek ini menggunakan MIT License — bebas digunakan, dimodifikasi, dan dikembangkan lebih lanjut dengan tetap menyebutkan pembuat aslinya.

Rizal / Nebulir Labs
🚀 Inovasi AI yang membumi dan bervisi antarbintang
📫 Hubungi via GitHub: @BuilderRZ
