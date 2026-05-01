<script>
  const playlistUrl = 'https://youtube.com/playlist?list=PLVqqKblFrXjaA8gYFgYS40rxdmFLhRnjD&si=d3-dkLNu7XzeSOia';

  const work = [
    {
      title: 'MIDIWeb',
      kicker: 'WebMIDI browser for Apple devices',
      desc: 'A dedicated browser for WebMIDI experiences across iOS, iPadOS, macOS and visionOS. Built around virtual MIDI routing and browser-native music tools.',
      link: 'https://5of12.co.uk',
      year: '2024–present',
      index: '01',
      media: ['SwiftUI', 'WebMIDI', 'MIDI routing'],
      mood: 'signal'
    },
    {
      title: 'Noodlr Board',
      kicker: 'Infinite canvas for music ideas',
      desc: 'A collaborative space for pre-production: audio references, comments, tasks, WebAudio experiments and musical idea development before the DAW.',
      link: 'https://5of12.github.io/noodlrboard/',
      year: '2024–present',
      index: '02',
      media: ['Canvas', 'Audio notes', 'Collaboration'],
      mood: 'canvas'
    },
    {
      title: 'Pezzi',
      kicker: 'Music in Pieces',
      desc: 'A musical puzzle game for WebXR and desktop, designed around playful interactions, quick musical feedback and accessible music-making mechanics.',
      link: 'https://5of12.co.uk',
      year: '2025–present',
      index: '03',
      media: ['WebXR', 'Music game', 'Audio UX'],
      mood: 'toybox'
    },
    {
      title: 'XR + audio prototypes',
      kicker: 'Spatial instruments and interaction systems',
      desc: 'Experiments in hand tracking, haptics, physical modelling and novel musical interfaces across Unity, Apple platforms and the web.',
      link: playlistUrl,
      year: 'ongoing',
      index: '04',
      media: ['Hand tracking', 'Haptics', 'Instruments'],
      mood: 'orbit'
    }
  ];

  const prototypes = [
    {
      title: 'Pulse', repo: '5of12/Pulse', href: 'https://5of12.github.io/Pulse/', repoUrl: 'https://github.com/5of12/Pulse',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FPulse%2F&screenshot=true&meta=false&embed=screenshot.url',
      desc: 'Audio-reactive and interaction-led prototype work from 5of12.', tags: ['Audio', 'Prototype', 'Pulse']
    },
    {
      title: 'Augment', repo: '5of12/Augment', href: 'https://5of12.github.io/Augment/', repoUrl: 'https://github.com/5of12/Augment',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FAugment%2F&screenshot=true&meta=false&embed=screenshot.url',
      desc: 'Spatial computing and augmentation experiments for real-world interfaces.', tags: ['XR', 'Spatial UI', 'Play']
    },
    {
      title: 'PocketOperations', repo: '5of12/PocketOperations', href: 'https://5of12.github.io/PocketOperations/', repoUrl: 'https://github.com/5of12/PocketOperations',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FPocketOperations%2F&screenshot=true&meta=false&embed=screenshot.url',
      desc: 'Compact operational tooling and mobile-first interaction experiments.', tags: ['Mobile', 'Tools', 'Workflow']
    },
    {
      title: 'MIDIWeb Hub', repo: '5of12/MIDIWeb-Hub', href: 'https://5of12.github.io/MIDIWeb-Hub/', repoUrl: 'https://github.com/5of12/MIDIWeb-Hub',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FMIDIWeb-Hub%2F&screenshot=true&meta=false&embed=screenshot.url',
      desc: 'A curated hub for WebMIDI tools, experiments and browser-based music experiences.', tags: ['WebMIDI', 'Directory', 'Music web']
    }
  ];

  const capabilities = ['Spatial interaction', 'Audio systems', 'Image processing', 'WebMIDI + WebAudio', 'SwiftUI + Apple platforms', 'Unity + XR prototyping', 'AI-assisted development workflows'];
</script>

<svelte:head>
  <title>Antony Nascè — Creative Technologist</title>
  <meta name="description" content="Creative technologist and product developer building playful tools for sound, image, space and interaction." />
</svelte:head>

<header class="site-header">
  <a class="wordmark" href="/ant-portfolio/">Antony Nascè</a>
  <nav aria-label="Primary navigation">
    <a href="#work">Work</a>
    <a href="#prototypes">Prototypes</a>
    <a href="#media">Media</a>
    <a href="#practice">Practice</a>
  </nav>
</header>

<main>
  <section class="hero reveal">
    <div class="hero-copy">
      <p class="eyebrow">Creative Technologist · Musical Systems · Spatial Play</p>
      <h1>I make playful tools for sound, image, space and interaction.</h1>
      <p class="lede">I’m Antony Nascè: a composer, sound designer and product developer building audiovisual systems, browser-based music tools and spatial computing prototypes through 5of12.</p>
      <div class="hero-actions">
        <a href="#work">Explore the work</a>
        <a href={playlistUrl} target="_blank" rel="noreferrer">Watch experiments</a>
      </div>
    </div>

    <aside class="play-orbit" aria-label="Animated audiovisual motif">
      <span class="orb one"></span>
      <span class="orb two"></span>
      <span class="orb three"></span>
      <span class="ring"></span>
      <div class="sequencer" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <p>Current focus</p>
      <strong>New instruments for musical interaction.</strong>
      <span class="caption">Web · XR · Apple platforms · sound</span>
    </aside>
  </section>

  <section id="work" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Selected work</p>
      <h2>Things to play, test, perform with and build upon.</h2>
    </div>

    <div class="work-list">
      {#each work as item}
        <article class={`work-card ${item.mood}`}>
          <div class="work-topline">
            <span>{item.index}</span>
            <p>{item.year}</p>
          </div>
          <div class="visual-instrument" aria-label={`${item.title} visual motif`}>
            <b></b><b></b><b></b><b></b><b></b>
          </div>
          <p class="kicker">{item.kicker}</p>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <div class="tag-row">
            {#each item.media as label}<span>{label}</span>{/each}
          </div>
          <a href={item.link} target="_blank" rel="noreferrer">Open project</a>
        </article>
      {/each}
    </div>
  </section>

  <section id="prototypes" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Prototype links</p>
      <h2>Live snapshots from small, curious 5of12 builds.</h2>
    </div>

    <div class="prototype-grid">
      {#each prototypes as item}
        <article class="prototype-card">
          <a class="prototype-image" href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} live site`}>
            <img src={item.preview} alt={`${item.title} live site preview`} loading="lazy" />
          </a>
          <div class="prototype-body">
            <p class="repo-name">{item.repo}</p>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div class="prototype-links">
              <a href={item.href} target="_blank" rel="noreferrer">Live site</a>
              <a href={item.repoUrl} target="_blank" rel="noreferrer">Repository</a>
            </div>
            <div class="tag-row">
              {#each item.tags as tag}<span>{tag}</span>{/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section id="media" class="section reveal media-section">
    <div class="section-heading">
      <p class="eyebrow">Media</p>
      <h2>Dev videos, sonic sketches and interaction tests.</h2>
    </div>
    <a class="playlist-card" href={playlistUrl} target="_blank" rel="noreferrer">
      <div class="play-symbol">▶</div>
      <div>
        <p class="eyebrow">YouTube playlist</p>
        <h3>Watch the development process</h3>
        <p>Sketches, prototypes and experiments from audiovisual product development work.</p>
      </div>
    </a>
  </section>

  <section id="practice" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Practice</p>
      <h2>A practice shaped by audio, VFX tooling, XR and product thinking.</h2>
    </div>
    <div class="practice-grid">
      <article><h3>5of12</h3><p>Co-founder and Product Director of a creative technology studio working across spatial interaction, haptics, audio technology and rapid software prototyping.</p></article>
      <article><h3>VFX software foundations</h3><p>Earlier work at The Foundry shaped my approach to image processing, creative pipelines and professional software tools for artists.</p></article>
      <article><h3>Pervasive Media Studio</h3><p>Resident at Bristol’s creative technology hub, developing work around spatial computing, musical interfaces and accessible creative technology.</p></article>
      <article><h3>We All Play Synth</h3><p>Co-founder of an electronic music open mic night supporting grassroots synth culture, performance and experimentation.</p></article>
    </div>
  </section>

  <section class="section capability-section reveal">
    <p class="approach-copy">The thread is simple: reduce the distance between an idea and a sound.</p>
    <div class="capability-grid" aria-label="Capabilities">
      {#each capabilities as capability}<span>{capability}</span>{/each}
    </div>
  </section>
</main>

<footer id="contact">
  <p>Antony Nascè · Bristol / London · <a href="mailto:antonynasce@gmail.com">antonynasce@gmail.com</a></p>
</footer>

<style>
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; }
  :global(body) {
    margin: 0;
    background: #f8f3e8;
    color: #17120e;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
  :global(body)::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 16% 22%, rgba(255, 109, 64, 0.18), transparent 20rem),
      radial-gradient(circle at 86% 18%, rgba(58, 134, 255, 0.16), transparent 22rem),
      radial-gradient(circle at 70% 88%, rgba(255, 190, 64, 0.16), transparent 18rem),
      linear-gradient(to right, rgba(23, 18, 14, 0.035) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(23, 18, 14, 0.022) 1px, transparent 1px);
    background-size: auto, auto, auto, 86px 86px, 86px 86px;
  }
  .site-header, main, footer { width: min(100% - 2rem, 1180px); margin-inline: auto; }
  .site-header {
    position: sticky; top: 0; z-index: 10; display: flex; justify-content: space-between; align-items: center; gap: 1rem;
    padding: 0.9rem 0; border-bottom: 1px solid rgba(23,18,14,0.12); backdrop-filter: blur(18px); background: rgba(248,243,232,0.78);
  }
  .wordmark, nav a, footer a, .hero-actions a, .work-card a, .playlist-card, .prototype-card a { color: inherit; text-decoration: none; }
  .wordmark { font-weight: 720; letter-spacing: -0.04em; white-space: nowrap; }
  nav { display: flex; gap: clamp(0.7rem, 1.8vw, 1.45rem); color: #66594e; font-size: 0.92rem; }
  nav a:hover, footer a:hover, .work-card a:hover, .prototype-links a:hover { color: #ff5c35; }

  .hero { min-height: 86svh; display: grid; grid-template-columns: 1fr minmax(260px, 380px); gap: clamp(2rem, 7vw, 5rem); align-items: center; padding: clamp(4rem, 10vw, 8rem) 0; }
  .eyebrow { margin: 0 0 1rem; color: #66594e; font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; }
  h1, h2, h3, p { margin-top: 0; }
  h1 { max-width: 1040px; margin-bottom: 2rem; font-size: clamp(3.2rem, 8.4vw, 8.8rem); line-height: 0.88; letter-spacing: -0.085em; font-weight: 760; }
  .lede { max-width: 760px; color: #5a4f45; font-size: clamp(1.1rem, 2vw, 1.5rem); line-height: 1.48; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 2rem; }
  .hero-actions a, .work-card a, .prototype-links a { border: 1px solid rgba(23,18,14,0.18); border-radius: 999px; padding: 0.52rem 0.78rem; background: rgba(255,255,255,0.3); transition: transform 180ms ease, background 180ms ease; }
  .hero-actions a:hover, .work-card a:hover, .prototype-links a:hover { transform: translateY(-2px); background: rgba(255,255,255,0.62); }

  .play-orbit { position: relative; min-height: 28rem; border: 1px solid rgba(23,18,14,0.14); border-radius: 2rem; padding: 1.25rem; display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden; background: rgba(255,255,255,0.26); box-shadow: 0 24px 80px rgba(23,18,14,0.06); }
  .play-orbit p, .play-orbit .caption { color: #66594e; margin: 0; z-index: 2; }
  .play-orbit strong { z-index: 2; margin: 0.8rem 0; font-size: clamp(1.5rem, 2.8vw, 2.7rem); line-height: 0.98; letter-spacing: -0.06em; }
  .ring { position: absolute; width: 18rem; height: 18rem; border: 1px solid rgba(23,18,14,0.16); border-radius: 50%; left: 50%; top: 38%; transform: translate(-50%, -50%); animation: spin 18s linear infinite; }
  .orb { position: absolute; border-radius: 50%; filter: blur(0.2px); animation: floaty 6s ease-in-out infinite; }
  .one { width: 6rem; height: 6rem; background: #ff5c35; left: 18%; top: 16%; }
  .two { width: 3.8rem; height: 3.8rem; background: #3a86ff; right: 18%; top: 30%; animation-delay: -1.8s; }
  .three { width: 2.6rem; height: 2.6rem; background: #ffbe40; left: 46%; top: 52%; animation-delay: -3s; }
  .sequencer { position: absolute; inset: auto 1.25rem 1.25rem; display: grid; grid-template-columns: repeat(8, 1fr); gap: 0.35rem; opacity: 0.55; }
  .sequencer i { height: 0.55rem; border-radius: 999px; background: rgba(23,18,14,0.18); animation: step 1.6s infinite; }
  .sequencer i:nth-child(3n) { background: #ff5c35; } .sequencer i:nth-child(4n) { background: #3a86ff; } .sequencer i:nth-child(5n) { background: #ffbe40; }

  .section { padding: clamp(4rem, 8vw, 7rem) 0; border-top: 1px solid rgba(23,18,14,0.12); }
  .section-heading { display: grid; grid-template-columns: minmax(9rem, 0.34fr) 1fr; gap: clamp(1.5rem, 4vw, 4rem); margin-bottom: clamp(2rem, 5vw, 4rem); }
  h2 { max-width: 880px; font-size: clamp(2.2rem, 5.1vw, 5.4rem); line-height: 0.94; letter-spacing: -0.075em; font-weight: 740; }

  .work-list { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
  .work-card { position: relative; min-height: 34rem; display: flex; flex-direction: column; justify-content: space-between; padding: clamp(1rem, 2.4vw, 1.5rem); border: 1px solid rgba(23,18,14,0.14); border-radius: 1.4rem; background: rgba(255,255,255,0.32); overflow: hidden; transition: transform 220ms ease, box-shadow 220ms ease; }
  .work-card:hover { transform: translateY(-7px) rotate(-0.6deg); box-shadow: 0 24px 70px rgba(23,18,14,0.10); }
  .work-card::before { content: ''; position: absolute; inset: 0; opacity: 0.28; background: radial-gradient(circle at 30% 20%, var(--accent), transparent 16rem); pointer-events: none; }
  .signal { --accent: #3a86ff; } .canvas { --accent: #ffbe40; } .toybox { --accent: #ff5c35; } .orbit { --accent: #7bd88f; }
  .work-topline, .tag-row, .prototype-links { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: space-between; align-items: center; }
  .work-topline span { font-size: 2.3rem; letter-spacing: -0.08em; }
  .work-topline p, .kicker, .repo-name { color: #66594e; font-size: 0.9rem; }
  .visual-instrument { position: relative; height: 8rem; margin: 1.5rem 0; display: flex; gap: 0.35rem; align-items: end; }
  .visual-instrument b { flex: 1; min-width: 0.45rem; border-radius: 999px 999px 0 0; background: var(--accent); animation: meter 1.8s ease-in-out infinite; }
  .visual-instrument b:nth-child(2) { height: 70%; animation-delay: -0.2s; } .visual-instrument b:nth-child(3) { height: 35%; animation-delay: -0.5s; } .visual-instrument b:nth-child(4) { height: 85%; animation-delay: -0.8s; } .visual-instrument b:nth-child(5) { height: 52%; animation-delay: -1s; }
  .work-card h3, .prototype-card h3, .playlist-card h3, .practice-grid h3 { font-size: clamp(1.5rem, 2.3vw, 2.2rem); line-height: 1; letter-spacing: -0.055em; margin-bottom: 0.8rem; }
  .work-card p, .prototype-body p, .playlist-card p:not(.eyebrow), .practice-grid p { color: #4e443c; line-height: 1.55; }
  .tag-row span, .capability-grid span { border: 1px solid rgba(23,18,14,0.14); border-radius: 999px; padding: 0.23rem 0.5rem; color: #66594e; background: rgba(255,255,255,0.25); font-size: 0.86rem; }

  .prototype-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
  .prototype-card { border-radius: 1.4rem; border: 1px solid rgba(23,18,14,0.14); background: rgba(255,255,255,0.34); overflow: hidden; transition: transform 220ms ease, box-shadow 220ms ease; }
  .prototype-card:hover { transform: translateY(-6px); box-shadow: 0 22px 60px rgba(23,18,14,0.09); }
  .prototype-image { display: block; overflow: hidden; background: #ded6c5; }
  .prototype-card img { width: 100%; aspect-ratio: 1.65 / 1; object-fit: cover; display: block; filter: saturate(1.05) contrast(0.98); transform: scale(1.01); transition: transform 500ms ease; }
  .prototype-card:hover img { transform: scale(1.045); }
  .prototype-body { padding: clamp(1.1rem, 3vw, 1.6rem); }
  .prototype-links { justify-content: flex-start; margin: 1rem 0; }

  .playlist-card { display: grid; grid-template-columns: minmax(160px, 0.3fr) 1fr; gap: clamp(1.5rem, 4vw, 4rem); align-items: center; min-height: 20rem; border: 1px solid rgba(23,18,14,0.14); border-radius: 1.6rem; padding: clamp(1.25rem, 4vw, 3rem); background: rgba(255,255,255,0.34); transition: transform 220ms ease, box-shadow 220ms ease; }
  .playlist-card:hover { transform: translateY(-6px) rotate(0.4deg); box-shadow: 0 24px 70px rgba(23,18,14,0.10); }
  .play-symbol { width: clamp(7rem, 13vw, 11rem); aspect-ratio: 1; display: grid; place-items: center; border-radius: 50%; background: #ff5c35; color: #fff; font-size: clamp(3rem, 7vw, 6rem); box-shadow: inset 0 -8px 0 rgba(0,0,0,0.08); }

  .practice-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
  .practice-grid article { min-height: 17rem; padding: clamp(1.25rem, 3vw, 2rem); border-radius: 1.4rem; border: 1px solid rgba(23,18,14,0.14); background: rgba(255,255,255,0.32); }
  .capability-section { display: grid; grid-template-columns: 1fr minmax(260px, 0.55fr); gap: clamp(2rem, 5vw, 4rem); }
  .approach-copy { max-width: 800px; font-size: clamp(1.8rem, 4vw, 4rem); line-height: 0.98; letter-spacing: -0.065em; font-weight: 740; }
  .capability-grid { display: flex; flex-wrap: wrap; align-content: start; gap: 0.55rem; }
  footer { padding: 2rem 0 3rem; border-top: 1px solid rgba(23,18,14,0.12); color: #66594e; font-size: 0.92rem; }

  .reveal { animation: reveal 700ms ease both; }
  @keyframes reveal { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes floaty { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.04); } }
  @keyframes spin { to { rotate: 360deg; } }
  @keyframes step { 0%, 100% { transform: scaleY(0.6); opacity: 0.45; } 50% { transform: scaleY(1.5); opacity: 1; } }
  @keyframes meter { 0%, 100% { height: 28%; } 50% { height: 100%; } }

  @media (max-width: 1100px) { .work-list, .practice-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 900px) { .hero, .section-heading, .playlist-card, .capability-section, .prototype-grid { grid-template-columns: 1fr; } }
  @media (max-width: 680px) { nav { width: 100%; overflow-x: auto; } .site-header { align-items: flex-start; flex-direction: column; } .work-list, .practice-grid { grid-template-columns: 1fr; } .work-card { min-height: 28rem; } }
  @media (prefers-reduced-motion: reduce) { :global(html) { scroll-behavior: auto; } *, *::before, *::after { animation: none !important; transition: none !important; } }
</style>
