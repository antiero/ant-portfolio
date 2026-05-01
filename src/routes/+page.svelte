<script>
  const playlistUrl = 'https://youtube.com/playlist?list=PLVqqKblFrXjaA8gYFgYS40rxdmFLhRnjD&si=d3-dkLNu7XzeSOia';

  const work = [
    {
      title: 'MIDIWeb',
      kicker: 'WebMIDI browser for Apple devices',
      desc: 'A dedicated browser for WebMIDI experiences across iOS, iPadOS, macOS and visionOS. Built around modern SwiftUI, virtual MIDI routing and a belief that browser-based music tools should be available to Apple users.',
      link: 'https://5of12.co.uk',
      year: '2024–present',
      index: '01',
      media: ['SwiftUI', 'WebMIDI', 'MIDI routing']
    },
    {
      title: 'Noodlr Board',
      kicker: 'Infinite canvas for music ideas',
      desc: 'A collaborative workspace for early-stage music creation: audio references, comments, tasks, WebAudio experiments and spatial arrangement before ideas move into a DAW.',
      link: 'https://5of12.github.io/noodlrboard/',
      year: '2024–present',
      index: '02',
      media: ['Canvas', 'Audio notes', 'Collaboration']
    },
    {
      title: 'Pezzi',
      kicker: 'Music in Pieces',
      desc: 'A musical puzzle game for WebXR and desktop, designed around playful interactions, short time-to-sound and accessible music-making mechanics.',
      link: 'https://5of12.co.uk',
      year: '2025–present',
      index: '03',
      media: ['WebXR', 'Music game', 'Audio UX']
    },
    {
      title: 'XR + audio prototypes',
      kicker: 'Spatial instruments and interaction systems',
      desc: 'Experiments in hand tracking, haptics, physical modelling and novel musical interfaces across Unity, Apple platforms and the web.',
      link: playlistUrl,
      year: 'ongoing',
      index: '04',
      media: ['Hand tracking', 'Haptics', 'Instruments']
    }
  ];

  const prototypes = [
    {
      title: 'Pulse',
      repo: '5of12/Pulse',
      href: 'https://5of12.github.io/Pulse/',
      repoUrl: 'https://github.com/5of12/Pulse',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FPulse%2F&screenshot=true&meta=false&embed=screenshot.url',
      desc: 'Audio-reactive and interaction-led prototype work from 5of12.',
      tags: ['Prototype', 'Audio', 'Interaction']
    },
    {
      title: 'Augment',
      repo: '5of12/Augment',
      href: 'https://5of12.github.io/Augment/',
      repoUrl: 'https://github.com/5of12/Augment',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FAugment%2F&screenshot=true&meta=false&embed=screenshot.url',
      desc: 'Spatial computing and augmentation experiments for real-world interfaces.',
      tags: ['XR', 'Spatial UI', 'Prototype']
    },
    {
      title: 'PocketOperations',
      repo: '5of12/PocketOperations',
      href: 'https://5of12.github.io/PocketOperations/',
      repoUrl: 'https://github.com/5of12/PocketOperations',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FPocketOperations%2F&screenshot=true&meta=false&embed=screenshot.url',
      desc: 'Compact operational tooling and mobile-first interaction experiments.',
      tags: ['Mobile', 'Tools', 'Workflow']
    },
    {
      title: 'MIDIWeb Hub',
      repo: '5of12/MIDIWeb-Hub',
      href: 'https://5of12.github.io/MIDIWeb-Hub/',
      repoUrl: 'https://github.com/5of12/MIDIWeb-Hub',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FMIDIWeb-Hub%2F&screenshot=true&meta=false&embed=screenshot.url',
      desc: 'A curated hub for WebMIDI tools, experiments and browser-based music experiences.',
      tags: ['WebMIDI', 'Directory', 'Music web']
    }
  ];

  const capabilities = [
    'Spatial interaction',
    'Audio systems',
    'Image processing',
    'WebMIDI + WebAudio',
    'SwiftUI + Apple platforms',
    'Unity + XR prototyping',
    'AI-assisted development workflows'
  ];
</script>

<svelte:head>
  <title>Antony Nascè — Creative Technologist</title>
  <meta name="description" content="Creative technologist and product developer building tools for sound, image, space and interaction." />
</svelte:head>

<header class="site-header">
  <a class="wordmark" href="/ant-portfolio/">Antony Nascè</a>
  <nav aria-label="Primary navigation">
    <a href="#work">Work</a>
    <a href="#prototypes">Prototypes</a>
    <a href="#media">Media</a>
    <a href="#practice">Practice</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section class="hero reveal">
    <div class="hero-copy">
      <p class="eyebrow">Creative Technologist · Product Developer · Spatial Audio</p>
      <h1>I build creative tools for sound, image, space and interaction.</h1>
      <p class="lede">
        I’m Antony Nascè, a composer, sound designer and product developer creating audiovisual systems,
        musical instruments, WebMIDI tools and spatial computing prototypes through 5of12.
      </p>
      <div class="hero-actions">
        <a href="#work">Selected work</a>
        <a href={playlistUrl} target="_blank" rel="noreferrer">Development playlist</a>
      </div>
    </div>

    <aside class="signal-panel" aria-label="Current focus">
      <p>Current focus</p>
      <strong>New instruments for musical interaction.</strong>
      <span>Web · XR · Apple platforms · Sound</span>
    </aside>
  </section>

  <section id="work" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Selected work</p>
      <h2>Product-led experiments, prototypes and creative systems.</h2>
    </div>

    <div class="work-list">
      {#each work as item}
        <article class="work-item">
          <div class="work-meta">
            <p>{item.kicker}</p>
            <span>{item.year}</span>
          </div>
          <div class="media-card" aria-label={`${item.title} media snapshot`}>
            <span>{item.index}</span>
            <div>
              {#each item.media as label}
                <small>{label}</small>
              {/each}
            </div>
          </div>
          <div class="work-body">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer">Open project</a>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section id="prototypes" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Prototype links</p>
      <h2>Live site snapshots from 5of12 prototypes.</h2>
    </div>

    <div class="prototype-grid">
      {#each prototypes as item}
        <article class="prototype-card">
          <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} live site`}>
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
              {#each item.tags as tag}
                <span>{tag}</span>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section id="media" class="section reveal media-section">
    <div class="section-heading">
      <p class="eyebrow">Media</p>
      <h2>Development videos, prototypes and process notes.</h2>
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
      <h2>A studio practice shaped by audio, image processing, XR and product thinking.</h2>
    </div>

    <div class="practice-grid">
      <article>
        <h3>5of12</h3>
        <p>Co-founder and Product Director of a creative technology studio working across spatial interaction, haptics, audio technology and rapid software prototyping.</p>
      </article>
      <article>
        <h3>VFX software foundations</h3>
        <p>Earlier work at The Foundry shaped my approach to image processing, creative pipelines and professional software tools for artists.</p>
      </article>
      <article>
        <h3>Pervasive Media Studio</h3>
        <p>Resident at Bristol’s creative technology hub, developing new work around spatial computing, musical interfaces and accessible creative technology.</p>
      </article>
      <article>
        <h3>We All Play Synth</h3>
        <p>Co-founder of an electronic music open mic night supporting grassroots synth culture, performance and experimentation.</p>
      </article>
    </div>
  </section>

  <section class="section capability-section reveal">
    <p class="approach-copy">
      I work between engineering and creative practice. The thread is simple: reduce the distance between an idea and a sound.
    </p>
    <div class="capability-grid" aria-label="Capabilities">
      {#each capabilities as capability}
        <span>{capability}</span>
      {/each}
    </div>
  </section>

  <section class="section cv-section reveal">
    <div>
      <p class="eyebrow">CV</p>
      <h2>Creative technology, product development, and audiovisual systems.</h2>
    </div>
    <p>
      A focused overview of my work across audio, image processing, spatial interaction, WebMIDI and product development.
    </p>
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
    background: #f6f5f0;
    color: #11110f;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    text-rendering: optimizeLegibility;
  }
  :global(body)::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(to right, rgba(17, 17, 15, 0.032) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 17, 15, 0.018) 1px, transparent 1px);
    background-size: 96px 96px;
  }
  .site-header, main, footer { width: min(100% - 2rem, 1160px); margin-inline: auto; }
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid #dedbd1;
    backdrop-filter: blur(16px);
    background: rgba(246, 245, 240, 0.84);
  }
  .wordmark, nav a, footer a, .work-body a, .hero-actions a, .playlist-card, .prototype-card a { color: inherit; text-decoration: none; }
  .wordmark { font-weight: 560; letter-spacing: -0.02em; white-space: nowrap; }
  nav { display: flex; gap: clamp(0.7rem, 1.8vw, 1.45rem); color: #65635d; font-size: 0.92rem; }
  nav a:hover, footer a:hover, .work-body a:hover, .hero-actions a:hover, .prototype-links a:hover { color: #c84624; }
  .hero {
    min-height: 84svh;
    display: grid;
    grid-template-columns: 1fr minmax(220px, 320px);
    gap: clamp(2rem, 7vw, 5rem);
    align-items: center;
    padding: clamp(4rem, 10vw, 8rem) 0;
  }
  .eyebrow { margin: 0 0 1rem; color: #65635d; font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; }
  h1, h2, h3, p { margin-top: 0; }
  h1 { max-width: 1040px; margin-bottom: 2rem; font-size: clamp(3rem, 7.8vw, 7.8rem); line-height: 0.92; letter-spacing: -0.075em; font-weight: 520; }
  .lede { max-width: 760px; color: #5e5c56; font-size: clamp(1.1rem, 2vw, 1.45rem); line-height: 1.48; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 1.2rem; margin-top: 2rem; }
  .hero-actions a, .work-body a, .prototype-links a { border-bottom: 1px solid currentColor; text-underline-offset: 0.2em; }
  .signal-panel {
    border: 1px solid #d8d4c9;
    min-height: 22rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255,255,255,0.32);
    transition: transform 220ms ease, background 220ms ease;
  }
  .signal-panel:hover { transform: translateY(-3px); background: rgba(255,255,255,0.48); }
  .signal-panel p, .signal-panel span { color: #65635d; margin: 0; }
  .signal-panel strong { font-size: clamp(1.4rem, 2.4vw, 2.2rem); line-height: 1.05; letter-spacing: -0.045em; font-weight: 520; }
  .section { padding: clamp(4rem, 8vw, 7rem) 0; border-top: 1px solid #dedbd1; }
  .section-heading { display: grid; grid-template-columns: minmax(9rem, 0.38fr) 1fr; gap: clamp(1.5rem, 4vw, 4rem); margin-bottom: clamp(2rem, 5vw, 4rem); }
  h2 { max-width: 820px; font-size: clamp(2rem, 4.7vw, 4.8rem); line-height: 0.98; letter-spacing: -0.06em; font-weight: 520; }
  .work-list { border-bottom: 1px solid #dedbd1; }
  .work-item { display: grid; grid-template-columns: minmax(9rem, 0.28fr) minmax(180px, 0.44fr) 1fr; gap: clamp(1.5rem, 4vw, 4rem); padding: clamp(1.6rem, 4vw, 3rem) 0; border-top: 1px solid #dedbd1; }
  .work-meta { color: #65635d; font-size: 0.9rem; }
  .work-meta p, .work-meta span { margin: 0; }
  .work-meta span { display: block; margin-top: 0.55rem; }
  .media-card { min-height: 11rem; border: 1px solid #d8d4c9; background: linear-gradient(135deg, rgba(200,70,36,0.08), transparent 38%), rgba(255,255,255,0.3); padding: 1rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 220ms ease, border-color 220ms ease; }
  .work-item:hover .media-card { transform: translateY(-3px); border-color: #bbb5a6; }
  .media-card > span { font-size: 2.4rem; letter-spacing: -0.08em; }
  .media-card div { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .media-card small, .tag-row span { border: 1px solid #d8d4c9; border-radius: 999px; padding: 0.2rem 0.45rem; color: #65635d; }
  h3 { margin-bottom: 0.8rem; font-size: clamp(1.45rem, 2.4vw, 2.2rem); letter-spacing: -0.045em; font-weight: 520; }
  .work-body p { max-width: 720px; color: #3c3b37; line-height: 1.62; font-size: clamp(1rem, 1.3vw, 1.1rem); }
  .work-body a { display: inline-block; margin-top: 0.7rem; }
  .prototype-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; background: #dedbd1; border: 1px solid #dedbd1; }
  .prototype-card { background: rgba(255,255,255,0.34); display: grid; grid-template-rows: auto 1fr; min-height: 100%; transition: transform 220ms ease, background 220ms ease; }
  .prototype-card:hover { background: rgba(255,255,255,0.54); transform: translateY(-3px); }
  .prototype-card img { width: 100%; aspect-ratio: 1.91 / 1; object-fit: cover; display: block; background: #dedbd1; border-bottom: 1px solid #dedbd1; }
  .prototype-body { padding: clamp(1.1rem, 3vw, 1.6rem); }
  .prototype-body p { color: #4e4c46; line-height: 1.55; }
  .repo-name { color: #65635d !important; font-size: 0.86rem; margin-bottom: 0.7rem; }
  .prototype-links { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; }
  .tag-row { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1rem; }
  .playlist-card { display: grid; grid-template-columns: minmax(160px, 0.3fr) 1fr; gap: clamp(1.5rem, 4vw, 4rem); align-items: center; min-height: 20rem; border: 1px solid #d8d4c9; padding: clamp(1.25rem, 4vw, 3rem); background: rgba(255,255,255,0.32); transition: transform 220ms ease, background 220ms ease; }
  .playlist-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.5); }
  .play-symbol { font-size: clamp(4rem, 11vw, 9rem); letter-spacing: -0.1em; color: #c84624; }
  .playlist-card p:not(.eyebrow) { max-width: 560px; color: #4e4c46; line-height: 1.6; }
  .practice-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #dedbd1; border: 1px solid #dedbd1; }
  .practice-grid article { min-height: 18rem; padding: clamp(1.25rem, 3vw, 2rem); background: rgba(255,255,255,0.38); }
  .practice-grid p, .approach-copy, .cv-section > p { color: #4e4c46; line-height: 1.65; }
  .capability-section, .cv-section { display: grid; grid-template-columns: 1fr minmax(260px, 0.55fr); gap: clamp(2rem, 5vw, 4rem); }
  .approach-copy { max-width: 760px; font-size: clamp(1.4rem, 3vw, 2.6rem); line-height: 1.18; letter-spacing: -0.045em; }
  .capability-grid { display: flex; flex-wrap: wrap; align-content: start; gap: 0.55rem; }
  .capability-grid span { border: 1px solid #d8d4c9; border-radius: 999px; padding: 0.38rem 0.7rem; color: #4e4c46; background: rgba(255,255,255,0.24); }
  footer { padding: 2rem 0 3rem; border-top: 1px solid #dedbd1; color: #65635d; font-size: 0.92rem; }
  .reveal { animation: reveal 700ms ease both; }
  @keyframes reveal { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width: 1050px) { .practice-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 900px) { .hero, .section-heading, .work-item, .playlist-card, .capability-section, .cv-section, .prototype-grid { grid-template-columns: 1fr; } }
  @media (max-width: 760px) { .site-header { align-items: flex-start; flex-direction: column; } .hero { min-height: 74svh; } nav { width: 100%; justify-content: space-between; overflow-x: auto; } .practice-grid { grid-template-columns: 1fr; } }
  @media (prefers-reduced-motion: reduce) { :global(html) { scroll-behavior: auto; } .reveal, .signal-panel, .media-card, .playlist-card, .prototype-card { animation: none; transition: none; } }
</style>
