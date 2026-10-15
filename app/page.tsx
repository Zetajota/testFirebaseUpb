const modes = [
  {
    number: "01",
    title: "Juega a tu manera",
    description:
      "Partidos casuales, competitivos y modos extra. Siempre hay una cancha para ti.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Sube de rango",
    description:
      "Perfecciona tus toques, domina el aire y escala en el modo competitivo.",
    icon: "↑",
  },
  {
    number: "03",
    title: "Arma tu estilo",
    description:
      "Personaliza tu auto con miles de objetos y entra a la cancha con todo.",
    icon: "✳",
  },
];

function RocketBall() {
  return (
    <div className="arena-art" aria-hidden="true">
      <div className="arena-sun" />
      <div className="arena-ring arena-ring-one" />
      <div className="arena-ring arena-ring-two" />
      <div className="arena-floor" />
      <div className="ball-shadow" />
      <div className="soccer-ball">
        <span className="ball-panel ball-panel-one" />
        <span className="ball-panel ball-panel-two" />
        <span className="ball-panel ball-panel-three" />
      </div>
      <svg className="rocket-car" viewBox="0 0 440 210" fill="none">
        <path d="M56 126 86 83c9-13 22-22 38-25l104-16c23-4 46 4 62 21l42 44 48 14c12 4 20 15 20 27v14H48v-18c0-8 2-14 8-18Z" fill="#c7ff3d" />
        <path d="m130 65 97-15c21-3 41 4 55 19l25 28H104l15-21c3-5 7-9 11-11Z" fill="#173344" />
        <path d="m237 51-8 46h78l-25-28c-12-12-27-18-45-18Z" fill="#244e61" />
        <path d="M45 143h359v25H45z" fill="#a2dc26" />
        <path d="M52 132h43v11H52zM358 132h42v11h-42z" fill="#ff794d" />
        <circle cx="124" cy="169" r="31" fill="#111c2a" />
        <circle cx="124" cy="169" r="14" fill="#b7c4c8" />
        <circle cx="334" cy="169" r="31" fill="#111c2a" />
        <circle cx="334" cy="169" r="14" fill="#b7c4c8" />
        <path d="m44 152-25-9 21-8M401 152l25-9-22-8" stroke="#ff794d" strokeWidth="8" strokeLinecap="round" />
        <path d="m17 136-14-7m22 20-18 1" stroke="#ffb64d" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <span className="art-label">A TODO GAS</span>
      <span className="art-coordinate">ARENA / 01</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Rocket League, inicio">
          <span className="brand-mark">RL</span>
          <span>ROCKET<span className="brand-light">LEAGUE</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#juego">El juego</a>
          <a href="#modos">Modos</a>
          <a href="#jugar">Cómo jugar</a>
        </nav>
        <a className="header-cta" href="https://www.rocketleague.com/" target="_blank" rel="noreferrer">
          Sitio oficial <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span /> FÚTBOL. AUTOS. PURA ADRENALINA.</div>
          <h1>EL GOL<br />VA <span>POR EL AIRE.</span></h1>
          <p className="hero-description">
            Acelera, vuela y conviértete en leyenda. El campo está listo; ahora solo faltas tú.
          </p>
          <div className="hero-actions" id="jugar">
            <a className="button button-primary" href="https://www.rocketleague.com/" target="_blank" rel="noreferrer">
              JUEGA GRATIS <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#juego">DESCUBRE EL JUEGO <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note"><span className="note-icon">✦</span> GRATIS PARA JUGAR <span className="note-divider">/</span> COMPETENCIA SIN LÍMITES</div>
        </div>
        <RocketBall />
        <div className="hero-index"><span>01</span> / 03</div>
      </section>

      <section className="intro-section" id="juego">
        <div className="section-kicker">EL JUEGO</div>
        <div className="intro-copy">
          <h2>Un auto. Una pelota.<br /><span>Un estadio entero.</span></h2>
          <p>Rocket League combina la emoción del fútbol con autos propulsados por cohetes. Entra, acelera y juega en partidas rápidas donde cada segundo puede cambiarlo todo.</p>
        </div>
        <div className="stat-block"><strong>5<span> min</span></strong><small>POR PARTIDA</small></div>
      </section>

      <section className="modes-section" id="modos">
        <div className="modes-heading">
          <div><div className="section-kicker">TU PRÓXIMA JUGADA</div><h2>LA CANCHA <span>ES TUYA.</span></h2></div>
          <p>Fácil de empezar.<br />Imposible de soltar.</p>
        </div>
        <div className="mode-grid">
          {modes.map((mode) => (
            <article className="mode-card" key={mode.number}>
              <div className="mode-top"><span>{mode.number} / EXPERIENCIA</span><span className="mode-icon">{mode.icon}</span></div>
              <h3>{mode.title}</h3>
              <p>{mode.description}</p>
              <a href="https://www.rocketleague.com/" target="_blank" rel="noreferrer" aria-label={`Conoce más: ${mode.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio"><span className="brand-mark">RL</span><span>ROCKET<span className="brand-light">LEAGUE</span></span></a>
        <p>Nos vemos en la cancha.</p>
        <a href="https://www.rocketleague.com/" target="_blank" rel="noreferrer">ROCKETLEAGUE.COM ↗</a>
      </footer>
    </main>
  );
}
