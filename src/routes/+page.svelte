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

  const capabilities = [
    'Spatial interaction',
    'Audio systems',
    'WebMIDI + WebAudio',
    'SwiftUI + Apple platforms',
    'Unity + XR prototyping',
    'AI-assisted development workflows'
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
    <a href="#media">Media</a>
    <a href="#practice">Practice</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section class="hero reveal">
    <div class="hero-copy">
      <p class="eyebrow">Creative Technologist · Product Developer · Spatial Audio</p>
      <h1>I build creative tools for sound, space and interaction.</h1>
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
          <div class="media-card" aria-label={`${item.title} media placeholder`}>
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
      A focused overview of my work across audio, spatial interaction, WebMIDI and product development.
    </p>
  </section>
</main>

<footer id="contact">
  <p>Antony Nascè · Bristol / London · <a href="mailto:antonynasce@gmail.com">antonynasce@gmail.com</a></p>
</footer>

<style>
  /* styles unchanged */
</style>
