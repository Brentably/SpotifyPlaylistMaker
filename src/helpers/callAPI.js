// import React from 'react'

const callAPI = async (fetchURL, token) => {
        let response = await fetch(fetchURL, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Authorization': `Bearer ${token}`
          }})
          if(response.ok && response.status === "200") return await response.json()
          else return await response
}

export default callAPI