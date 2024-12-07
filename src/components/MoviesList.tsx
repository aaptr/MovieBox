import { Card } from "@/components/Card"
import { IMovieListItem } from "@/types/MoviesTypes"

export function MoviesList(props: IMovieListItem[]) {

  const renderCard = () => {
    return props.map((movie) => (
      <Card key={movie.id} {...movie} />
    ))
  }

  return (
    <div className="mt-5 mb-2">
      <div className="d-flex flex-wrap gap-3">
        {renderCard()}
      </div>
    </div>
  )
}