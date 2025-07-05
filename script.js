let model;

window.onload = async () => {
  try {
    model = await tf.loadLayersModel('./model/model.json');
    console.log("Model loaded!");
  } catch (err) {
    console.error("Gagal memuat model:", err);
  }
};

document.getElementById('imageUpload').addEventListener('change', async function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function (event) {
    const img = new Image();
    img.src = event.target.result;

    img.onload = async function () {
      const preview = document.getElementById('preview');
      const result = document.getElementById('result');
      const subtitle = document.getElementById('subtitle');
      const loading = document.getElementById('loading');

      // Reset UI
      preview.src = img.src;
      preview.style.display = 'block';
      result.innerText = '';
      subtitle.innerText = '';
      loading.style.display = 'block';

      // Preprocessing
      const tensor = tf.browser.fromPixels(img)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();

      // Prediksi
      const prediction = await model.predict(tensor).data();
      const score = prediction[0];
      console.log("🧠 Skor prediksi AI:", score);

      const threshold = 0.4; // <= Bisa kamu ubah: 0.5 jadi 0.4 atau 0.3
      const isKoi = score > threshold;

      // Sembunyikan loading
      loading.style.display = 'none';

      // Tampilkan hasil & mainkan suara
      if (isKoi) {
        result.innerText = "✅ Ini gambar ikan koi! Upload diterima.";
        result.className = "success";
        subtitle.innerText = ">> Ini adalah ikan koi. Upload diterima.";
        playSound("koiSound");
      } else {
        result.innerText = "❌ Bukan gambar ikan koi. Upload ditolak.";
        result.className = "fail";
        subtitle.innerText = ">> Bukan ikan koi. Upload ditolak.";
        playSound("notKoiSound");
      }

      // Scroll ke hasil
      result.scrollIntoView({ behavior: "smooth" });

      // Bersihkan subtitle setelah 4 detik
      setTimeout(() => {
        subtitle.innerText = '';
      }, 4000);
    };
  };

  reader.readAsDataURL(file);
});

function playSound(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(err => {
      console.warn("Autoplay blocked atau audio error:", err);
    });
  }
}

// Tombol scroll manual
document.getElementById("scrollDownBtn").addEventListener("click", () => {
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
});
