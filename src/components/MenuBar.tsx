import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

export function MenuBar() {
  const sessionId = useSelector((state: RootState) => state.auth.sessionId)

  return (
    <div className="flex gap-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="py-2 text-xl font-bold hover:text-indigo-400">Movies</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className="whitespace-nowrap
              bg-gray-600 text-white">
              <NavigationMenuLink className="hover:text-indigo-400">
                <div className="p-2">
                  <NavLink to="/movies/popular/1">Popular movies</NavLink>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink className="hover:text-indigo-400">
                <div className="p-2">
                  <NavLink to="/movies/top_rated/1">Top rated movies</NavLink>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink className="hover:text-indigo-400">
                <div className="p-2">
                  <NavLink to="/movies/upcoming/1">Upcoming movies</NavLink>
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {sessionId && (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p className="py-2 text-xl font-bold hover:text-indigo-400">My Movies</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className="whitespace-nowrap
              bg-gray-600 text-white">
                <NavigationMenuLink className="hover:text-indigo-400">
                  <div className="p-2">
                    <NavLink to="/mymovies/favorite/1">My favorite movies</NavLink>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:text-indigo-400">
                  <div className="p-2">
                    <NavLink to="/mymovies/rated/1">My rated movies</NavLink>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:text-indigo-400">
                  <div className="p-2">
                    <NavLink to="/mymovies/watchlist/1">My Watchlist</NavLink>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

      <div className="p-2">
        <NavLink to="/advancedsearch/1"
          className="py-3 text-xl font-bold hover:text-indigo-400">
          Advanced search
        </NavLink>
      </div>

      <div className="p-2">
        <NavLink to="/about"
          className="py-3 text-xl font-bold hover:text-indigo-400">
          About Us
        </NavLink>
      </div>

    </div>
  )
}