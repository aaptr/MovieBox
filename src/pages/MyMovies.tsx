import { Outlet, NavLink } from 'react-router-dom'

export function MyMovies() {
  return (
    <div className='p-5'>
      <div className="flex justify-start">
        <div className="flex gap-5 mt-4 text-xl font-bold">
          <NavLink
            to="/mymovies/favorite/1"
            className={({ isActive }) =>
              `${isActive ? 'pb-2 px-4 border-b-4 border-indigo-500' : 'pb-2 px-4'}`
            }
          >
            Favorite
          </NavLink>
          <NavLink
            to="/mymovies/rated/1"
            className={({ isActive }) =>
              `${isActive ? 'pb-2 px-4 border-b-4 border-indigo-500' : 'pb-2 px-4'}`
            }
          >
            Rated
          </NavLink>
          <NavLink
            to="/mymovies/watchlist/1"
            className={({ isActive }) =>
              `${isActive ? 'pb-2 px-4 border-b-4 border-indigo-500' : 'pb-2 px-4'}`
            }
          >
            Watchlist
          </NavLink>
        </div>
      </div>
      <div className="pt-4">
        <Outlet />
      </div>
    </div>
  )
}