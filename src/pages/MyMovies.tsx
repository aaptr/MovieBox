import { Outlet, NavLink } from 'react-router-dom'

export function MyMovies() {
  return (
    <div className="px-5 py-10">
      <div className="flex justify-center">
        <div className="flex gap-20 mt-4 text-xl font-bold">
          <NavLink
            to="/mymovies/favorite/1"
            className={({ isActive }) =>
              `${isActive ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            Favorite
          </NavLink>
          <NavLink
            to="/mymovies/rated/1"
            className={({ isActive }) =>
              `${isActive ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            Rated
          </NavLink>
          <NavLink
            to="/mymovies/watchlist/1"
            className={({ isActive }) =>
              `${isActive ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
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