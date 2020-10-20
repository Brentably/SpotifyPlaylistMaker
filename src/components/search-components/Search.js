import React, { useState, useEffect } from "react"
import SearchResults from './SearchResults'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const SearchInput = styled.input`
padding: 0.25em 0.9em 0.25em 2.5em;
border-radius: 1em;
width: 100%;
`



const Search = () => {
  // react controlled forms
  let history = useHistory()
  // console.log(history.location.state)

  // the following funkiness holds the results for the search page in state, that way if someone is browsing and goes back to the search page, the results can rehydrate from state
  const [query, setQuery] = useState(history.location.state ? history.location.state.query : "")
  const [data, setData] = useState(history.location.state ? history.location.state.data : null)
  useEffect(() => {history.location.state = {query: query, data: data}}, [query, history.location.state, data])


  function onChangeHandler(event) {
    setQuery(event.target.value)
  }



  return (
    <>
    <div className="m-2 relative">
    <SearchInput
      type="search"
      placeholder={"Search for Artists, Songs, etc."}
      autoFocus
      value={query}
      onChange={onChangeHandler}
    />
    {/* below is just some messy stuff I had to do to make sure the search icon was placed correctly. I couldn't figure out the background-image property so I just did what the spotify website did, BUT I know how to make this work without it being messy I'm just not going to right now because it works and I already spent a couple hours on this */}
    <div className="searchSVG"><span className="flex-1">
    <svg height="24" role="img" width="24" viewBox="0 0 512 512" className="block" style={{color: "rgb(19, 19, 19)"}} aria-hidden="false"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor"></path></svg>
    </span></div>
    </div>

    <SearchResults query={query} setData={setData} data={data}/>
    </>
  )
}

export default Search
