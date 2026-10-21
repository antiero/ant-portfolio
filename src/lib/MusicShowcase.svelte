<script lang="ts">
  import { tick } from 'svelte';

  type PreviewTrack = { id: string; title: string; release: string; previewUrl: string };
  type Release = { title: string; artist: string; artwork: string; href: string; track: PreviewTrack };
  type GamePreview = { id: string; title: string; previewUrl: string };

  const petSaintsTracks: PreviewTrack[] = [
    { id: 'speed-of-thought', title: 'Speed of Thought', release: 'Pet Saints EP', previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ae/40/97/ae40974b-00e7-5974-a67a-2fc4afeaef42/mzaf_6935947724677756358.plus.aac.p.m4a' },
    { id: 'when-will-you-forget-me', title: 'When Will You Forget Me?', release: 'Pet Saints EP', previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/81/df/4d/81df4da5-180c-705e-1ce3-4762a0e10179/mzaf_4504263459945052622.plus.aac.p.m4a' },
    { id: 'constant-moves', title: 'Constant Moves', release: 'Pet Saints EP', previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/eb/1a/6f/eb1a6f24-2a59-9159-f45e-e226dc9c62c1/mzaf_9221452440913597014.plus.aac.p.m4a' },
    { id: 'eyes-glazed-over', title: 'Eyes Glazed Over', release: 'Pet Saints EP', previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6e/7c/52/6e7c52cc-ae3a-1956-d5aa-d719ebdb34cd/mzaf_15934676194773490851.plus.aac.p.m4a' }
  ];
  const tidings: PreviewTrack = { id: 'tidings', title: 'Tidings', release: 'Tony Nacho', previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7f/bf/ea/7fbfea94-84ac-da0b-b29f-38ecf3b47446/mzaf_1636433729788482740.plus.aac.p.m4a' };
  const malageno: PreviewTrack = { id: 'malageno', title: 'Malageno', release: 'Tony Nacho', previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a8/28/47/a8284785-2ef7-1725-55d5-5f1ecf61de35/mzaf_1937357563354648080.plus.aac.p.m4a' };
  const microfreakSoup: PreviewTrack = { id: 'microfreak-soup', title: 'Microfreak Soup', release: 'Tony Nacho', previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/3d/0d/92/3d0d9245-ed46-aaff-ba6e-06fe5a14d77d/mzaf_9886805979140456252.plus.aac.p.m4a' };
  const releases: Release[] = [
    { title: 'Pet Saints EP', artist: 'noodlr · 2024', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/af/6a/94/af6a94e5-8d84-99b8-1010-9f9a33e01deb/artwork.jpg/1200x1200bb.jpg', href: 'https://music.apple.com/gb/album/pet-saints-ep/1751651904', track: petSaintsTracks[0] },
    { title: 'Tidings', artist: 'Tony Nacho · Single', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/09/d2/39/09d239b2-9775-708c-9f85-d018de81be5c/artwork.jpg/1200x1200bb.jpg', href: 'https://music.apple.com/gb/album/tidings-single/1858031100', track: tidings },
    { title: 'Malageno', artist: 'Tony Nacho · Single', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2b/c6/e2/2bc6e2e7-98fb-5abe-f545-d4c848a7609f/artwork.jpg/1200x1200bb.jpg', href: 'https://music.apple.com/gb/album/malageno-single/1837734512', track: malageno },
    { title: 'Microfreak Soup', artist: 'Tony Nacho · Single', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/46/2e/06/462e0618-2bf2-665d-21ff-561b39a93701/artwork.jpg/1200x1200bb.jpg', href: 'https://music.apple.com/gb/album/microfreak-soup-single/1553147832', track: microfreakSoup }
  ];
  const gamePreviews: GamePreview[] = [
    { id: 'cosmic-booty', title: 'Cosmic Booty', previewUrl: './music/cosmic-booty-main-loop.m4a' },
    { id: 'flying-wings', title: 'Flying Wings', previewUrl: './music/flying-intro.mp3' }
  ];

  let player: HTMLAudioElement;
  let gamePlayer: HTMLAudioElement;
  let selectedTrack = releases[0].track;
  let selectedGamePreview: GamePreview | null = null;
  let isPlaying = false;
  let isGamePlaying = false;
  let progress = 0;
  let elapsed = 0;
  let duration = 30;

  async function togglePreview(track: PreviewTrack) {
    if (selectedTrack.id === track.id && isPlaying) {
      player.pause();
      return;
    }

    if (selectedTrack.id !== track.id) {
      selectedTrack = track;
      progress = 0;
      elapsed = 0;
      await tick();
    }

    if (isGamePlaying) gamePlayer.pause();
    isPlaying = true;
    void player.play().catch(() => isPlaying = false);
  }

  async function toggleGamePreview(track: GamePreview) {
    if (selectedGamePreview?.id === track.id && isGamePlaying) {
      gamePlayer.pause();
      return;
    }

    if (selectedGamePreview?.id !== track.id) {
      selectedGamePreview = track;
      await tick();
    }

    if (isPlaying) player.pause();
    isGamePlaying = true;
    void gamePlayer.play().catch(() => isGamePlaying = false);
  }

  function limitGamePreview() {
    if (gamePlayer.currentTime >= 30) {
      gamePlayer.pause();
      gamePlayer.currentTime = 0;
    }
  }

  function updateProgress() {
    elapsed = player.currentTime;
    if (Number.isFinite(player.duration) && player.duration > 0) duration = player.duration;
    progress = Math.min((elapsed / duration) * 100, 100);
  }

  function seek(event: Event) {
    const nextProgress = Number((event.currentTarget as HTMLInputElement).value);
    progress = nextProgress;
    player.currentTime = (nextProgress / 100) * duration;
  }

  function formatTime(seconds: number) {
    const wholeSeconds = Math.floor(seconds);
    return `${Math.floor(wholeSeconds / 60)}:${String(wholeSeconds % 60).padStart(2, '0')}`;
  }
</script>

<section id="music" class="music-section reveal" aria-labelledby="music-heading">
  <div class="section-heading">
    <p class="eyebrow">Music</p>
    <h2 id="music-heading">A small shelf<br />of sound.</h2>
  </div>

  <div class="release-shelf" aria-label="Featured releases">
    {#each releases as release}
      <article class="release" class:current={selectedTrack.id === release.track.id}>
        <a class="artwork" href={release.href} target="_blank" rel="noreferrer" aria-label={`Open ${release.title} on Apple Music`}>
          <img src={release.artwork} alt={`${release.title} artwork by ${release.artist.split(' · ')[0]}`} loading="lazy" />
          <span aria-hidden="true">↗</span>
        </a>
        <div class="release-meta">
          <p>{release.artist}</p>
          <h3>{release.title}</h3>
          <button type="button" onclick={() => togglePreview(release.track)} aria-label={isPlaying && selectedTrack.id === release.track.id ? `Pause ${release.title} preview` : `Play ${release.title} preview`}>
            {isPlaying && selectedTrack.id === release.track.id ? 'Pause' : 'Play preview'} <span aria-hidden="true">{isPlaying && selectedTrack.id === release.track.id ? 'Ⅱ' : '▶'}</span>
          </button>
        </div>
      </article>
    {/each}
  </div>

  <div class="preview-player" aria-label="30-second audio preview player">
    <audio
      bind:this={player}
      src={selectedTrack.previewUrl}
      onplay={() => isPlaying = true}
      onpause={() => isPlaying = false}
      onended={() => { isPlaying = false; progress = 0; elapsed = 0; }}
      ontimeupdate={updateProgress}
      onloadedmetadata={updateProgress}
    ></audio>
    <div class="now-playing">
      <span class="listening-mark" class:active={isPlaying} aria-hidden="true"><i></i><i></i><i></i></span>
      <span><span class="now-playing-label">Now previewing · 0:30</span><strong>{selectedTrack.title}</strong><small>{selectedTrack.release}</small></span>
      <button type="button" class="play-button" onclick={() => togglePreview(selectedTrack)} aria-label={isPlaying ? `Pause ${selectedTrack.title}` : `Play ${selectedTrack.title}`} title={isPlaying ? 'Pause preview' : 'Play preview'}>{isPlaying ? 'Ⅱ' : '▶'}</button>
    </div>
    <div class="scrubber">
      <input aria-label={`Seek through ${selectedTrack.title} preview`} type="range" min="0" max="100" value={progress} oninput={seek} style={`--progress: ${progress}%`} />
      <span>{formatTime(elapsed)} / 0:30</span>
    </div>
  </div>

  <div class="ep-selections" aria-label="More Pet Saints EP previews">
    <p class="eyebrow">More from Pet Saints</p>
    {#each petSaintsTracks.slice(1) as track}
      <button type="button" class:current={selectedTrack.id === track.id} onclick={() => togglePreview(track)}>{track.title} <span aria-hidden="true">▶</span></button>
    {/each}
  </div>

  <div class="media-stories">
    <article class="media-story">
      <a class="story-preview soundcloud-preview" href="https://soundcloud.com/nasce" target="_blank" rel="noreferrer" aria-label="Open Tony Nacho on SoundCloud">
        <img src="https://i1.sndcdn.com/avatars-UZPZICQ8FzAoZxMy-ts29nQ-t500x500.jpg" alt="Tony Nacho SoundCloud profile artwork" loading="lazy" />
        <span>Open on SoundCloud <span aria-hidden="true">↗</span></span>
      </a>
      <div class="story-copy">
        <p class="eyebrow">SoundCloud</p>
        <strong>Sketches, sounds<br />and works in progress.</strong>
      </div>
    </article>
  </div>

  <section class="game-music" aria-labelledby="game-music-heading">
    <div class="game-music-heading">
      <p class="eyebrow">Game music</p>
      <h3 id="game-music-heading">Scores for worlds<br />you can play.</h3>
    </div>
    <div class="game-grid">
      <article class="game-project">
        <div class="game-preview pezzi-preview">
          <iframe src="https://www.viverse.com/agg5b4U?full3d=&no-cookie=&autoplay=0" title="Pezzi launch trailer" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <div class="game-copy">
          <p class="eyebrow">Pezzi</p>
          <h4>Music in pieces.<br /><em>Earworm warning.</em></h4>
          <a href="https://playpezzi.com" target="_blank" rel="noreferrer">Watch trailer <span aria-hidden="true">↗</span></a>
        </div>
      </article>
      <article class="game-project">
        <a class="game-preview" href="https://gisleburt.itch.io/cosmic-booty" target="_blank" rel="noreferrer" aria-label="Play Cosmic Booty on itch.io">
          <img src="https://img.itch.zone/aW1nLzEwNDA2OTM0LnBuZw%3D%3D/original/Ov06Qp.png" alt="Cosmic Booty gameplay" />
          <span aria-hidden="true">↗</span>
        </a>
        <div class="game-copy">
          <p class="eyebrow">Cosmic Booty</p>
          <h4>Cosmic sea-battle<br />tactics.</h4>
          <div class="game-actions">
            <button type="button" class="game-preview-button" class:playing={selectedGamePreview?.id === gamePreviews[0].id && isGamePlaying} onclick={() => toggleGamePreview(gamePreviews[0])} aria-label={selectedGamePreview?.id === gamePreviews[0].id && isGamePlaying ? 'Pause Cosmic Booty soundtrack preview' : 'Play Cosmic Booty soundtrack preview'} title="30-second soundtrack preview">
              {selectedGamePreview?.id === gamePreviews[0].id && isGamePlaying ? 'Pause preview' : 'Play soundtrack'} <span aria-hidden="true">{selectedGamePreview?.id === gamePreviews[0].id && isGamePlaying ? 'Ⅱ' : '▶'}</span>
            </button>
            <a href="https://gisleburt.itch.io/cosmic-booty" target="_blank" rel="noreferrer">Play on itch.io <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </article>
      <article class="game-project">
        <a class="game-preview flying-wings-preview" href="https://5of12.co.uk/flyingwings" target="_blank" rel="noreferrer" aria-label="Visit Flying Wings">
          <img src="./games/flying-wings.webp" alt="Flying Wings glider above a tranquil island" />
          <span aria-hidden="true">↗</span>
        </a>
        <div class="game-copy">
          <p class="eyebrow">Flying Wings</p>
          <h4>A world built<br />for flight.</h4>
          <div class="game-actions">
            <button type="button" class="game-preview-button" class:playing={selectedGamePreview?.id === gamePreviews[1].id && isGamePlaying} onclick={() => toggleGamePreview(gamePreviews[1])} aria-label={selectedGamePreview?.id === gamePreviews[1].id && isGamePlaying ? 'Pause Flying Wings soundtrack preview' : 'Play Flying Wings soundtrack preview'} title="30-second soundtrack preview">
              {selectedGamePreview?.id === gamePreviews[1].id && isGamePlaying ? 'Pause preview' : 'Play soundtrack'} <span aria-hidden="true">{selectedGamePreview?.id === gamePreviews[1].id && isGamePlaying ? 'Ⅱ' : '▶'}</span>
            </button>
            <a href="https://5of12.co.uk/flyingwings" target="_blank" rel="noreferrer">Visit Flying Wings <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </article>
    </div>
    <audio
      bind:this={gamePlayer}
      src={selectedGamePreview?.previewUrl}
      onplay={() => isGamePlaying = true}
      onpause={() => isGamePlaying = false}
      onended={() => isGamePlaying = false}
      ontimeupdate={limitGamePreview}
    ></audio>
  </section>

</section>

<style>
  .music-section { padding: clamp(4.5rem, 9vw, 8rem) 0; border-top: 1px solid rgba(255, 255, 255, 0.1); scroll-margin-top: 7rem; }
  .section-heading { display: grid; grid-template-columns: minmax(9rem, 0.34fr) 1fr; gap: clamp(1.5rem, 4vw, 4rem); align-items: start; margin-bottom: clamp(2.5rem, 6vw, 5rem); }
  .eyebrow { margin: 0; color: rgba(255, 255, 255, 0.56); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; }
  h2, h3, p { margin-top: 0; }
  h2 { max-width: 880px; margin-bottom: 0; font-size: clamp(2.4rem, 5vw, 5.4rem); line-height: 0.96; letter-spacing: -0.062em; font-weight: 580; }
  h3 { margin: 0.55rem 0 0.9rem; font-size: clamp(1.35rem, 2.2vw, 2rem); line-height: 0.96; letter-spacing: -0.052em; font-weight: 580; }
  a { color: inherit; text-decoration: none; }
  button { padding: 0; border: 0; background: transparent; font: inherit; color: inherit; cursor: pointer; }

  .release-shelf { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(0.8rem, 1.8vw, 1.5rem); }
  .release { min-width: 0; padding-bottom: 0.2rem; border-bottom: 1px solid rgba(255, 255, 255, 0.14); }
  .artwork { position: relative; display: block; overflow: hidden; aspect-ratio: 1; background: #151518; box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.2); }
  .artwork::after { content: ''; position: absolute; inset: 0; background: rgba(0, 0, 0, 0.12); transition: background 220ms ease; }
  .artwork img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1); }
  .artwork > span { position: absolute; z-index: 1; right: 0.7rem; bottom: 0.55rem; display: grid; place-items: center; width: 1.55rem; height: 1.55rem; border-radius: 50%; background: rgba(9, 9, 11, 0.72); font-size: 0.75rem; opacity: 0; transform: translateY(0.3rem); transition: opacity 180ms ease, transform 180ms ease; }
  .artwork:hover img { transform: scale(1.035); }
  .artwork:hover::after { background: rgba(0, 0, 0, 0); }
  .artwork:hover > span { opacity: 1; transform: translateY(0); }
  .release-meta { padding: 0.9rem 0 1rem; }
  .release-meta p { margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 0.68rem; letter-spacing: 0.06em; text-transform: uppercase; }
  .release-meta button, .ep-selections button { color: rgba(255, 255, 255, 0.56); font-size: 0.78rem; transition: color 180ms ease; }
  .release.current .release-meta button, .release-meta button:hover, .ep-selections button:hover, .ep-selections button.current { color: #fff; }

  .preview-player { max-width: 48rem; margin: clamp(3.5rem, 7vw, 6rem) auto 0; padding: 1rem 0; border-top: 1px solid rgba(255, 255, 255, 0.2); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
  audio { display: none; }
  .now-playing { display: grid; grid-template-columns: 1.7rem minmax(0, 1fr) auto; gap: 0.75rem; align-items: center; }
  .listening-mark { display: flex; align-items: center; justify-content: center; gap: 2px; height: 1rem; }
  .listening-mark i { width: 2px; height: 0.25rem; background: rgba(255, 255, 255, 0.45); }
  .listening-mark.active i { animation: beat 700ms ease-in-out infinite alternate; background: #fff; }
  .listening-mark.active i:nth-child(2) { animation-delay: -300ms; }
  .listening-mark.active i:nth-child(3) { animation-delay: -500ms; }
  .now-playing-label, .now-playing small { display: block; color: rgba(255, 255, 255, 0.48); font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; }
  .now-playing-label { margin-bottom: 0.2rem; }
  .now-playing strong { display: block; font-size: 0.95rem; font-weight: 580; }
  .now-playing small { margin-top: 0.12rem; font-size: 0.62rem; }
  .play-button { width: 2.3rem; height: 2.3rem; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 50%; font-size: 0.8rem; transition: color 180ms ease, background 180ms ease, transform 180ms ease; }
  .play-button:hover { color: #09090b; background: #fff; transform: scale(1.05); }
  .scrubber { display: grid; grid-template-columns: 1fr auto; gap: 0.8rem; align-items: center; margin-top: 0.9rem; }
  .scrubber input { width: 100%; height: 2px; margin: 0; appearance: none; border-radius: 999px; background: linear-gradient(90deg, #fff var(--progress), rgba(255, 255, 255, 0.18) var(--progress)); cursor: pointer; }
  .scrubber input::-webkit-slider-thumb { width: 0.65rem; height: 0.65rem; appearance: none; border: 0; border-radius: 50%; background: #fff; }
  .scrubber span { color: rgba(255, 255, 255, 0.46); font-size: 0.7rem; font-variant-numeric: tabular-nums; }
  .ep-selections { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 0.5rem 1.15rem; max-width: 48rem; margin: 1rem auto 0; }
  .ep-selections .eyebrow { margin-right: 0.35rem; font-size: 0.62rem; }

  .media-stories { margin-top: clamp(4rem, 9vw, 8rem); }
  .media-story { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(2rem, 4vw, 4rem); align-items: end; min-width: 0; }
  .story-preview { position: relative; display: block; overflow: hidden; aspect-ratio: 16 / 9; background: #151518; }
  .story-preview::after { content: ''; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(transparent 52%, rgba(0, 0, 0, 0.6)); }
  .soundcloud-preview img { width: 100%; height: 100%; display: block; object-fit: cover; filter: saturate(0.86); transition: transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 240ms ease; }
  .soundcloud-preview > span { position: absolute; z-index: 1; right: 1rem; bottom: 0.85rem; left: 1rem; display: flex; justify-content: space-between; font-size: 0.82rem; }
  .soundcloud-preview:hover img { transform: scale(1.035); filter: saturate(1); }
  .story-copy { padding: 1rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.14); }
  .story-copy strong { display: block; margin-top: clamp(2rem, 4vw, 4rem); font-size: clamp(1.6rem, 3.2vw, 3.2rem); line-height: 0.96; letter-spacing: -0.056em; font-weight: 580; }
  .game-music { margin-top: clamp(4rem, 9vw, 8rem); }
  .game-music-heading { display: grid; grid-template-columns: minmax(9rem, 0.34fr) 1fr; gap: clamp(1.5rem, 4vw, 4rem); align-items: start; margin-bottom: clamp(2rem, 4vw, 3.5rem); }
  .game-music-heading h3 { margin: 0; font-size: clamp(2rem, 4vw, 4.3rem); line-height: 0.94; letter-spacing: -0.06em; }
  .game-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1rem, 2vw, 1.5rem); }
  .game-project { min-width: 0; }
  .game-preview { position: relative; display: block; overflow: hidden; aspect-ratio: 16 / 10; background: #151518; }
  .game-preview::after { content: ''; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.38)); transition: background 220ms ease; }
  .game-preview img, .game-preview iframe { position: relative; z-index: 1; width: 100%; height: 100%; display: block; border: 0; object-fit: cover; transition: transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1); }
  .game-preview > span { position: absolute; z-index: 2; right: 0.8rem; bottom: 0.7rem; display: grid; place-items: center; width: 1.6rem; height: 1.6rem; border-radius: 50%; background: rgba(9, 9, 11, 0.72); font-size: 0.75rem; opacity: 0; transform: translateY(0.2rem); transition: opacity 180ms ease, transform 180ms ease; }
  .game-preview:hover img { transform: scale(1.035); }
  .game-preview:hover::after { background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.12)); }
  .game-preview:hover > span { opacity: 1; transform: translateY(0); }
  .flying-wings-preview img { object-position: center 62%; }
  .game-copy { padding: 1rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.14); }
  .game-copy h4 { margin: clamp(1.75rem, 3vw, 3rem) 0 0; font-size: clamp(1.25rem, 2.2vw, 2rem); line-height: 0.96; letter-spacing: -0.052em; font-weight: 580; }
  .game-copy em { color: rgba(255, 255, 255, 0.48); font-style: normal; }
  .game-actions { display: flex; flex-wrap: wrap; gap: 0.8rem 1.25rem; margin-top: 1.35rem; }
  .game-actions a, .game-preview-button { color: rgba(255, 255, 255, 0.62); font-size: 0.82rem; }
  .game-actions a:hover, .game-preview-button:hover, .game-preview-button.playing { color: #fff; }
  .game-preview-button { text-align: left; }
  .artwork:focus-visible, .soundcloud-preview:focus-visible, .game-preview:focus-visible, .game-actions a:focus-visible, button:focus-visible, input:focus-visible { outline: 2px solid #fff; outline-offset: 0.35rem; }
  @keyframes beat { from { height: 0.25rem; } to { height: 1rem; } }

  @media (max-width: 900px) { .release-shelf { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1.5rem, 4vw, 2.5rem) 1rem; } }
  @media (max-width: 760px) { .music-section { scroll-margin-top: 7rem; } .section-heading, .media-story, .game-music-heading, .game-grid { grid-template-columns: 1fr; } }
  @media (max-width: 470px) { .ep-selections { justify-content: flex-start; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
</style>
