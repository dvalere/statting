import logo from './logo.svg';
import './App.css';

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URI = "https://localhost:3001"
const CLIENT_ID = "0d1f0eb1410845f5a0ffdc1639baba7f"
const RESPONSE_TYPE = "token"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </header>
    </div>
  );
}

export default App;
