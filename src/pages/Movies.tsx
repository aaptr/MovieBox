import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '@/redux/movies-slice'

export function Movies() {
  return (
    <>
      <div className="flex justify-start">
        <div className="flex gap-2 mb-4">
          <NavLink to="/movies/popular/1" className="btn">Popular</NavLink>
          <NavLink to="/movies/top_rated/1" className="btn">Top Rated</NavLink>
          <NavLink to="/movies/upcoming/1" className="btn">Upcoming</NavLink>
        </div>
        <div className="pt-4">
          <Outlet />
        </div>
      </div>
    </>
  )
}