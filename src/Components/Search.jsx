import React from 'react'
import {useParams} from 'react-router-dom'
import NewsField from './NewsField'

function Search() {
    const {slug} = useParams()
  return (
    <NewsField qry={slug}/>
  )
}

export default Search