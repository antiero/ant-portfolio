<script>
  const apps = [
    {
      name: 'xybuddy',
      icon: 'xybuddy.png',
      crop: 'xybuddy',
      description: 'A calm companion for backing up, browsing and managing Teenage Engineering OP–XY projects.',
      platforms: ['iOS', 'macOS'],
      href: 'https://github.com/antiero/TEBuddy'
    },
    {
      name: 'MIDIWeb Browser',
      icon: 'midiweb-browser.png',
      description: 'A browser that brings native CoreMIDI devices to WebMIDI instruments and musical tools.',
      platforms: ['iOS', 'macOS', 'visionOS'],
      href: 'https://github.com/5of12/MIDIWeb'
    },
    {
      name: 'SVGWhiz',
      icon: 'svgwhiz.png',
      crop: 'svgwhiz',
      description: 'Native image tracing that turns raster artwork into clean, editable and efficient SVGs.',
      platforms: ['iOS', 'macOS'],
      href: 'https://github.com/antiero/SVGWhiz'
    },
    {
      name: 'noodlr',
      icon: 'noodlr.png',
      crop: 'noodlr',
      description: 'A music-native space to capture ideas, connect instruments and shape projects together.',
      platforms: ['iOS', 'macOS', 'visionOS'],
      href: 'https://noodlr.xyz'
    },
    {
      name: 'Playtonik',
      icon: 'playtonik.png',
      description: 'A tactile musical fidget toy where glowing notes tumble through playful geometric worlds.',
      platforms: ['iOS', 'macOS', 'visionOS'],
      href: 'https://playtonik.cc'
    },
    {
      name: 'TypeTone',
      icon: 'typetone.png',
      description: 'A scale-aware musical typing instrument with expressive trackpad control and sequencing.',
      platforms: ['macOS', 'visionOS'],
      href: 'https://github.com/5of12/TypeTone'
    },
    {
      name: 'LoopAhoy',
      icon: 'loopahoy.png',
      description: 'A radio sampler with an always-running tape: catch a moment, loop it and return to now.',
      platforms: ['iOS', 'macOS', 'tvOS', 'visionOS'],
      href: 'https://loopahoy.com'
    },
    {
      name: 'Mixlet',
      icon: 'mixlet.png',
      crop: 'mixlet',
      description: 'A lightweight Mac audio mixer for combining app sound and microphones into one recordable mix.',
      platforms: ['macOS'],
      href: 'https://github.com/5of12/mixlet'
    },
    {
      name: 'MIDIVision',
      icon: 'midivision.png',
      description: 'Expressive music-making through live camera hand tracking, gesture and MIDI.',
      platforms: ['iOS', 'macOS'],
      href: 'https://github.com/5of12/MIDIVision'
    }
  ];
</script>

<section id="apps" class="apps-section reveal">
  <div class="section-heading">
    <p class="eyebrow">Apple apps · in development</p>
    <div>
      <h2>Nine apps in the workshop.</h2>
      <p class="section-intro">Native instruments and creative tools made for Apple platforms.</p>
    </div>
  </div>

  <div class="app-grid">
    {#each apps as app}
      <article class="app-item">
        <div class={`app-icon ${app.crop ? `crop-${app.crop}` : ''}`}>
          <img src={`./apps/${app.icon}`} alt={`${app.name} app icon`} loading="lazy" />
        </div>
        <div class="app-copy">
          <h3>{app.name}</h3>
          <p>{app.description}</p>
        </div>
        <div class="app-meta">
          <div class="platforms" aria-label={`${app.name} platforms`}>
            {#each app.platforms as platform}
              <span title={`${platform} app`}>{platform}</span>
            {/each}
          </div>
          <a href={app.href} target="_blank" rel="noreferrer" title={`Open ${app.name} project`}>
            Project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .apps-section {
    padding: clamp(4rem, 8vw, 7rem) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    scroll-margin-top: 4.5rem;
  }

  .section-heading {
    display: grid;
    grid-template-columns: minmax(9rem, 0.34fr) 1fr;
    gap: clamp(1.5rem, 4vw, 4rem);
    margin-bottom: clamp(2.5rem, 6vw, 5rem);
  }

  .eyebrow {
    margin: 0 0 1rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.76rem;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  h2, h3, p { margin-top: 0; }

  h2 {
    max-width: 880px;
    margin-bottom: 1.35rem;
    font-size: clamp(2.1rem, 4.5vw, 4.9rem);
    line-height: 1;
    letter-spacing: -0.058em;
    font-weight: 600;
  }

  .section-intro {
    max-width: 34rem;
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.62);
    font-size: clamp(1rem, 1.4vw, 1.18rem);
    line-height: 1.55;
  }

  .app-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .app-item {
    min-width: 0;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    padding: clamp(1.25rem, 2.6vw, 2rem);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    animation: app-rise 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .app-item:nth-child(2) { animation-delay: 60ms; }
  .app-item:nth-child(3) { animation-delay: 120ms; }
  .app-item:nth-child(4) { animation-delay: 180ms; }
  .app-item:nth-child(5) { animation-delay: 240ms; }
  .app-item:nth-child(6) { animation-delay: 300ms; }
  .app-item:nth-child(7) { animation-delay: 360ms; }
  .app-item:nth-child(8) { animation-delay: 420ms; }
  .app-item:nth-child(9) { animation-delay: 480ms; }

  .app-item:not(:nth-child(3n + 1)) { border-left: 1px solid rgba(255, 255, 255, 0.12); }

  .app-icon {
    width: clamp(7.5rem, 12vw, 10rem);
    aspect-ratio: 1;
    flex: 0 0 auto;
    margin-bottom: clamp(2.25rem, 4vw, 3.5rem);
    border-radius: 23%;
    overflow: hidden;
    filter: drop-shadow(0 1.25rem 1.5rem rgba(0, 0, 0, 0.24));
    transition: transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 350ms ease;
  }

  .app-icon img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .crop-xybuddy img { transform: scale(1.045); }
  .crop-noodlr img { transform: scale(1.05); }
  .crop-svgwhiz img { transform: scale(1.085); }
  .crop-mixlet img { transform: scale(1.14); }

  .app-item:hover .app-icon {
    transform: translateY(-0.4rem) scale(1.025);
    filter: drop-shadow(0 1.6rem 1.8rem rgba(0, 0, 0, 0.34));
  }

  .app-copy { flex: 1; }

  h3 {
    margin-bottom: 0.8rem;
    font-size: clamp(1.55rem, 2.15vw, 2.1rem);
    line-height: 1.02;
    letter-spacing: -0.048em;
    font-weight: 600;
  }

  .app-copy p {
    max-width: 29rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.55;
    font-weight: 370;
  }

  .app-meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
  }

  .platforms { display: flex; flex-wrap: wrap; gap: 0.4rem; }

  .platforms span {
    color: rgba(255, 255, 255, 0.48);
    font-size: 0.72rem;
    letter-spacing: 0.035em;
  }

  .platforms span:not(:last-child)::after {
    content: '·';
    margin-left: 0.4rem;
    color: rgba(255, 255, 255, 0.22);
  }

  a {
    flex: 0 0 auto;
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.78rem;
    text-decoration: none;
    transition: color 180ms ease, transform 180ms ease;
  }

  a span { display: inline-block; transition: transform 180ms ease; }
  a:hover { color: #fff; }
  a:hover span { transform: translate(0.12rem, -0.12rem); }
  a:focus-visible { outline: 2px solid #fff; outline-offset: 0.35rem; border-radius: 0.1rem; }

  @keyframes app-rise {
    from { opacity: 0; transform: translateY(0.75rem); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 960px) {
    .app-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .app-item:not(:nth-child(3n + 1)) { border-left: 0; }
    .app-item:nth-child(even) { border-left: 1px solid rgba(255, 255, 255, 0.12); }
  }

  @media (max-width: 680px) {
    .apps-section { scroll-margin-top: 7rem; }
    .section-heading, .app-grid { grid-template-columns: 1fr; }
    .app-item { min-height: 27rem; padding-inline: 0; }
    .app-item:nth-child(even) { border-left: 0; }
    .app-icon { width: 8.5rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .app-item { animation: none; }
    .app-icon, a, a span { transition: none; }
  }
</style>
