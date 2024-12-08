import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { MovieDetails } from "@/components/MovieDetails"

export function Movie() {
  const dispatch = useDispatch()
  const { movieId } = useParams()

  return (
    <div>
      <MovieDetails />
    </div>
  )
}