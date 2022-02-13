import React from "react"

const SearchBox = ({searchChange}) => {

  return (
    <div className="pa2">
      <input className="pa3 ba" type={'search'} placeholder='Search robots' onChange={(event)=>{searchChange(event.target.value)}}/>
    </div>
  )
}

export default SearchBox