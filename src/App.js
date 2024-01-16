import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';


function App() {
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const REDIRECT_URI = "https://localhost:3000"
  const CLIENT_ID = "0d1f0eb1410845f5a0ffdc1639baba7f"
  const RESPONSE_TYPE = "token"
  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}

  return (
    <div className="App">
      <header className="App-header">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </header>
    </div>
  );
}

export default App;
