<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import NoodlrIcon from '$lib/NoodlrIcon.svelte';

  type Role = { title: string; dates: string; body: string[]; tags?: string[] };
  type Group = { id: string; org: string; mark: string; span: string; href?: string; logo?: string; icon?: 'noodlr'; round?: boolean; roles: Role[] };
  type Logo = { name: string; src?: string; href?: string };

  const logo = (file: string) => `${base}/logos/${file}`;

  const partners: Logo[] = [
    { name: 'SRT Marine', src: logo('srt.svg') },
    { name: 'Ultraleap + ROLI', src: logo('ultraleap.svg') },
    { name: 'HTC VIVERSE', src: logo('viverse.png') },
    { name: 'Uno Minda', src: logo('uno-minda.png') },
    { name: '50Hertz', src: logo('50hertz.png') },
    { name: 'Distance', src: logo('distance.svg') },
    { name: 'Watershed', src: logo('watershed.webp') },
    { name: 'Pervasive Media Studio', src: logo('pervasive-media-studio.svg') }
  ];

  const groups: Group[] = [
    {
      id: 'noodlr',
      org: 'Noodlr Studio',
      icon: 'noodlr',
      mark: 'N',
      span: '2026 – present',
      href: 'https://noodlr.studio',
      roles: [
        {
          title: 'Founder',
          dates: '2026 – present',
          body: [
            'Founded <a href="https://noodlr.studio">Noodlr Studio Ltd</a> in Bristol: <strong>a musical space to Play &amp; Plan</strong>. A creative board for musicians where <strong>Play</strong> is an infinite canvas of audio + MIDI nodes for capturing ideas before the DAW, and <strong>Plan</strong> covers setlists, calendars and crew for releases and gigs. Live on the web (<a href="https://noodlr.xyz">noodlr.xyz</a>) and on iOS + Mac via TestFlight.'
          ],
          tags: ['Swift', 'Web Audio', 'CoreMIDI', 'Product + design']
        }
      ]
    },
    {
      id: '5of12',
      round: true,
      logo: logo('5of12_Glow.png'),
      org: '5of12',
      mark: '5/12',
      span: '2024 – present',
      href: 'https://5of12.co.uk',
      roles: [
        {
          title: 'Co-founder, Product Director',
          dates: '2024 – present',
          body: [
            'Founded a <a href="https://5of12.co.uk">creative technology studio</a> for audio, spatial interaction + app/plugin development: <strong>software consultancy and rapid prototyping</strong> with R&amp;D teams in automotive, energy and entertainment, using Unity, Swift and Web technologies to build hand-tracking demonstrators for screen-based and <a href="https://youtu.be/gIsR3yy8NuY?si=DFdNjy_eewZcwsrN">XR experiences</a>. Winner of the <a href="https://midi.org/innovation-awards">MIDI Innovation Award</a> for Best Software Prototype for <a href="https://playtonik.cc">Playtonik</a>.'
          ]
        },
        {
          title: 'Software consulting',
          dates: '2026',
          body: [
            'Consulting for <strong>SRT Marine</strong>: getting up to speed with a large, unfamiliar code-base quickly using <strong>agentic coding</strong>, with every change reviewed and tested by hand.'
          ]
        },
        {
          title: 'Apple platform apps',
          dates: 'In development',
          body: [
            'A growing family of <strong>native apps for iPhone, iPad, Mac and Apple Watch</strong> in Swift and SwiftUI, from MIDI tools to musical toys, live on the App Store or in TestFlight. <a href="' + base + '/#apps" data-sveltekit-reload>See the apps</a>.'
          ]
        },
        {
          title: 'Pezzi, musical puzzle game',
          dates: 'Co-published',
          body: [
            'Co-published <a href="https://playpezzi.com">Pezzi</a>, built with <strong>Threlte</strong> (Three.js + Svelte) and released on <strong>VIVERSE</strong>.'
          ]
        },
        {
          title: 'Meta Start, WebXR Developer',
          dates: '2026',
          body: ['Building immersive, hand-tracked <strong>WebXR</strong> experiences that run straight from the browser.']
        }
      ]
    },
    {
      id: 'freelance',
      round: true,
      logo: logo('pervasive-media-studio.svg'),
      org: 'Freelance',
      mark: 'FL',
      span: '2009 – present',
      href: 'https://www.watershed.co.uk/studio/residents/ant-nasc%C3%A8',
      roles: [
        {
          title: 'Freelance Creative Technologist',
          dates: '2009 – present',
          body: [
            '<a href="https://www.watershed.co.uk/studio/residents/ant-nasc%C3%A8">Pervasive Media Studio Resident</a>. Audio + video editor for <a href="https://podcasts.apple.com/gb/podcast/fresh-from-the-pod-gardening-stories/id1462884931">podcasts</a>, <a href="https://soundcloud.com/user-483376581/the-call-of-the-severn-english">audiobooks</a> and <a href="https://youtu.be/fRFU54nEb5k">promo video</a>. Published apps to the App Store, and iOS/Android dev specialising in <a href="https://www.youtube.com/watch?v=eU6E0WK9mow">audio and novel interaction</a>.'
          ]
        }
      ]
    },
    {
      id: 'ultraleap',
      logo: logo('ultraleap.svg'),
      org: 'Ultraleap',
      mark: 'UL',
      span: '2017 – 2024',
      href: 'https://www.ultraleap.com',
      roles: [
        {
          title: 'Senior Haptics + Spatial Interaction Engineer',
          dates: '2022 – 2024',
          body: [
            'Unity / C# R&amp;D and <a href="https://youtu.be/S6A4XYEbgOk?si=FsnnTqn5zT14guuZ">design tooling for haptics</a>, audio and spatial interaction, including a timeline tool for syncing haptic, audio and interaction design. Produced <a href="https://youtu.be/olxGCbdV5JY">Mobile AR demos for iOS</a> and trade-show prototypes.'
          ]
        },
        {
          title: 'Product Manager',
          dates: '2019 – 2020',
          body: [
            'Defined and launched an app bringing <a href="https://youtu.be/EY6FKCfoaQk?si=z-KyBCWIk1ncgi3O">touchless interaction</a> to digital out-of-home screens as a COVID-19 response. <strong>Owned the roadmap</strong> for software tools company-wide, working across Dev, UX, Marketing and BizDev.'
          ]
        },
        {
          title: 'Software Developer, Product Architect',
          dates: '2017 – 2019',
          body: [
            'Began with <strong>automated GUI and performance testing</strong> of haptics software, then moved between dev, R&amp;D and product: <strong>prototyping user interfaces</strong>, user testing, requirements gathering and demos, tutorials and tools for mid-air haptic hardware in <strong>Unity, Python &amp; HTML5 + JavaScript</strong>.'
          ]
        }
      ]
    },
    {
      id: 'disguise',
      logo: logo('disguise.svg'),
      org: 'disguise',
      mark: 'dsg',
      span: '2021',
      href: 'https://www.disguise.one',
      roles: [
        {
          title: 'Product Manager',
          dates: '2021 Q1 – Q4',
          body: [
            'Product Manager for Film and Virtual Production, taking xR designer software and hardware into Live Events, Fixed Installation, Virtual Production and Broadcast. Led disguise to <strong>approved ACES Product Partner</strong> status for colour grading tooling.'
          ]
        }
      ]
    },
    {
      id: 'foundry',
      logo: logo('foundry.svg'),
      org: 'Foundry',
      mark: 'F',
      span: '2008 – 2017',
      href: 'https://www.foundry.com',
      roles: [
        {
          title: 'Proof of Concept Engineer',
          dates: '2015 – 2017',
          body: ['Creative team: designed technical solutions for clients’ animation pipelines in <strong>Nuke, Katana, Modo, Mari and Flix</strong>, feeding back into the product roadmap.']
        },
        {
          title: 'Lead Automation Engineer',
          dates: '2012 – 2014',
          body: ['Led QA engineers on automated testing: regression and performance suites, image-quality and playback measurement, and UI automation for 3D, compositing and timeline tools.']
        },
        {
          title: 'Product Manager',
          dates: '2011 – 2012',
          body: ['Launched two visual effects timeline + pipeline apps, from customer requirements to roadmaps.']
        },
        {
          title: 'QA Engineer → QA Manager → R&D Engineer (iOS)',
          dates: '2008 – 2011',
          body: ['Junior engineer to QA Manager; ran public betas, learnt Python, and built an <a href="https://youtu.be/WE6kFWwOvP8?si=K1g07JCTNkp7cRJ9">iOS multi-touch companion app</a> for our host software.']
        }
      ]
    }
  ];

  const education = [
    {
      title: 'PhD, University of Southampton',
      dates: '2002 – 2009',
      lines: [
        'Engineering Sciences. <a href="https://www.youtube.com/watch?v=2_YHANcMuXM">Non-contact Audio Signal Reproduction for Archival Purposes</a>',
        'BEng (2:1) Acoustical Engineering'
      ]
    },
    {
      title: 'The Willink School',
      dates: '2000 – 2002',
      lines: ['A-Levels: Maths, Physics, Music, German (AS)']
    }
  ];

  type Tile = { name: string; note: string; src?: string; mono?: string };
  const tech = (file: string) => `${base}/logos/tech/${file}`;
  const tiles: Tile[] = [
    { name: 'Swift', note: 'SwiftUI, RealityKit, ARKit', src: tech('swift.svg') },
    { name: 'Apple', note: 'iOS, iPadOS, macOS, visionOS', src: logo('apple.svg') },
    { name: 'Unity', note: 'C#, XR, creative tooling', src: logo('unity.svg') },
    { name: 'Meta Quest', note: 'Quest 3 / 3S, WebXR', src: logo('meta.svg') },
    { name: 'Svelte', note: 'Web apps, Threlte', src: logo('svelte.svg') },
    { name: 'Three.js', note: '3D for the browser', src: tech('threedotjs.svg') },
    { name: 'JavaScript', note: 'WebAudio, Web MIDI', src: tech('javascript.svg') },
    { name: 'Python', note: 'PyQt, tooling, automation', src: tech('python.svg') },
    { name: 'Claude Code', note: 'Agentic coding', src: tech('claude.svg') },
    { name: 'Figma', note: 'UI + product design', src: tech('figma.svg') },
    { name: 'Nuke', note: 'VFX + compositing pipelines', src: tech('nuke.png') },
    { name: 'Logic Pro', note: 'Music + sound design', src: tech('logic.png') }
  ];

  const alsoKnow = [
    { name: 'Audio + MIDI', items: ['CoreMIDI', 'Web MIDI', 'WebAudio', 'VST plugins'] },
    { name: 'Vision', items: ['MediaPipe', 'hand tracking'] },
    { name: 'Also', items: ['Final Cut Pro', 'Objective-C', 'PyQt', 'HTML5 + CSS', 'Bash', 'Batch', 'Automator'] }
  ];
  let theme: 'light' | 'dark' = 'dark';
  const applyTheme = (t: 'light' | 'dark') => {
    theme = t;
    document.documentElement.dataset.cvTheme = t;
    try { localStorage.setItem('cv-theme', t); } catch {}
  };
  const toggleTheme = () => applyTheme(theme === 'dark' ? 'light' : 'dark');

  let spine: HTMLElement;
  let enhanced = false;
  let progress = 0;

  onMount(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem('cv-theme'); } catch {}
    applyTheme(saved === 'light' || saved === 'dark' ? saved : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    enhanced = true;
    if (reduced) {
      progress = 1;
      document.querySelectorAll('.cv [data-seen]').forEach((el) => el.classList.add('seen'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('seen')),
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    );
    document.querySelectorAll('.cv [data-seen]').forEach((el) => io.observe(el));

    let frame = 0;
    const update = () => {
      frame = 0;
      if (!spine) return;
      const rect = spine.getBoundingClientRect();
      const reach = window.innerHeight * 0.55 - rect.top;
      progress = Math.min(1, Math.max(0, reach / rect.height));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  });
</script>

<svelte:head>
  <title>Antony Nascè, PhD — CV</title>
  <meta name="description" content="CV of Antony Nascè, PhD: creative technologist and product developer across audio, spatial computing, VFX and Apple platforms." />
  <link rel="icon" type="image/webp" href="{base}/antony-nasce.webp" />
</svelte:head>

<header class="topbar">
  <a class="wordmark" href="{base}/" data-sveltekit-reload>← Ant Nascè</a>
  <nav aria-label="CV sections">
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
  </nav>
  <div class="actions">
    <button type="button" class="print-btn" onclick={toggleTheme} aria-label="Switch to {theme === 'dark' ? 'light' : 'dark'} mode">{theme === 'dark' ? 'Light' : 'Dark'}</button>
    <button type="button" class="print-btn" onclick={() => window.print()} title="Always prints in light mode">Save as PDF</button>
  </div>
</header>

<div class="cv" class:enhanced style="--progress: {progress}">
  <div class="spine-wrap" bind:this={spine}>
    <div class="spine" aria-hidden="true"><i></i></div>

    <section class="hero row">
      <div class="rail">
        <img class="portrait" src="{base}/antony-nasce.webp" alt="Antony Nascè" width="640" height="640" />
      </div>
      <div class="body">
        <h1>Antony Nascè, PhD</h1>
        <p class="role-line">Creative Technologist + Product Developer</p>
        <ul class="contact">
          <li class="print-only">+44 (0) 7793 823444</li>
          <li><a href="mailto:antonynasce@gmail.com">antonynasce@gmail.com</a></li>
          <li><a href="https://linkedin.com/in/nasce">linkedin.com/in/nasce</a></li>
          <li><a href="https://github.com/antiero">github.com/antiero</a></li>
          <li><a href="https://noodlr.studio">noodlr.studio</a></li>
          <li><a href="https://antcv.space">antcv.space</a></li>
        </ul>
      </div>
    </section>

    <section id="about" class="row block">
      <div class="rail"><span class="dot" data-seen></span></div>
      <div class="body" data-seen>
        <h2>About</h2>
        <p>
          Creative Technologist + Product Developer who thrives on problem solving and rapid prototyping.
          15+ years industry experience with <strong>creative software / hardware in VFX, and Spatial computing</strong>,
          in roles spanning the full dev spectrum, from QA to Product Management. I’m in my element when
          <strong>creating unique customer experiences</strong> that delight, working in cross-functional teams, at the
          <strong>interface between R&amp;D, design + product development</strong>.
        </p>
        <p>
          Lately I’ve been building native <strong>apps for Apple devices</strong>, co-publishing a musical puzzle game
          (<a href="https://playpezzi.com">Pezzi</a>, built in Threlte, on VIVERSE) and exploring
          <strong>WebXR as a Meta Start developer</strong>. In 2026 I founded <a href="https://noodlr.studio">Noodlr Studio</a>, a musical space to play and plan. I’ve embraced <strong>agentic coding</strong> as a way to get up to
          speed with large code-bases fast. I’m seeking a role that blends my <strong>love of music production</strong> and
          creative + engineering mindset, in an environment that encourages exploration + play.
        </p>
      </div>
    </section>

    <section id="experience" class="block">
      <div class="row">
        <div class="rail"><span class="dot" data-seen></span></div>
        <div class="body" data-seen><h2>Experience</h2></div>
      </div>

      {#each groups as g (g.id)}
        <article class="row group">
          <div class="rail">
            <span class="node" class:has-logo={g.logo} class:bare={g.icon} class:round={g.round} data-seen title={g.org}>
              {#if g.icon === 'noodlr'}<NoodlrIcon />{:else if g.logo}<img src={g.logo} alt={g.org} loading="lazy" />{:else}<span aria-hidden="true">{g.mark}</span>{/if}
            </span>
          </div>
          <div class="body" data-seen>
            <header class="group-head">
              <h3>{#if g.href}<a href={g.href}>{g.org}</a>{:else}{g.org}{/if}</h3>
              <span class="span">{g.span}</span>
            </header>
            {#each g.roles as r}
              <div class="role">
                <h4><span>{r.title}</span>{#if r.dates !== g.span}<time>{r.dates}</time>{/if}</h4>
                {#each r.body as p}<p>{@html p}</p>{/each}
                {#if r.tags}
                  <ul class="tags">{#each r.tags as t}<li>{t}</li>{/each}</ul>
                {/if}
                {#if g.id === '5of12' && r === g.roles[0]}
                  <p class="logo-label">Companies we work with</p>
                  <ul class="logos">{#each partners as l}<li title={l.name}><img src={l.src} alt={l.name} loading="lazy" /></li>{/each}</ul>
                {/if}
              </div>
            {/each}
          </div>
        </article>
      {/each}
    </section>

    <section id="education" class="row block">
      <div class="rail"><span class="dot" data-seen></span></div>
      <div class="body" data-seen>
        <h2>Education</h2>
        {#each education as e}
          <div class="role">
            <h4><span>{e.title}</span><time>{e.dates}</time></h4>
            {#each e.lines as l}<p>{@html l}</p>{/each}
          </div>
        {/each}
      </div>
    </section>

    <section id="skills" class="row block">
      <div class="rail"><span class="dot" data-seen></span></div>
      <div class="body" data-seen>
        <h2>Skills + Domain Knowledge</h2>
        <ul class="tiles">
          {#each tiles as t}
            <li>
              <span class="ic">{#if t.src}<img src={t.src} alt="" loading="lazy" />{:else}<b>{t.mono}</b>{/if}</span>
              <span class="t-name">{t.name}</span>
              <span class="t-note">{t.note}</span>
            </li>
          {/each}
        </ul>
        <dl class="also">
          {#each alsoKnow as g}
            <div><dt>{g.name}</dt><dd>{g.items.join(' · ')}</dd></div>
          {/each}
        </dl>
      </div>
    </section>

    <section class="row block last">
      <div class="rail"><span class="dot end" data-seen></span></div>
      <div class="body" data-seen>
        <h2>Hobbies / Personal Interests</h2>
        <p>
          Music composition, sound design, padel, cooking, climbing. I perform music and have an interest in classical and
          film composition. Founded electronic music open mic night in Bristol
          (<a href="https://youtu.be/f2_ydBIqL38?si=6YUtD5GeWBA2Iz1n">We All Play Synth</a>).
        </p>
      </div>
    </section>
  </div>

  <footer>
    <span>© 2026 Antony Nascè</span>
    <a href="{base}/" data-sveltekit-reload>antcv.space</a>
  </footer>
</div>

<style>
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; }
  :global(body) {
    margin: 0;
    background: var(--page-bg, #09090b);
    color: var(--page-fg, #fafafa);
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    text-rendering: optimizeLegibility;
  }

  :global(html) { color-scheme: dark; --page-bg: #09090b; --page-fg: #fafafa; }

  .topbar, .cv {
    --fg: #fafafa;
    --muted: rgba(255, 255, 255, 0.66);
    --faint: rgba(255, 255, 255, 0.46);
    --line: rgba(255, 255, 255, 0.16);
    --surface: rgba(255, 255, 255, 0.06);
    --surface-hover: rgba(255, 255, 255, 0.12);
    --bg: #09090b;
    --bar: rgba(9, 9, 11, 0.7);
    --accent: #38c8f5;
    --shadow: rgba(0, 0, 0, 0.4);
    --rail: 6.5rem;
  }

  /* light theme: follows the system unless the visitor has chosen */
  @media (prefers-color-scheme: light) {
    :global(html:not([data-cv-theme='dark'])) { color-scheme: light; --page-bg: #fbfaf7; --page-fg: #14161a; }
    :global(html:not([data-cv-theme='dark'])) .topbar, :global(html:not([data-cv-theme='dark'])) .cv { --fg: #14161a; --muted: rgba(20, 22, 26, 0.74); --faint: rgba(20, 22, 26, 0.54); --line: rgba(20, 22, 26, 0.14); --surface: rgba(20, 22, 26, 0.04); --surface-hover: rgba(20, 22, 26, 0.09); --bg: #fbfaf7; --bar: rgba(251, 250, 247, 0.78); --accent: #0a84b8; --shadow: rgba(20, 22, 26, 0.18); }
  }
  :global(html[data-cv-theme='light']) { color-scheme: light; --page-bg: #fbfaf7; --page-fg: #14161a; }
  :global(html[data-cv-theme='light']) .topbar, :global(html[data-cv-theme='light']) .cv { --fg: #14161a; --muted: rgba(20, 22, 26, 0.74); --faint: rgba(20, 22, 26, 0.54); --line: rgba(20, 22, 26, 0.14); --surface: rgba(20, 22, 26, 0.04); --surface-hover: rgba(20, 22, 26, 0.09); --bg: #fbfaf7; --bar: rgba(251, 250, 247, 0.78); --accent: #0a84b8; --shadow: rgba(20, 22, 26, 0.18); }

  /* ---- top bar (screen only) ---- */
  .topbar {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.8rem max(1rem, calc((100% - 960px) / 2));
    border-bottom: 1px solid var(--line);
    background: var(--bar);
    backdrop-filter: blur(18px);
    color: var(--fg);
    font-size: 0.86rem;
  }
  .topbar a { text-decoration: none; color: var(--muted); }
  .topbar a:hover { color: var(--fg); }
  .actions { display: flex; gap: 0.5rem; }
  .topbar .wordmark { color: var(--fg); font-weight: 580; letter-spacing: -0.02em; white-space: nowrap; }
  .topbar nav { display: flex; gap: clamp(0.75rem, 2vw, 1.5rem); }
  .print-btn {
    padding: 0.45rem 0.85rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    color: var(--fg);
    font: inherit;
    cursor: pointer;
    white-space: nowrap;
  }
  .print-btn:hover { background: var(--surface-hover); }

  /* ---- layout ---- */
  .cv { width: min(100% - 2rem, 960px); margin-inline: auto; color: var(--fg); line-height: 1.55; }
  .spine-wrap { position: relative; padding-top: clamp(2.5rem, 6vw, 4.5rem); }
  .row { display: grid; grid-template-columns: var(--rail) minmax(0, 1fr); column-gap: clamp(0.75rem, 2.5vw, 2rem); position: relative; }
  .rail { position: relative; display: flex; justify-content: center; }
  .body { min-width: 0; }
  .block { padding-top: clamp(2.5rem, 6vw, 4.5rem); }

  /* the spine */
  .spine { position: absolute; top: 0; bottom: 0; left: calc(var(--rail) / 2 - 1px); width: 2px; background: var(--line); border-radius: 2px; }
  .spine i { position: absolute; inset: 0 0 auto 0; height: calc(var(--progress, 1) * 100%); background: linear-gradient(to bottom, var(--accent), #8b7bff); border-radius: 2px; box-shadow: 0 0 14px rgba(56, 200, 245, 0.5); }

  /* hero */
  .hero { align-items: start; }
  .portrait { width: calc(var(--rail) - 0.5rem); height: calc(var(--rail) - 0.5rem); aspect-ratio: 1; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent); background: var(--bg); box-shadow: 0 0 0 6px var(--bg), 0 1rem 2.5rem var(--shadow); position: relative; }
  h1 { margin: 0.2rem 0 0.2rem; font-size: clamp(2.4rem, 6.5vw, 4.6rem); line-height: 0.95; letter-spacing: -0.06em; font-weight: 590; }
  .role-line { margin: 0 0 1rem; color: var(--muted); font-size: clamp(1.05rem, 2vw, 1.35rem); letter-spacing: -0.015em; }
  .contact { display: flex; flex-wrap: wrap; gap: 0.4rem 1.4rem; margin: 0; padding: 0; list-style: none; font-size: 0.9rem; }
  .contact a { color: var(--accent); text-decoration: none; }
  .contact a:hover { text-decoration: underline; }
  .print-only { display: none; }

  /* section titles */
  h2 { margin: 0 0 1rem; color: var(--muted); font-size: clamp(1.5rem, 3vw, 2.1rem); line-height: 1.05; letter-spacing: -0.045em; font-weight: 520; }
  .dot { width: 0.95rem; height: 0.95rem; margin-top: 0.55rem; border-radius: 50%; background: var(--bg); border: 2px solid var(--accent); box-shadow: 0 0 0 5px var(--bg); position: relative; z-index: 1; }
  .dot.end { background: var(--accent); }

  p { margin: 0 0 0.85rem; color: var(--muted); font-size: 0.97rem; }
  p :global(strong) { color: var(--fg); font-weight: 600; }
  .cv :global(a) { color: var(--accent); text-decoration: none; }
  .cv :global(a:hover) { text-decoration: underline; text-underline-offset: 0.18em; }

  /* experience groups */
  .group { padding-top: clamp(1.8rem, 4vw, 3rem); }
  .node {
    position: relative; z-index: 1;
    width: 3.6rem; height: 3.6rem;
    display: grid; place-items: center;
    border-radius: 50%;
    border: 2px solid var(--line);
    background: var(--bg);
    box-shadow: 0 0 0 6px var(--bg);
    color: var(--muted);
    font-size: 0.78rem; font-weight: 650; letter-spacing: -0.02em;
    transition: border-color 400ms ease, color 400ms ease, box-shadow 400ms ease;
  }
  .node:global(.seen), .dot:global(.seen) { border-color: var(--accent); color: var(--fg); }
  .node:global(.seen) { box-shadow: 0 0 0 6px var(--bg), 0 0 1.6rem color-mix(in srgb, var(--accent) 30%, transparent); }

  /* logos sit on light tiles so dark marks read on the dark theme */
  .node.has-logo { width: calc(var(--rail) - 0.6rem); height: 3.2rem; border-radius: 0.9rem; background: #fff; border: 0; padding: 0.4rem 0.55rem; }
  .node.has-logo:global(.seen) { box-shadow: 0 0 0 6px var(--bg); }
  .node.round { width: 3.6rem; height: 3.6rem; border-radius: 50%; padding: 0; }
  .node.bare { background: var(--bg); border-color: var(--line); color: var(--fg); padding: 0.55rem; width: 3.6rem; height: 3.6rem; border-radius: 50%; }
  .node img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .logo-label { margin: 1.1rem 0 0.55rem; color: var(--faint); font-size: 0.72rem; letter-spacing: 0.07em; text-transform: uppercase; font-weight: 650; }
  .logos { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0 0 0.4rem; padding: 0; list-style: none; }
  .logos li { display: grid; place-items: center; width: 6.6rem; height: 3rem; padding: 0.5rem 0.7rem; border-radius: 0.7rem; background: #fff; }
  .logos li { position: relative; overflow: hidden; }
  .logos li > img { position: absolute; inset: 0.5rem 0.7rem; width: calc(100% - 1.4rem); height: calc(100% - 1rem); object-fit: contain; }
  .group-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 0.25rem 1rem; margin-bottom: 0.9rem; padding-bottom: 0.6rem; border-bottom: 1px solid var(--line); }
  h3 { margin: 0; font-size: clamp(1.4rem, 2.6vw, 1.9rem); letter-spacing: -0.045em; font-weight: 580; }
  h3 a { color: inherit !important; }
  h3 a:hover { color: var(--accent) !important; text-decoration: none !important; }
  .span { color: var(--faint); font-size: 0.8rem; letter-spacing: 0.05em; text-transform: uppercase; }

  .role { margin-bottom: 1.6rem; break-inside: avoid; }
  h4 { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.1rem 1rem; margin: 0 0 0.45rem; font-size: 0.74rem; letter-spacing: 0.07em; text-transform: uppercase; color: var(--faint); font-weight: 650; }
  h4 time { font-weight: 500; letter-spacing: 0.04em; }

  .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin: 0.6rem 0 0; padding: 0; list-style: none; }
  .tags li { padding: 0.22rem 0.62rem; border-radius: 999px; background: color-mix(in srgb, var(--accent) 12%, transparent); border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent); color: var(--fg); font-size: 0.74rem; }


  /* skills: icon tiles + a short "also" list */
  .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(10.5rem, 1fr)); gap: 0.7rem; margin: 0 0 1.4rem; padding: 0; list-style: none; }
  .tiles li { display: grid; grid-template-columns: 2.6rem minmax(0, 1fr); grid-template-areas: 'ic name' 'ic note'; column-gap: 0.75rem; align-items: center; padding: 0.65rem 0.8rem 0.65rem 0.65rem; border: 1px solid var(--line); border-radius: 0.9rem; background: var(--surface); break-inside: avoid; }
  .ic { grid-area: ic; width: 2.6rem; height: 2.6rem; display: grid; place-items: center; border-radius: 0.65rem; background: #fff; overflow: hidden; }
  .ic img { width: 100%; height: 100%; padding: 0.5rem; object-fit: contain; display: block; }
  .ic:has(img[src$='.png']) img { padding: 0; }
  .ic b { color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: -0.02em; }
  .t-name { grid-area: name; font-size: 0.9rem; font-weight: 600; letter-spacing: -0.01em; line-height: 1.2; }
  .t-note { grid-area: note; color: var(--faint); font-size: 0.72rem; line-height: 1.25; }
  .also { display: grid; gap: 0.5rem; margin: 0; }
  .also > div { display: grid; grid-template-columns: 8.5rem minmax(0, 1fr); gap: 0.2rem 1rem; }
  .also dt { color: var(--faint); font-size: 0.72rem; letter-spacing: 0.07em; text-transform: uppercase; font-weight: 650; padding-top: 0.15rem; }
  .also dd { margin: 0; color: var(--muted); font-size: 0.9rem; }

  .last { padding-bottom: clamp(3rem, 6vw, 5rem); }
  footer { display: flex; justify-content: space-between; padding: 1.6rem 0 3rem; border-top: 1px solid var(--line); color: var(--faint); font-size: 0.82rem; }
  footer a { color: var(--faint) !important; }

  /* scroll reveal, only once JS has enhanced the page */
  .enhanced .body[data-seen] { opacity: 0; transform: translateY(14px); transition: opacity 600ms ease, transform 600ms ease; }
  .enhanced .body[data-seen]:global(.seen) { opacity: 1; transform: none; }

  /* ---- small screens ---- */
  @media (max-width: 640px) {
    .cv { --rail: 3.4rem; }
    .row { column-gap: 0.8rem; }
    .node { width: 2.6rem; height: 2.6rem; font-size: 0.64rem; }
    .node.bare { width: 2.6rem; height: 2.6rem; padding: 0.4rem; }
    .node.has-logo { width: calc(var(--rail) - 0.2rem); height: 2.4rem; padding: 0.3rem; border-radius: 0.6rem; }
    .node.round { width: 2.6rem; height: 2.6rem; border-radius: 50%; padding: 0; }
    .logos li { width: 5.4rem; height: 2.6rem; }
    .topbar nav { display: none; }
    .portrait { border-width: 1.5px; }
    .also > div { grid-template-columns: 1fr; }
    .tiles { grid-template-columns: 1fr 1fr; }
    .t-note { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) { scroll-behavior: auto; }
    .enhanced .body[data-seen] { opacity: 1; transform: none; transition: none; }
    .node { transition: none; }
  }

  /* ---- print: light, A4, compact ---- */
  @page { size: A4; margin: 11mm 12mm; }
  @media print {
    :global(html), :global(body) { background: #fff !important; color-scheme: light; }
    :global(body)::before { display: none !important; }
    :global(*) { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .topbar, footer { display: none !important; }

    .cv.cv.cv {
      --fg: #111; --muted: #333; --faint: #777; --line: #cfd4d8; --surface: #f4f6f7; --bg: #fff; --accent: #0090c8; --rail: 22mm; --shadow: transparent; --bg: #fff;
      width: 100%;
      font-size: 9.2pt;
      line-height: 1.42;
    }
    .spine-wrap { padding-top: 0; }
    .block { padding-top: 5mm; }
    .group { padding-top: 4mm; }
    .spine i { height: 100%; box-shadow: none; background: var(--accent); opacity: 0.55; }
    .enhanced .body[data-seen] { opacity: 1 !important; transform: none !important; }
    .node:not(.has-logo), .node:global(.seen):not(.has-logo) { box-shadow: 0 0 0 3px #fff; border-color: var(--accent); color: var(--fg); width: 11mm; height: 11mm; font-size: 6.5pt; }
    .dot { box-shadow: 0 0 0 3px #fff; }
    .node.bare { padding: 1.6mm; }
    .node.has-logo { width: 19mm; height: 10mm; border-radius: 2.5mm; padding: 1.4mm 2mm; border: 0; box-shadow: 0 0 0 3px #fff; }
    .node.round { width: 11mm; height: 11mm; border-radius: 50%; padding: 0; border: 0; }
    .logo-label { margin: 3mm 0 1.5mm; font-size: 6.5pt; }
    .logos { gap: 1.5mm; }
    .logos li { width: 24mm; height: 10mm; padding: 1.5mm 2mm; border: 0.3mm solid var(--line); border-radius: 2mm; background: #fff; }
    .logos li > img { inset: 1.5mm 2mm; width: calc(100% - 4mm); height: calc(100% - 3mm); }
        .portrait { box-shadow: 0 0 0 3px #fff; }

    h1 { font-size: 24pt; }
    .role-line { font-size: 11pt; margin-bottom: 2mm; }
    h2 { font-size: 13pt; margin-bottom: 2mm; }
    h3 { font-size: 12pt; }
    h4 { font-size: 7pt; }
    p { font-size: 9.2pt; margin-bottom: 1.6mm; }
    .contact { font-size: 8.6pt; margin-bottom: 3mm; gap: 1mm 5mm; }
    .print-only { display: list-item; }
            .group-head { margin-bottom: 2mm; padding-bottom: 1.2mm; }
    .role { margin-bottom: 3mm; }
    .tags { margin-top: 1.4mm; gap: 1mm; }
    .tags li { font-size: 7pt; padding: 0.4mm 2mm; background: #e8f6fc; border-color: #bfe3f2; }
    .tiles { grid-template-columns: repeat(4, 1fr); gap: 1.6mm; margin-bottom: 3mm; }
    .tiles li { grid-template-columns: 7mm minmax(0, 1fr); column-gap: 2mm; padding: 1.4mm 2mm 1.4mm 1.4mm; border-radius: 2mm; }
    .ic { width: 7mm; height: 7mm; border-radius: 1.6mm; border: 0.3mm solid var(--line); }
    .ic img { padding: 1.2mm; }
    .t-name { font-size: 7.6pt; }
    .t-note { font-size: 6pt; }
    .also { gap: 1mm; }
    .also > div { grid-template-columns: 26mm minmax(0, 1fr); }
    .also dd { font-size: 8.4pt; }
    .also dt { font-size: 6.5pt; }
    .group, .block { break-inside: auto; }
    h2, h3, h4 { break-after: avoid; }
    .group-head { break-after: avoid; }
    .cv :global(a) { color: var(--accent); }

    /* two-page budget */
    .cv.cv.cv { font-size: 8.9pt; line-height: 1.38; --rail: 19mm; }
    p { font-size: 8.9pt; margin-bottom: 1.3mm; }
    h1 { font-size: 21pt; }
    .role-line { font-size: 10pt; margin-bottom: 1mm; }
    .contact { margin-bottom: 0; font-size: 8pt; }
    .portrait { width: 17mm; height: 17mm; }
    h2 { font-size: 11.5pt; margin-bottom: 1.2mm; }
    h3 { font-size: 10.5pt; }
    h4 { font-size: 6.4pt; margin-bottom: 0.6mm; }
    .block { padding-top: 4.2mm; }
    .group { padding-top: 3.4mm; }
    .group-head { margin-bottom: 1.2mm; padding-bottom: 0.8mm; }
    .role { margin-bottom: 2.4mm; }
    .tags { display: none; }
    .span { font-size: 6.8pt; }
    .node:not(.has-logo) { width: 9mm; height: 9mm; }
    .node.has-logo { width: 16mm; height: 8.5mm; }
    .node.round { width: 9.5mm; height: 9.5mm; }
    .logo-label { margin: 1.6mm 0 1mm; }
    .logos li { width: 17.5mm; height: 8mm; }
    .logos { margin-bottom: 1mm; }
    .tiles { grid-template-columns: repeat(6, 1fr); gap: 1.2mm; margin-bottom: 2mm; }
    .tiles li { grid-template-columns: 6mm minmax(0, 1fr); grid-template-areas: 'ic name'; column-gap: 1.4mm; padding: 1mm 1.4mm 1mm 1mm; }
    .t-note { display: none; }
    .ic { width: 6mm; height: 6mm; }
    .t-name { font-size: 7pt; }
    .also dd { font-size: 8.4pt; }
    .also { gap: 0.4mm; }
    .last { padding-bottom: 0; }
  }
</style>
