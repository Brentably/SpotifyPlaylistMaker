import React, { useState } from "react"

const Search = () => {
  const [value, setValue] = useState("")
  return (
    <input
      type="search"
      placeholder="Search"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}

export default Search
