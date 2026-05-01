<script>
  const work = [
    { title: "MIDIWeb", desc: "WebMIDI browser for Apple platforms", link: "https://5of12.co.uk" },
    { title: "Noodlr Board", desc: "Infinite canvas for music creation", link: "https://5of12.github.io/noodlrboard/" },
    { title: "Pezzi", desc: "WebXR musical puzzle game", link: "https://5of12.co.uk" }
  ];
</script>

<main>
  <section class="hero">
    <h1>I build creative tools for sound, space and interaction.</h1>
    <p>Creative technologist working across WebMIDI, XR, audio systems and product design.</p>
  </section>

  <section class="work">
    {#each work as item}
      <div class="item">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <a href={item.link} target="_blank">View</a>
      </div>
    {/each}
  </section>
</main>

<style>
  main { max-width: 900px; margin: auto; padding: 2rem; font-family: system-ui; }
  h1 { font-size: 3rem; line-height: 1.1; }
  .item { margin-top: 3rem; border-top: 1px solid #ddd; padding-top: 1rem; }
  a { text-decoration: none; border-bottom: 1px solid black; }
</style>
