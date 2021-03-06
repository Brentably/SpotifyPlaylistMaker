
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "4451d90a4f634c33b6f4e015d616ab44";
// export const redirectUri = "https://brentably.github.io/SpotifyPlaylistMaker";
export const redirectUri = "http://192.168.0.246:3000/";
export const scopes = [
    "ugc-image-upload",
    "user-top-read",
    "user-read-playback-position",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-modify-playback-state",
    "user-library-modify",
    "user-library-read",
    "streaming",
    "app-remote-control",
    "user-read-private",
    "user-read-email",
    "user-follow-modify",
    "user-follow-read",
    "playlist-modify-public",
    "playlist-read-collaborative",
    "playlist-read-private",
    "playlist-modify-private"
];