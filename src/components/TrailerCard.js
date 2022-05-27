import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


export default function TrailerCard({Movies}) {
    const {id}=useParams()
    const movie = Movies.find(movie=> movie.id === Number(id))
  return (
    <>
    <div>
   <iframe width="956" height="538" src={movie.frameUrl} 
   title="YouTube video player" frameborder="0" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </>
  )
}
