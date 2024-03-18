import logo from './kirby-spinning.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kirbo is a funky fella! Watch 'em chill and vibe!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=KaZN4EVVzRY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how Kirbo spends Christmas!
        </a>
      </header>
    </div>
  );
}

export default App;
