<script lang="ts">
  const apps = [
    {
      name: 'xybuddy', icon: 'xybuddy.png', crop: 'xybuddy',
      description: 'Back up, browse and manage Teenage Engineering OP–XY projects.',
      links: [
        { label: 'TestFlight', href: 'https://testflight.apple.com/join/Hg8CwZNE' },
        { label: 'Project', href: 'https://github.com/antiero/TEBuddy' }
      ]
    },
    {
      name: 'MIDIWeb', icon: 'midiweb-browser.png',
      description: 'A native browser that connects CoreMIDI devices to WebMIDI instruments.',
      links: [
        { label: 'App Store', href: 'https://apps.apple.com/app/midiweb-browser/id6757226617' },
        { label: 'Web', href: 'https://midiweb.app' }
      ]
    },
    {
      name: 'SVGWhiz', icon: 'svgwhiz.png', crop: 'svgwhiz',
      description: 'Turn raster artwork into clean, editable and efficient SVGs.',
      links: [{ label: 'TestFlight', href: 'https://testflight.apple.com/join/EAyS5eVH' }]
    },
    {
      name: 'noodlr', icon: 'noodlr.png', crop: 'noodlr',
      description: 'Capture musical ideas, connect instruments and shape projects together.',
      links: [
        { label: 'TestFlight', href: 'https://testflight.apple.com/join/8TDpgyAt' },
        { label: 'Web', href: 'https://noodlr.xyz' }
      ]
    },
    {
      name: 'Playtonik', icon: 'playtonik.png',
      description: 'A tactile musical fidget toy filled with glowing notes and playful geometry.',
      links: [
        { label: 'App Store', href: 'https://apps.apple.com/app/playtonik/id6738356927' },
        { label: 'TestFlight', href: 'https://testflight.apple.com/join/vfTJ4Hmt' },
        { label: 'Web', href: 'https://playtonik.cc' }
      ]
    },
    {
      name: 'TypeTone', icon: 'typetone.png',
      description: 'Turn everyday typing into a scale-aware musical instrument.',
      links: [
        { label: 'TestFlight', href: 'https://testflight.apple.com/join/SnwYREc9' },
        { label: 'Web', href: 'https://5of12.github.io/TypeTone/' }
      ]
    },
    {
      name: 'LoopAhoy', icon: 'loopahoy.png',
      description: 'Catch a moment from live radio, loop it and return to now.',
      links: [
        { label: 'TestFlight', href: 'https://testflight.apple.com/join/ZGesT8h6' },
        { label: 'Web', href: 'https://loopahoy.com' }
      ]
    },
    {
      name: 'Mixlet', icon: 'mixlet.png', crop: 'mixlet',
      description: 'Mix Mac audio and a microphone into one simple output.',
      links: [
        { label: 'TestFlight', href: 'https://testflight.apple.com/join/3b3w83xD' },
        { label: 'Web', href: 'https://5of12.github.io/mixlet/' }
      ]
    },
    {
      name: 'MIDIVision', icon: 'midivision.png',
      description: 'Make music through live camera hand tracking, gesture and MIDI.',
      links: [
        { label: 'TestFlight', href: 'https://testflight.apple.com/join/awhkc6eb' },
        { label: 'Web', href: 'https://5of12.github.io/MIDIVision/' }
      ]
    }
  ];

  let activeAppName: string | null = null;
  let isPinned = false;
  $: activeApp = apps.find((app) => app.name === activeAppName) ?? null;

  function showApp(name: string) {
    activeAppName = name;
    isPinned = true;
  }

  function previewApp(name: string) {
    if (!isPinned) activeAppName = name;
  }

  function dismissApp() {
    activeAppName = null;
    isPinned = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') dismissApp();
  }

  function handleWindowClick(event: MouseEvent) {
    if (!(event.target instanceof Element) || !event.target.closest('.app-link, .app-popover')) {
      dismissApp();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} onclick={handleWindowClick} />

<section id="apps" class="apps-section reveal">
  <header class="section-heading">
    <p class="eyebrow">Apps in development</p>
    <h2>A small screen full of ideas.</h2>
  </header>

  <div class="device-stage">
    <div class="device" aria-label="A virtual Apple device showing Antony's apps">
      <div class="camera" aria-hidden="true"></div>
      <div class="screen">
        <div class="status" aria-hidden="true">
          <span>9:41</span>
          <span>●●●</span>
        </div>

        <div class="app-grid">
          {#each apps as app}
            <button
              class="app-link"
              class:active={activeAppName === app.name}
              type="button"
              aria-label={`Show ${app.name} details`}
              aria-expanded={activeAppName === app.name}
              aria-controls="app-popover"
              title={`About ${app.name}`}
              onmouseenter={() => previewApp(app.name)}
              onfocus={() => previewApp(app.name)}
              onclick={() => showApp(app.name)}
            >
              <span class={`app-icon ${app.crop ? `crop-${app.crop}` : ''}`}>
                <img src={`./apps/${app.icon}`} alt="" loading="lazy" />
              </span>
              <span class="app-name">{app.name}</span>
            </button>
          {/each}
        </div>

        {#if activeApp}
          <div
            id="app-popover"
            class="app-popover"
            role="dialog"
            aria-labelledby="popover-title"
          >
            <div class="popover-heading">
              <span class={`popover-icon ${activeApp.crop ? `crop-${activeApp.crop}` : ''}`}>
                <img src={`./apps/${activeApp.icon}`} alt="" />
              </span>
              <div>
                <h3 id="popover-title">{activeApp.name}</h3>
                <p>{activeApp.description}</p>
              </div>
              <button class="close-popover" type="button" aria-label="Close app details" title="Close" onclick={dismissApp}>×</button>
            </div>
            <nav class="popover-actions" aria-label={`${activeApp.name} links`}>
              {#each activeApp.links as link}
                <a href={link.href} target="_blank" rel="noreferrer">
                  <span>{link.label}</span><span aria-hidden="true">↗</span>
                </a>
              {/each}
            </nav>
          </div>
        {/if}

        <div class="home-indicator" aria-hidden="true"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .apps-section {
    padding: clamp(4.5rem, 9vw, 8rem) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    scroll-margin-top: 4.5rem;
  }

  .section-heading {
    display: grid;
    grid-template-columns: minmax(9rem, 0.34fr) 1fr;
    gap: clamp(1.5rem, 4vw, 4rem);
    align-items: start;
    margin-bottom: clamp(2.5rem, 6vw, 5rem);
  }

  .eyebrow {
    margin: 0;
    color: rgba(255, 255, 255, 0.56);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 820px;
    margin: 0;
    font-size: clamp(2.4rem, 5vw, 5.4rem);
    line-height: 0.96;
    letter-spacing: -0.062em;
    font-weight: 580;
  }

  .device-stage {
    position: relative;
    display: grid;
    place-items: center;
    padding: clamp(1rem, 4vw, 3rem);
    perspective: 1400px;
  }

  .device-stage::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 76%;
    height: 42%;
    bottom: -2%;
    border-radius: 50%;
    background: rgba(79, 87, 148, 0.26);
    filter: blur(5rem);
  }

  .device {
    position: relative;
    width: min(100%, 1020px);
    aspect-ratio: 4 / 3;
    padding: clamp(0.7rem, 1.8vw, 1.25rem);
    border: 1px solid rgba(255, 255, 255, 0.26);
    border-radius: clamp(1.7rem, 3.5vw, 3.2rem);
    background: linear-gradient(145deg, #45454a 0%, #151518 32%, #050506 72%, #343439 100%);
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(255, 255, 255, 0.08);
    transform: rotateX(1.2deg);
    animation: device-arrive 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .camera {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: clamp(0.25rem, 0.7vw, 0.55rem);
    width: 0.3rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #11131c;
    box-shadow: inset 0 0 0 1px rgba(94, 105, 141, 0.35);
  }

  .screen {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: clamp(1.1rem, 2.5vw, 2.2rem);
    background:
      radial-gradient(circle at 82% 14%, rgba(255, 185, 139, 0.76), transparent 30%),
      radial-gradient(circle at 18% 88%, rgba(60, 140, 176, 0.72), transparent 36%),
      radial-gradient(circle at 55% 50%, rgba(96, 78, 161, 0.9), transparent 46%),
      linear-gradient(145deg, #132437, #352b60 55%, #6c3f5f);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  }

  .screen::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.09), transparent 32%);
  }

  .status {
    position: absolute;
    z-index: 2;
    top: clamp(0.8rem, 2vw, 1.4rem);
    left: clamp(1.3rem, 3vw, 2.4rem);
    right: clamp(1.3rem, 3vw, 2.4rem);
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.82);
    font-size: clamp(0.55rem, 1vw, 0.76rem);
    font-weight: 600;
    letter-spacing: 0.03em;
  }

  .app-grid {
    position: absolute;
    z-index: 1;
    inset: clamp(3.1rem, 7vw, 5.8rem) clamp(2.2rem, 8vw, 7.6rem) clamp(2.6rem, 5vw, 4.5rem);
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-content: space-between;
    justify-items: center;
    gap: clamp(1.2rem, 3.2vw, 3rem);
  }

  .app-link {
    min-width: 0;
    display: grid;
    justify-items: center;
    align-content: start;
    gap: clamp(0.35rem, 0.8vw, 0.6rem);
    color: #fff;
    appearance: none;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    cursor: pointer;
    transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .app-link:hover, .app-link.active { transform: translateY(-0.35rem) scale(1.035); }
  .app-link:focus-visible { outline: 2px solid #fff; outline-offset: 0.45rem; border-radius: 0.6rem; }

  .app-icon {
    display: block;
    width: clamp(3.3rem, 7.4vw, 6.2rem);
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 23%;
    background: rgba(255, 255, 255, 0.18);
    box-shadow: 0 0.8rem 1.5rem rgba(10, 10, 20, 0.28);
  }

  .app-icon img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .crop-xybuddy img { transform: scale(1.045); }
  .crop-noodlr img { transform: scale(1.05); }
  .crop-svgwhiz img { transform: scale(1.085); }
  .crop-mixlet img { transform: scale(1.14); }

  .app-name {
    max-width: 8rem;
    overflow: hidden;
    color: rgba(255, 255, 255, 0.92);
    font-size: clamp(0.58rem, 1.05vw, 0.82rem);
    line-height: 1.15;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    text-shadow: 0 1px 0.4rem rgba(0, 0, 0, 0.7);
    white-space: nowrap;
  }

  .app-popover {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    width: min(20rem, calc(100% - 2rem));
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 1.25rem;
    background: rgba(32, 32, 38, 0.72);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.12);
    color: #fff;
    backdrop-filter: blur(28px) saturate(1.35);
    transform: translate(-50%, -50%);
    animation: popover-in 180ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .popover-heading { position: relative; display: grid; grid-template-columns: 3rem 1fr; gap: 0.8rem; padding: 1rem; }
  .popover-icon { width: 3rem; aspect-ratio: 1; overflow: hidden; border-radius: 23%; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.24); }
  .popover-icon img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .popover-heading h3 { margin: 0 1.7rem 0.25rem 0; font-size: 1rem; font-weight: 650; letter-spacing: -0.02em; }
  .popover-heading p { margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 0.76rem; line-height: 1.4; }

  .close-popover {
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    width: 1.65rem;
    height: 1.65rem;
    display: grid;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.75);
    font: inherit;
    cursor: pointer;
  }

  .popover-actions { display: grid; border-top: 1px solid rgba(255, 255, 255, 0.13); }
  .popover-actions a { display: flex; justify-content: space-between; min-height: 2.65rem; align-items: center; padding: 0.65rem 1rem; color: #fff; font-size: 0.78rem; font-weight: 550; text-decoration: none; }
  .popover-actions a + a { border-top: 1px solid rgba(255, 255, 255, 0.11); }
  .popover-actions a:hover { background: rgba(255, 255, 255, 0.09); }
  .popover-actions a:focus-visible, .close-popover:focus-visible { outline: 2px solid #fff; outline-offset: -3px; }

  .home-indicator {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: clamp(0.55rem, 1.2vw, 0.9rem);
    width: clamp(4rem, 13vw, 8rem);
    height: 0.22rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    transform: translateX(-50%);
  }

  @keyframes device-arrive {
    from { opacity: 0; transform: translateY(1.4rem) rotateX(5deg); }
    to { opacity: 1; transform: translateY(0) rotateX(1.2deg); }
  }

  @keyframes popover-in {
    from { opacity: 0; transform: translate(-50%, -46%) scale(0.96); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  @media (max-width: 680px) {
    .apps-section { scroll-margin-top: 7rem; }
    .section-heading { grid-template-columns: 1fr; }
    .device-stage { padding-inline: 0; }
    .device { width: min(82vw, 350px); aspect-ratio: 9 / 19.5; padding: 0.55rem; border-radius: 3rem; }
    .screen { border-radius: 2.45rem; }
    .camera { top: 1.15rem; left: 50%; width: 29%; height: 1.55rem; border-radius: 999px; transform: translateX(-50%); background: #050506; }
    .status { top: 1.35rem; left: 1.6rem; right: 1.6rem; font-size: 0.58rem; }
    .status span:last-child { margin-left: auto; }
    .app-grid { inset: 5rem 1.7rem 4rem; grid-template-columns: repeat(3, minmax(0, 1fr)); align-content: start; gap: clamp(2rem, 7vw, 2.8rem) 0.75rem; }
    .app-icon { width: clamp(3.7rem, 17vw, 4.6rem); }
    .app-name { max-width: 5.6rem; font-size: 0.63rem; }
    .app-popover { top: auto; bottom: 1.35rem; width: calc(100% - 1.5rem); transform: translateX(-50%); animation: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .device { animation: none; }
    .app-link { transition: none; }
    .app-popover { animation: none; }
  }
</style>
