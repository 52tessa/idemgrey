// mixing-mastering.js
// Populates the Mixing & Mastering page with service details.

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('mm-info');
  if (!container) return;

  const html = `
    <header class="major">
      <h2>Mixing &amp; Mastering Services</h2>
    </header>
    <p>I provide professional mixing and mastering for singles, EPs and albums. My workflow focuses on clarity, dynamics and translating well across streaming platforms and club systems.</p>

    <section>
      <h3>What I offer</h3>
      <ul>
        <li>Mixing: balance, EQ, compression, automation, FX and stem mixing</li>
        <li>Mastering: loudness optimization, tonal balance, stereo imaging and delivery-ready masters</li>
        <li>Stem mastering and revision rounds included (see pricing)</li>
      </ul>
    </section>

    <section>
      <h3>Process &amp; turnaround</h3>
      <ul>
        <li>Initial review &amp; quote within 24-48 hours</li>
        <li>Typical mixing turnaround: 3-7 business days per song</li>
        <li>Typical mastering turnaround: 24-72 hours per song</li>
        <li>Two revision rounds included for both mixing and mastering</li>
      </ul>
    </section>

    <section>
      <h3>Delivery formats</h3>
      <p>High-resolution WAV (24-bit/44.1-96kHz), MP3 (320kbps), and stems on request. I can also prepare masters tailored for Spotify, Apple Music, and YouTube.</p>
    </section>

    <section>
      <h3>Quick contact</h3>
      <p>To get started, send stems or a reference mix to <a href="mailto:idemgrey@gmail.com">idemgrey@gmail.com</a> with a short description of the project and desired turnaround.</p>
    </section>
  `;

  container.innerHTML = html;
});
