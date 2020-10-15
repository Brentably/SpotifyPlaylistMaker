import React, { useState } from "react"
import styled from 'styled-components'

const SearchInput = styled.input`
padding: 0.25em 0.9em 0.25em 2.5em;
border-radius: 1em;
width: 100%;
`



const Search = () => {
  const [value, setValue] = useState("")
  return (
    <div className="m-2 relative">
    <SearchInput
      type="search"
      placeholder={"Search for Artists, Songs, etc."}
      autoFocus
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
    
    <div className="searchSVG"><span className="flex-1">
    <svg height="24" role="img" width="24" viewBox="0 0 512 512" className="block" style={{color: "rgb(19, 19, 19)"}} aria-hidden="false"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor"></path></svg>
    </span></div>
    </div>
  )
}

export default Search
