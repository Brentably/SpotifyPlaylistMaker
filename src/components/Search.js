import React, { useState } from "react"
import styled from 'styled-components'

const SearchInput = styled.input`
width: 100%;
padding: 0.25em;
`


const Search = () => {
  const [value, setValue] = useState("")
  return (
    <div className="flex justify-start m-2">
    <SearchInput
      type="search"
      placeholder="Search"
      autoFocus
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
    </div>
  )
}

export default Search
