import './App.css';

function App() {
  const graph_info = [
    {
      title: 'LED Grid Positions (For Arduino Projects)',
      hash: 'fbtxfsslrl',
      embed: true
    },
    {
      title: 'Neural Network Decision Boundary - Live Self Training!',
      hash: 'vx4e3clete',
      embed: true
    },
    {
      title: 'Port(?) of Mobile Game "I Love Hue"',
      hash: '1nmbsn4sbv',
      embed: true
    },
    {
      title: '.Projekt Game - with Custom Levels!',
      hash: '8ownioqzsv',
      embed: true
    },
    {
      title: 'MineSweeper in Desmos',
      hash: 'blofyypsef',
      embed: true
    },
    {
      title: 'Stacker Game with Animations',
      hash: 'jgxokyvyu9',
      embed: true
    },
    {
      title: 'Handwritten Digit Guesser (Not Self-Trained)',
      hash: '6entsxzpob',
      embed: true
    },
    {
      title: 'Simon Memory Game - With Sound!',
      hash: 'hkdlromeh8',
      embed: true
    },
    {
      title: 'WASD Functional Tetris - With Music!',
      hash: 'pmj9blhyxc',
      embed: false
    },
    {
      title: 'Textured 3D Block Test',
      hash: 'jbym0zz4zs',
      embed: true
    },
    {
      title: "Conway's Game of Life",
      hash: '8stxrurso8',
      embed: true
    },
    {
      title: "Complex Fourier Transform - SVG to Circles",
      hash: 'jd5dekpqfv',
      embed: false
    },
    {
      title: 'Procedural Animation of Movable Snake',
      hash: 'ssbugcheoe',
      embed: true
    }
  ]

  graph_info.reverse();
  const graph_list = graph_info.map((graph, index) => {
    const update_iframe = () => {
      const iframe = document.getElementById('iframe');
      iframe.src = `https://www.desmos.com/calculator/${graph.hash}${graph.embed ? '?embed' : ''}`;
      iframe.width = graph.embed ? 800 : 1200;
      iframe.scrollIntoView({ behavior: 'smooth' });
    }
    return (
      <div key={index} className="graph-button" onClick={update_iframe} style={{ display: 'flex', alignItems: 'center' }}>
      <h3 style={{ marginRight: '16px' }}>{graph.title}</h3>
      <img src={require(`./img/${graph.hash}.png`)} alt={graph.title} style={{ width: 250 }} />
      </div>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Desmos Projects</h1>
        <h3>Daniel Friedman</h3>
      </header>
      <iframe title='Desmos Graph' src="https://www.desmos.com/calculator/vmisjb6xw0" width="1200" height="600" id="iframe"></iframe>
      <br></br>
      <br></br>
      <div className="graph-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '16px' }}>
        {graph_list}
      </div>
    </div>
  );
}

export default App;
