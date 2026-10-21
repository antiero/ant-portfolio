<script>
  import AppShowcase from '../lib/AppShowcase.svelte';
  import SocialLinks from '../lib/SocialLinks.svelte';

  const playlistId = 'PLVqqKblFrXjaA8gYFgYS40rxdmFLhRnjD';
  const playlistUrl = `https://youtube.com/playlist?list=${playlistId}`;
  const playlistEmbed = `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&rel=0`;

  const prototypes = [
    {
      title: 'Pulse',
      href: 'https://5of12.github.io/Pulse/',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FPulse%2F&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'Augment',
      href: 'https://5of12.github.io/Augment/',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FAugment%2F&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'PocketOperations',
      href: 'https://5of12.github.io/PocketOperations/',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FPocketOperations%2F&screenshot=true&meta=false&embed=screenshot.url'
    },
    {
      title: 'MIDIWeb Hub',
      href: 'https://5of12.github.io/MIDIWeb-Hub/',
      preview: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.github.io%2FMIDIWeb-Hub%2F&screenshot=true&meta=false&embed=screenshot.url'
    }
  ];

  const practice = [
    {
      title: '5of12',
      role: 'Co-founder · Product Director',
      text: 'A creative technology studio building audio, spatial and haptic experiences.',
      href: 'https://5of12.co.uk/',
      image: 'https://api.microlink.io/?url=https%3A%2F%2F5of12.co.uk%2F&screenshot=true&meta=false&embed=screenshot.url',
      alt: '5of12 creative technology studio website'
    },
    {
      title: 'Foundry',
      role: 'VFX software foundations',
      text: 'Professional image tools shaped my approach to processing and artist workflows.',
      href: 'https://www.foundry.com/',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.foundry.com%2F&screenshot=true&meta=false&embed=screenshot.url',
      alt: 'Foundry creative software website'
    },
    {
      title: 'Pervasive Media Studio',
      role: 'Studio resident',
      text: 'Part of Bristol’s creative technology research and development community.',
      href: 'https://www.watershed.co.uk/studio/residents/ant-nasc%C3%A8',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.watershed.co.uk%2Fstudio%2F&screenshot=true&meta=false&embed=screenshot.url',
      alt: 'Pervasive Media Studio website'
    },
    {
      title: 'We All Play Synth',
      role: 'Co-founder · Electronic music community',
      text: 'A Bristol open mic where electronic musicians perform, experiment and collaborate.',
      href: 'https://weallplaysynth.com/',
      image: './waps-banner.webp',
      alt: 'We All Play Synth logo',
      logo: true
    }
  ];

  const capabilities = ['Audio systems', 'Spatial interaction', 'Image processing', 'WebMIDI', 'Apple platforms', 'XR prototyping'];
</script>

<svelte:head>
  <title>Antony Nascè — Audiovisual Tinkerer</title>
  <meta name="description" content="Composer and product developer making playful tools for sound, image and space." />
  <link rel="icon" type="image/webp" href="./antony-nasce.webp" />
</svelte:head>

<header class="site-header">
  <a class="wordmark" href="./">Antony Nascè</a>
  <nav aria-label="Primary navigation">
    <a href="#apps">Apps</a>
    <a href="#prototypes">Prototypes</a>
    <a href="#media">Watch</a>
    <a href="#practice">Practice</a>
  </nav>
</header>

<main>
  <section class="hero reveal">
    <div class="hero-copy">
      <p class="eyebrow">Creative technologist · musical systems · spatial play</p>
      <h1>Audiovisual<br />Tinkerer.</h1>
      <div class="introduction">
        <img src="./antony-nasce.webp" alt="Antony Nascè" width="640" height="640" />
        <p>I’m Antony Nascè — a composer and product developer making playful tools for sound, image and space.</p>
      </div>
      <div class="hero-actions">
        <a href="#apps">Explore apps</a>
        <a href="#media">Watch experiments</a>
      </div>
    </div>
  </section>

  <AppShowcase />

  <section id="prototypes" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Playable prototypes</p>
      <h2>Small experiments,<br />ready to explore.</h2>
    </div>

    <div class="prototype-grid">
      {#each prototypes as item}
        <a class="prototype" href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>
          <img src={item.preview} alt={`${item.title} website preview`} loading="lazy" />
          <span>{item.title}</span>
          <span aria-hidden="true">↗</span>
        </a>
      {/each}
    </div>
  </section>

  <section id="media" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Watch</p>
      <h2>Sketches in motion.</h2>
    </div>

    <div class="playlist">
      <iframe
        src={playlistEmbed}
        title="Antony Nascè audiovisual experiments playlist"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <a class="text-link" href={playlistUrl} target="_blank" rel="noreferrer">Open the full playlist <span aria-hidden="true">↗</span></a>
  </section>

  <section id="practice" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Practice</p>
      <h2>A background in creative technology.</h2>
    </div>

    <div class="practice-grid">
      {#each practice as item}
        <a class="practice-entry" href={item.href} target="_blank" rel="noreferrer" aria-label={`Visit ${item.title}`}>
          <span class:logo-art={item.logo} class="practice-image">
            <img src={item.image} alt={item.alt} loading="lazy" />
          </span>
          <span class="practice-copy">
            <span class="practice-meta"><span>{item.role}</span><span aria-hidden="true">↗</span></span>
            <strong>{item.title}</strong>
            <span class="practice-description">{item.text}</span>
          </span>
        </a>
      {/each}
    </div>
  </section>

  <section class="section closing reveal">
    <p>Life is short.<br />Let’s play more.</p>
    <div class="capabilities" aria-label="Capabilities">
      {#each capabilities as capability}<span>{capability}</span>{/each}
    </div>
  </section>
</main>

<footer>
  <span>© 2026 Antony Nascè</span>
  <div class="footer-links">
    <SocialLinks />
    <a class="email-link" href="mailto:antonynasce@gmail.com">Email</a>
  </div>
</footer>

<style>
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; }
  :global(body) {
    margin: 0;
    overflow-x: hidden;
    background: #09090b;
    color: #fafafa;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    text-rendering: optimizeLegibility;
  }

  :global(body)::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    background:
      radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.05), transparent 22rem),
      radial-gradient(circle at 88% 18%, rgba(255, 255, 255, 0.03), transparent 24rem),
      linear-gradient(to right, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: auto, auto, 96px 96px, 96px 96px;
  }

  .site-header, main, footer { width: min(100% - 2rem, 1180px); margin-inline: auto; }
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.95rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(9, 9, 11, 0.62);
    backdrop-filter: blur(18px);
  }

  a { color: inherit; }
  .wordmark, .site-header nav a, .hero-actions a, .prototype, .text-link, footer a { text-decoration: none; }
  .wordmark { font-weight: 580; letter-spacing: -0.025em; white-space: nowrap; }
  .site-header nav { display: flex; gap: clamp(0.75rem, 2vw, 1.5rem); color: rgba(255, 255, 255, 0.62); font-size: 0.86rem; }
  .site-header nav a:hover, footer a:hover, .text-link:hover { color: #fff; }

  .hero {
    min-height: 77svh;
    display: grid;
    align-items: center;
    padding: clamp(5rem, 10vw, 9rem) 0;
  }

  .eyebrow {
    margin: 0;
    color: rgba(255, 255, 255, 0.56);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1, h2, p { margin-top: 0; }
  h1 {
    max-width: 1030px;
    margin: 1.6rem 0 2.6rem;
    font-size: clamp(3.8rem, 9vw, 8.6rem);
    line-height: 0.83;
    letter-spacing: -0.075em;
    font-weight: 590;
  }

  .introduction { display: flex; align-items: center; gap: 1.15rem; max-width: 720px; }
  .introduction img {
    width: clamp(4.5rem, 7vw, 6rem);
    height: clamp(4.5rem, 7vw, 6rem);
    aspect-ratio: 1;
    flex: 0 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.34);
  }
  .introduction p { margin: 0; color: rgba(255, 255, 255, 0.7); font-size: clamp(1.05rem, 1.8vw, 1.34rem); line-height: 1.48; }

  .hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
  .hero-actions a {
    padding: 0.52rem 0.82rem;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.055);
    font-size: 0.88rem;
    transition: transform 180ms ease, background 180ms ease;
  }
  .hero-actions a:hover { transform: translateY(-1px); background: rgba(255, 255, 255, 0.11); }

  .section { padding: clamp(4.5rem, 9vw, 8rem) 0; border-top: 1px solid rgba(255, 255, 255, 0.1); scroll-margin-top: 4.5rem; }
  .section-heading {
    display: grid;
    grid-template-columns: minmax(9rem, 0.34fr) 1fr;
    gap: clamp(1.5rem, 4vw, 4rem);
    align-items: start;
    margin-bottom: clamp(2.5rem, 6vw, 5rem);
  }
  h2 { max-width: 880px; margin-bottom: 0; font-size: clamp(2.4rem, 5vw, 5.4rem); line-height: 0.96; letter-spacing: -0.062em; font-weight: 580; }

  .prototype-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1rem, 2vw, 1.5rem); }
  .prototype { position: relative; overflow: hidden; border-radius: 1rem; background: #151518; }
  .prototype img { width: 100%; aspect-ratio: 1.65 / 1; display: block; object-fit: cover; opacity: 0.86; transition: transform 420ms ease, opacity 240ms ease; }
  .prototype > span {
    position: absolute;
    left: 1.1rem;
    bottom: 1rem;
    padding: 0.38rem 0.62rem;
    border-radius: 999px;
    background: rgba(9, 9, 11, 0.68);
    backdrop-filter: blur(12px);
    font-size: 0.86rem;
  }
  .prototype > span:last-child { right: 1.1rem; left: auto; }
  .prototype:hover img { transform: scale(1.025); opacity: 1; }
  .prototype:focus-visible, .hero-actions a:focus-visible, .site-header nav a:focus-visible, footer a:focus-visible, .text-link:focus-visible { outline: 2px solid #fff; outline-offset: 0.35rem; }

  .playlist { overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: clamp(1rem, 2vw, 1.5rem); background: #000; box-shadow: 0 2.5rem 6rem rgba(0, 0, 0, 0.36); }
  .playlist iframe { width: 100%; aspect-ratio: 16 / 9; display: block; border: 0; }
  .text-link { display: inline-block; margin-top: 1.2rem; color: rgba(255, 255, 255, 0.64); font-size: 0.88rem; }

  .practice-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(2rem, 5vw, 4rem) clamp(1rem, 2vw, 1.5rem); }
  .practice-entry { min-width: 0; display: grid; gap: 1.2rem; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.14); text-decoration: none; }
  .practice-image { overflow: hidden; border-radius: 0.9rem; background: #151518; }
  .practice-image img { width: 100%; aspect-ratio: 1.62 / 1; display: block; object-fit: cover; opacity: 0.84; filter: saturate(0.88); transition: transform 420ms ease, opacity 220ms ease, filter 220ms ease; }
  .practice-image.logo-art { display: grid; place-items: center; aspect-ratio: 1.62 / 1; padding: clamp(1.5rem, 4vw, 3.5rem); background: #050505; }
  .practice-image.logo-art img { aspect-ratio: auto; object-fit: contain; opacity: 1; filter: none; }
  .practice-copy { display: grid; gap: 0.65rem; }
  .practice-meta { display: flex; justify-content: space-between; gap: 1rem; color: rgba(255, 255, 255, 0.48); font-size: 0.72rem; letter-spacing: 0.035em; }
  .practice-meta > span:last-child { transition: transform 180ms ease; }
  .practice-copy strong { font-size: clamp(1.55rem, 2.6vw, 2.35rem); line-height: 1; letter-spacing: -0.048em; font-weight: 580; }
  .practice-description { max-width: 31rem; color: rgba(255, 255, 255, 0.62); font-size: 0.94rem; line-height: 1.5; }
  .practice-entry:hover .practice-image img { transform: scale(1.025); opacity: 1; filter: saturate(1); }
  .practice-entry:hover .practice-meta > span:last-child { transform: translate(0.15rem, -0.15rem); }
  .practice-entry:focus-visible { outline: 2px solid #fff; outline-offset: 0.45rem; border-radius: 0.3rem; }

  .closing { display: grid; grid-template-columns: 1fr minmax(260px, 0.55fr); gap: clamp(2rem, 5vw, 4rem); }
  .closing > p { margin: 0; font-size: clamp(2.5rem, 5vw, 5.2rem); line-height: 0.94; letter-spacing: -0.062em; font-weight: 580; }
  .capabilities { display: flex; flex-wrap: wrap; align-content: start; gap: 0.5rem; }
  .capabilities span { padding: 0.3rem 0.72rem; border-radius: 999px; background: rgba(255, 255, 255, 0.09); color: rgba(255, 255, 255, 0.7); font-size: 0.75rem; }

  footer { display: flex; justify-content: space-between; padding: 2rem 0 3rem; border-top: 1px solid rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.52); font-size: 0.82rem; }
  .footer-links { display: flex; align-items: center; gap: 1rem; }
  .email-link { transition: color 180ms ease; }
  .reveal { animation: reveal 700ms ease both; }
  @keyframes reveal { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

  @media (max-width: 760px) {
    .site-header { align-items: flex-start; flex-direction: column; }
    .site-header nav { width: 100%; overflow-x: auto; }
    .hero { min-height: 70svh; }
    .section, :global(#apps) { scroll-margin-top: 7rem; }
    .section-heading, .closing { grid-template-columns: 1fr; }
    .prototype-grid, .practice-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 470px) {
    .introduction { align-items: flex-start; }
    .introduction img { width: 4.25rem; height: 4.25rem; }
    .introduction p { font-size: 1rem; }
    footer { align-items: flex-start; flex-direction: column; gap: 1.25rem; }
    .footer-links { width: 100%; justify-content: space-between; }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) { scroll-behavior: auto; }
    :global(*), :global(*::before), :global(*::after) { animation: none !important; transition: none !important; }
  }
</style>
