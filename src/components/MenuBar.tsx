import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'

import { localisation } from '@/config/localisation'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export function MenuBar() {
  const sessionId = useSelector((state: RootState) => state.auth.sessionId)
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].header.menubar

  return (
    <div className="flex gap-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="py-2 text-xl font-bold hover:text-indigo-400">{local.movies.groupname}</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className="whitespace-nowrap
              bg-gray-600 text-white">
              <div className="hover:text-indigo-400">
                <div className="p-2">
                  <NavLink to="/movies/popular/1">{local.movies.popular}</NavLink>
                </div>
              </div>
              <div className="hover:text-indigo-400">
                <div className="p-2">
                  <NavLink to="/movies/top_rated/1">{local.movies.top_rated}</NavLink>
                </div>
              </div>
              <div className="hover:text-indigo-400">
                <div className="p-2">
                  <NavLink to="/movies/upcoming/1">{local.movies.upcoming}</NavLink>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {sessionId && (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p className="py-2 text-xl font-bold hover:text-indigo-400">{local.mymovies.groupname}</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className="whitespace-nowrap
              bg-gray-600 text-white">
                <div className="hover:text-indigo-400">
                  <div className="p-2">
                    <NavLink to="/mymovies/favorite/1">{local.mymovies.favorite}</NavLink>
                  </div>
                </div>
                <div className="hover:text-indigo-400">
                  <div className="p-2">
                    <NavLink to="/mymovies/rated/1">{local.mymovies.rated}</NavLink>
                  </div>
                </div>
                <div className="hover:text-indigo-400">
                  <div className="p-2">
                    <NavLink to="/mymovies/watchlist/1">{local.mymovies.watchlist}</NavLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

      <div className="p-2">
        <NavLink to="/about"
          className="py-3 text-xl font-bold hover:text-indigo-400">
          {local.about}
        </NavLink>
      </div>

    </div>
  )
}