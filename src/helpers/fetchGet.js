import React from 'react'
import Login from '../components/Login'
import store from '../redux'



// this function allows for easy fetch calls, b/c it handles the token
const fetchGet = async (endpoint) => {

        let response = await fetch(endpoint, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Authorization': `Bearer ${store.getState().token}`
          }})
          if(response.ok && response.status === "200") return await response.json()
          // if authorization token is old, attempts to help the user login again, if this breaks, try a redirect?
          else if(response.status === "401") return <Login />
          else return await response
}

export default fetchGet