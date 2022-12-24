import React from 'react'

const SearchBar = ({text, handleChange }) => {
    return (
        <div>
            <form>
                <input type="text" placeholder='Recherche...' value={text} onChange={(e)=>handleChange(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar