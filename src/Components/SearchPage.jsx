import React,{useState} from 'react'

import {useNavigate} from 'react-router-dom'
function SearchPage() {
    const [qry, setQry] = useState('')
    let navigate = useNavigate()
    const handleInputChange = (e) => {
        setQry(e.target.value)
    }


    
    return (
        <div className="search-container">
            <form onSubmit={()=>(navigate(`/search/${qry}`))}>

                <input type="text" placeholder='search here'

                    onChange={handleInputChange}
                />
                <button type='submit'>🔍</button>
            </form>
        </div>
    )
}

export default SearchPage