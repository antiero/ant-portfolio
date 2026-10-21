<section class="platform-brief" aria-labelledby="platform-heading">
  <div class="platform-copy">
    <p class="eyebrow">Apple device family</p>
    <p id="platform-heading">Apple Device Family native developer for Mac, iPhone, iPad, Apple Watch and spatial computing. Specialist web design in Svelte + Threlte.</p>
  </div>

  <ul class="device-family" aria-label="Apple platforms">
    <li title="Mac">
      <img src="./devices/mac.svg" alt="" />
      <span>Mac</span>
    </li>
    <li title="iPhone">
      <img src="./devices/phone.svg" alt="" />
      <span>iPhone</span>
    </li>
    <li title="iPad">
      <img src="./devices/ipad.svg" alt="" />
      <span>iPad</span>
    </li>
    <li title="Apple Watch">
      <img src="./devices/watch.svg" alt="" />
      <span>Watch</span>
    </li>
    <li title="Apple Vision Pro">
      <img src="./devices/xr.svg" alt="" />
      <span>XR</span>
    </li>
  </ul>
</section>

<style>
  .platform-brief { display: grid; grid-template-columns: minmax(16rem, 0.9fr) minmax(20rem, 1.1fr); gap: clamp(2rem, 7vw, 7rem); align-items: end; margin: -1.2rem 0 clamp(3rem, 6vw, 5.5rem); }
  .platform-copy p:last-child { max-width: 32rem; margin: 0.8rem 0 0; color: rgba(255, 255, 255, 0.68); font-size: clamp(1rem, 1.5vw, 1.18rem); line-height: 1.45; letter-spacing: -0.02em; }
  .eyebrow { margin: 0; color: rgba(255, 255, 255, 0.56); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; }
  .device-family { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: clamp(0.4rem, 1.5vw, 1rem); margin: 0; padding: 0; list-style: none; }
  .device-family li { display: grid; justify-items: center; gap: 0.55rem; color: rgba(255, 255, 255, 0.55); font-size: 0.68rem; letter-spacing: 0.06em; text-transform: uppercase; transition: color 180ms ease, transform 180ms ease; }
  .device-family li:hover { color: #fff; transform: translateY(-0.18rem); }
  .device-family img { width: clamp(2.1rem, 4.3vw, 3.2rem); height: clamp(2.1rem, 4.3vw, 3.2rem); object-fit: contain; }

  @media (max-width: 760px) {
    .platform-brief { grid-template-columns: 1fr; gap: 2rem; margin-top: -0.8rem; }
    .platform-copy p:last-child { max-width: 34rem; }
  }

  @media (prefers-reduced-motion: reduce) { .device-family li { transition: none; } }
</style>
