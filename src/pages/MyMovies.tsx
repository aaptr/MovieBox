import { Outlet, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'

export function MyMovies() {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].mymovies

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
            {local.favoritetab}
          </NavLink>
          <NavLink
            to="/mymovies/rated/1"
            className={({ isActive }) =>
              `${isActive ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            {local.ratedtab}
          </NavLink>
          <NavLink
            to="/mymovies/watchlist/1"
            className={({ isActive }) =>
              `${isActive ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            {local.watchlisttab}
          </NavLink>
        </div>
      </div>
      <div className="pt-4">
        <Outlet />
      </div>
    </div>
  )
}