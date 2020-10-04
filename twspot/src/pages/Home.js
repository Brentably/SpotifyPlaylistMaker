import React, { useState, useEffect } from "react"
import hash from "../auth/hash"
import { useHistory } from "react-router-dom"

const Home = () => {
  let history = useHistory()

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    let _token = hash.access_token

    // redirects back to the login page if there's not a token -- maybe upgrade error handling in the future
    if (!_token) history.push("/")
    const spotifyConnect = async () => {
      let response = await fetch(
        "https://api.spotify.com/v1/me",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          headers: {
            Authorization: `Bearer ${_token}`,
          },
          signal: signal
        }
      )
      setUserData(await response.json())
    }
    try {
      spotifyConnect()
    } catch (error) {
      console.log(error)
    }

    return () => controller.abort()
  }, [history])

  useEffect(() => {
    console.log(userData)
  }, [userData])

  if (!userData) return null
  return (
    <div className="bg-black p-5 rounded-lg text-center max-w-xs">
      <h1 className="text-white text-2xl mb-2">
        Welcome to spotify playlist app
      </h1>
      <img src={userData.images[0].url} alt="profile" />
    </div>
  )
}

export default Home
