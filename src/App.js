import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';



function App() {
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const REDIRECT_URI = "https://localhost:3000"
  const CLIENT_ID = "0d1f0eb1410845f5a0ffdc1639baba7f"
  const RESPONSE_TYPE = "token"
  const [token, setToken] = useState("")

  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

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

const searchArtists = async (e) => {
  e.preventDefault()
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
          Authorization: `Bearer ${token}`
      },
      params: {
          q: searchKey,
          type: "artist"
      }
  })

  setArtists(data.artists.items)
}

<form onSubmit={searchArtists}>
    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
    <button type={"submit"}>Search</button>
</form>

  return (
    <div className="App">
      <header className="App-header">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </header>
    </div>
  );

}

export default App;
