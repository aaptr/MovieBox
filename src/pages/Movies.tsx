import { Outlet, NavLink } from 'react-router-dom'

export function Movies() {
  return (
    <div className='p-5'>
      <div className="flex justify-start">
        <div className="flex gap-5 mt-4 text-xl font-bold">
          <NavLink
            to="/movies/popular/1"
            className={({ isActive }) =>
              `${isActive ? 'pb-2 px-4 border-b-4 border-indigo-500' : 'pb-2 px-4'}`
            }
          >
            Popular
          </NavLink>
          <NavLink
            to="/movies/top_rated/1"
            className={({ isActive }) =>
              `${isActive ? 'pb-2 px-4 border-b-4 border-indigo-500' : 'pb-2 px-4'}`
            }
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/movies/upcoming/1"
            className={({ isActive }) =>
              `${isActive ? 'pb-2 px-4 border-b-4 border-indigo-500' : 'pb-2 px-4'}`
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