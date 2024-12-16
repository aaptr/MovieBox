import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'
import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover'

import { fetchAddRating } from '@/redux/user-slice'
import { moviesListsEndpoint } from '@/config/api'

interface UserRatingLabelProps {
  movieId: number
}

export function UserRating({ movieId }: UserRatingLabelProps) {
  const dispatch = useDispatch<AppDispatch>()
  const userID = useSelector((state: RootState) => state.user.accountDetails?.id)
  const { sessionId } = useSelector((state: RootState) => state.auth)
  const userRating = useSelector((state: RootState) => state.user.movieAccountState?.rated?.value)

  const [ratingValue, setRatingValue] = useState(userRating ? userRating : 0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setRatingValue(userRating || 0)
  }, [userRating])

  const handleSubmitRating = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const url = `${moviesListsEndpoint}${movieId}/rating?session_id=${sessionId?.session_id}`
    const body = { value: ratingValue }

    dispatch(fetchAddRating({ url, body }))
    setIsOpen(false)
  }

  return (
    <div className="flex items-center justify-center bg-indigo-100 text-indigo-800 px-5 rounded-full">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <span>
            {userRating ? `Your rating: ${userRating}` : "What's your rating?"}
          </span>
        </PopoverTrigger>
        <PopoverContent>
          <form className="flex flex-col gap-2 w-60 items-center"
            onSubmit={handleSubmitRating}>
            <span className="font-bold">Your rating:</span>
            <span className="text-indigo-800 text-2xl font-extrabold ps-2">{ratingValue}</span>
            <input
              id="rating"
              type="range"
              min="0"
              max="10"
              value={ratingValue}
              onChange={(e) => setRatingValue(Number(e.target.value))}
              className="w-full py-2"
            />
            <button type="submit" className="bg-indigo-400 rounded-full p-2 w-full mt-4">Submit</button>
          </form>
        </PopoverContent>
      </Popover>

    </div >
  )
}
