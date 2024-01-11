export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "https://localhost:3001"
const clintId = "0d1f0eb1410845f5a0ffdc1639baba7f"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-read-top-read",
    "user-modify-playback-state"
]

const loginUrl = '${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true'

import { loginUrl } from '../spotify';
<a href={loginUrl} id = "signInButton" > Sign in with spotify! </a>

export const getTokenFromUrl = ()=>{
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item)=>{
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {});
}



// For app.js

/* 
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
const spotify = new SpotifyWebApi();

const [spotifyToken, setSpotifyToken] = useState("")
useEffect(()=>{
  console.log("This is what we derived from the URL: ", getTokenFromUrl())
  const _spotifyToken = getTokenFromUrl().access_token;
  window.location.has = "";
  console.log("This is our spotify Token", _spotifyToken)

  if (_spotifyToken){
    setSpotifyToken(_spotifyToken)
    spotifyToken.setAccessToken(_spotifyToken)
    spotifyToken.getMe().then((user)=>{
      console.log("DIS YOU: ", user)
    });
  }
})
*/