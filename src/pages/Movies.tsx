import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'

export function Movies() {
  const location = useLocation()
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movies

  return (
    <div className="px-5 py-10">
      <div className="flex justify-center">
        <div className="flex gap-20 mt-4 text-xl font-bold">
          <NavLink
            to="/movies/now_playing/1"
            className={() =>
              `${location.pathname.startsWith('/movies/now_playing') ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            {local.now_playingtab}
          </NavLink>
          <NavLink
            to="/movies/popular/1"
            className={() =>
              `${location.pathname.startsWith('/movies/popular') ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            {local.populartab}
          </NavLink>
          <NavLink
            to="/movies/top_rated/1"
            className={() =>
              `${location.pathname.startsWith('/movies/top_rated') ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            {local.top_ratedtab}
          </NavLink>
          <NavLink
            to="/movies/upcoming/1"
            className={() =>
              `${location.pathname.startsWith('/movies/upcoming') ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            {local.upcomingtab}
          </NavLink>
        </div>
      </div>
      <div className="pt-4">
        <Outlet />
      </div>
    </div>
  )
}