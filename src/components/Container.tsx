import { IChildrenProps } from '@/types/commonTypes'

export function Container({ children }: IChildrenProps) {
  return (
    <div className="container-fluid d-flex flex-column flex-grow-1 w-75 mt-5">
      {children}
    </div>
  )
}
