<script>
  const work = [
    {
      title: 'MIDIWeb',
      kicker: 'WebMIDI browser for Apple devices',
      desc: 'A dedicated browser for WebMIDI experiences across iOS, iPadOS, macOS and visionOS. Built around modern SwiftUI, virtual MIDI routing and a belief that browser-based music tools should be available to Apple users.',
      link: 'https://5of12.co.uk',
      year: '2024–present'
    },
    {
      title: 'Noodlr Board',
      kicker: 'Infinite canvas for music ideas',
      desc: 'A collaborative workspace for early-stage music creation: audio references, comments, tasks, WebAudio experiments and spatial arrangement before ideas move into a DAW.',
      link: 'https://5of12.github.io/noodlrboard/',
      year: '2024–present'
    },
    {
      title: 'Pezzi',
      kicker: 'Music in Pieces',
      desc: 'A musical puzzle game for WebXR and desktop, designed around playful interactions, short time-to-sound and accessible music-making mechanics.',
      link: 'https://5of12.co.uk',
      year: '2025–present'
    },
    {
      title: 'XR + audio prototypes',
      kicker: 'Spatial instruments and interaction systems',
      desc: 'Experiments in hand tracking, haptics, physical modelling and novel musical interfaces across Unity, Apple platforms and the web.',
      link: 'https://youtube.com/playlist?list=PLVqqKblFrXjaA8gYFgYS40rxdmFLhRnjD&si=d3-dkLNu7XzeSOia',
      year: 'ongoing'
    }
  ];
</script>

<svelte:head>
  <title>Antony Nascè — Creative Technologist</title>
  <meta name="description" content="Creative technologist and product developer building tools for sound, space and interaction." />
</svelte:head>

<header class="site-header">
  <a class="wordmark" href="/ant-portfolio/">Antony Nascè</a>
  <nav aria-label="Primary navigation">
    <a href="#work">Work</a>
    <a href="#practice">Practice</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section class="hero reveal">
    <p class="eyebrow">Creative Technologist · Product Developer · Spatial Audio</p>
    <h1>I build creative tools for sound, space and interaction.</h1>
    <p class="lede">
      I’m Antony Nascè, a composer, sound designer and product developer creating audiovisual systems,
      musical instruments, WebMIDI tools and spatial computing prototypes through 5of12.
    </p>
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
          <div class="work-body">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer">Open</a>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section id="practice" class="section reveal">
    <div class="section-heading">
      <p class="eyebrow">Practice</p>
      <h2>A studio practice shaped by audio, XR and product thinking.</h2>
    </div>

    <div class="practice-grid">
      <article>
        <h3>5of12</h3>
        <p>Co-founder and Product Director of a creative technology studio working across spatial interaction, haptics, audio technology and rapid software prototyping.</p>
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

  <section class="section approach reveal">
    <p>
      I work between engineering and creative practice: SwiftUI, Unity, WebAudio, WebMIDI, XR interaction,
      haptics and AI-assisted development workflows. The thread is simple: reduce the distance between an
      idea and a sound.
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
    background-image: linear-gradient(to right, rgba(17, 17, 15, 0.035) 1px, transparent 1px);
    background-size: 96px 96px;
  }

  .site-header,
  main,
  footer {
    width: min(100% - 2rem, 1160px);
    margin-inline: auto;
  }

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
    background: rgba(246, 245, 240, 0.82);
  }

  .wordmark,
  nav a,
  footer a,
  .work-body a {
    color: inherit;
    text-decoration: none;
  }

  .wordmark {
    font-weight: 560;
    letter-spacing: -0.02em;
  }

  nav {
    display: flex;
    gap: clamp(1rem, 2vw, 1.75rem);
    color: #65635d;
    font-size: 0.92rem;
  }

  nav a:hover,
  footer a:hover,
  .work-body a:hover {
    color: #c84624;
  }

  .hero {
    min-height: 84svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(4rem, 10vw, 8rem) 0;
  }

  .eyebrow {
    margin: 0 0 1rem;
    color: #65635d;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  p { margin-top: 0; }

  h1 {
    max-width: 1040px;
    margin-bottom: 2rem;
    font-size: clamp(3.1rem, 8vw, 7.8rem);
    line-height: 0.92;
    letter-spacing: -0.075em;
    font-weight: 520;
  }

  .lede {
    max-width: 760px;
    color: #5e5c56;
    font-size: clamp(1.1rem, 2vw, 1.45rem);
    line-height: 1.48;
  }

  .section {
    padding: clamp(4rem, 8vw, 7rem) 0;
    border-top: 1px solid #dedbd1;
  }

  .section-heading {
    display: grid;
    grid-template-columns: minmax(9rem, 0.38fr) 1fr;
    gap: clamp(1.5rem, 4vw, 4rem);
    margin-bottom: clamp(2rem, 5vw, 4rem);
  }

  h2 {
    max-width: 820px;
    font-size: clamp(2rem, 4.7vw, 4.8rem);
    line-height: 0.98;
    letter-spacing: -0.06em;
    font-weight: 520;
  }

  .work-list {
    border-bottom: 1px solid #dedbd1;
  }

  .work-item {
    display: grid;
    grid-template-columns: minmax(9rem, 0.38fr) 1fr;
    gap: clamp(1.5rem, 4vw, 4rem);
    padding: clamp(1.6rem, 4vw, 3rem) 0;
    border-top: 1px solid #dedbd1;
  }

  .work-meta {
    color: #65635d;
    font-size: 0.9rem;
  }

  .work-meta p,
  .work-meta span { margin: 0; }

  .work-meta span {
    display: block;
    margin-top: 0.55rem;
  }

  h3 {
    margin-bottom: 0.8rem;
    font-size: clamp(1.45rem, 2.4vw, 2.2rem);
    letter-spacing: -0.045em;
    font-weight: 520;
  }

  .work-body p {
    max-width: 720px;
    color: #3c3b37;
    line-height: 1.62;
    font-size: clamp(1rem, 1.3vw, 1.1rem);
  }

  .work-body a {
    display: inline-block;
    margin-top: 0.7rem;
    border-bottom: 1px solid currentColor;
  }

  .practice-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #dedbd1;
    border: 1px solid #dedbd1;
  }

  .practice-grid article {
    min-height: 18rem;
    padding: clamp(1.25rem, 3vw, 2rem);
    background: rgba(255,255,255,0.38);
  }

  .practice-grid p,
  .approach p {
    color: #4e4c46;
    line-height: 1.65;
  }

  .approach p {
    max-width: 920px;
    font-size: clamp(1.4rem, 3vw, 2.6rem);
    line-height: 1.18;
    letter-spacing: -0.045em;
  }

  footer {
    padding: 2rem 0 3rem;
    border-top: 1px solid #dedbd1;
    color: #65635d;
    font-size: 0.92rem;
  }

  .reveal {
    animation: reveal 700ms ease both;
  }

  @keyframes reveal {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 760px) {
    .site-header { align-items: flex-start; flex-direction: column; }
    .section-heading,
    .work-item,
    .practice-grid { grid-template-columns: 1fr; }
    .hero { min-height: 74svh; }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) { scroll-behavior: auto; }
    .reveal { animation: none; }
  }
</style>
