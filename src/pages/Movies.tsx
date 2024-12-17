import { Outlet, NavLink } from 'react-router-dom'

export function Movies() {
  return (
    <div className="px-5 py-10">
      <div className="flex justify-center">
        <div className="flex gap-20 mt-4 text-xl font-bold">
          <NavLink
            to="/movies/popular/1"
            className={({ isActive }) =>
              `${isActive ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            Popular
          </NavLink>
          <NavLink
            to="/movies/top_rated/1"
            className={({ isActive }) =>
              `${isActive ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/movies/upcoming/1"
            className={({ isActive }) =>
              `${isActive ? 'py-2 px-6 bg-indigo-400 rounded-full' : 'py-2 px-6'}`
            }
          >
            Upcoming
          </NavLink>
        </div>
      </div>
      <div className="pt-4">
        <Outlet />
      </div>
    </div>
  )
}