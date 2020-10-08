import React from "react"
import { authEndpoint, clientId, redirectUri, scopes } from "../auth/config"
// import hash from "../auth/hash"
// import { useHistory } from "react-router-dom"

// // let history = useHistory()

// const [userData, setUserData] = useState(null)
// const [token, setToken] = useState(null)
// // controller / signal stuff is for cancelling the promise if the component unmounts
// useEffect(() => {
//   const controller = new AbortController()
//   const signal = controller.signal
//   // grabs the token from the url and sets it in state
//   let thetoken = hash.access_token
//   setToken(thetoken)

//   // tries to hook into the api and set the reponse to state
//   const spotifyConnect = async () => {
//     let response = await fetch(
//       "https://api.spotify.com/v1/me",
//       {
//         method: "GET", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, *cors, same-origin
//         headers: {
//           Authorization: `Bearer ${thetoken}`,
//         },
//         signal: signal
//       }
//     )
//     setUserData(await response.json())
//   }
//   try {
//     spotifyConnect()
//   } catch (error) {
//     console.log(error)
//   }

//   return () => controller.abort()
// }, [])

// useEffect(() => {
//   console.log(userData)
// }, [userData])

const Login = () => {
  return (
    <div className="bg-black p-5 rounded-lg text-center max-w-xs modal">
      <h1 className="text-white text-2xl mb-2">BPM Playlist Maker</h1>
      <h5 className="text-gray-200 text-wrap mb-4">
        This app allows you to create playlists based on the BPM of songs to
        create perfectly customized running playlists.
      </h5>
      <a
        className="btn text-white bg-green-700 hover:bg-green-800"
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
          )}&response_type=token&show_dialog=false`}
          >
        Connect to Spotify
      </a>
    </div>
  )
}

export default Login
