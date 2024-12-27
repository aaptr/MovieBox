import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { IMovieImages, IMovieImage } from '@/types/MoviesTypes'
import { imagePath } from '@/config/api'
import { ImageWithPreview } from '@/components/ImageWithPreview'

interface ITImagesListProps {
  images: IMovieImages
}

export function ImagesList({ images }: ITImagesListProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie.images
  const imageURL = `${imagePath}/original`

  return (
    <div className="flex flex-col">
      <p className="text-xl font-bold pt-5">{local.posters}</p>
      <div className="p-5
              grid gap-x-5 gap-y-5 grid-cols-12">
        {images.posters && images.posters.length > 0 ? (
          images.posters.map((image: IMovieImage) => (
            <ImageWithPreview
              key={image.file_path}
              src={image.file_path}
              alt="alternative poster"
              previewTitle={local.altPoster} />
          ))
        ) : (
          <p className="pb-5 text-lg italic text-nowrap">{local.noImages}</p>
        )}
      </div>
      <p className="text-xl font-bold pt-5">{local.backdrops}</p>
      <div className="p-5
              grid gap-x-5 gap-y-5 grid-cols-8">
        {images.backdrops && images.backdrops.length > 0 ? (
          images.backdrops.map((image: IMovieImage) => (
            <ImageWithPreview
              key={image.file_path}
              src={`${imageURL}${image.file_path}`}
              alt="backdrop"
              previewTitle={local.altBackdrop} />
          ))
        ) : (
          <p className="pb-5 text-lg italic text-nowrap">{local.noImages}</p>
        )}
      </div>
    </div>
  )
}