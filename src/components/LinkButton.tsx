import { NavLink } from 'react-router-dom'
interface IButtonProps {
  link: string,
  text: string
}

export function LinkButton({ link, text }: IButtonProps) {
  return (
    <NavLink
      to={link}>
      <p className="w-80 text-nowrap px-5 py-2 rounded-full text-center
          text-2xl font-bold bg-indigo-200 dark:bg-indigo-400 text-gray-800
          transform transition-transform duration-300 hover:scale-105">
        {text}
      </p>
    </NavLink>
  )
}