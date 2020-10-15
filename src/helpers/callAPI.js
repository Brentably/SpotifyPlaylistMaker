import React from 'react'
import Login from '../components/Login'

const callAPI = async (fetchURL, token) => {
        let response = await fetch(fetchURL, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Authorization': `Bearer ${token}`
          }})
          if(response.ok && response.status === "200") return await response.json()
          // if authorization token is old, attempts to help the user login again, if this breaks, try a redirect?
          else if(response.status === "401") return <Login />
          else return await response
}

export default callAPI