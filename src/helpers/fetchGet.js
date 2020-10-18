
const fetchGet = async (fetchURL, token) => {
        let response = await fetch(fetchURL, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Authorization': `Bearer ${token}`
          }})
          if(response.ok && response.status === "200") return await response.json()
          // if authorization token is old, attempts to help the user login again. rendering a login didn't work so I'm trying this
          else if(response.status === "401") document.location.reload()
          else return await response
}

export default fetchGet