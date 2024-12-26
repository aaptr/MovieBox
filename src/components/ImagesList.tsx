import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { localisation } from '@/config/localisation'
import { IMovieImages, IMovieImage } from '@/types/MoviesTypes'
import { imagePath } from '@/config/api'
import { ImageWithPreview } from '@/components/ImageWithPreview'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ITImagesListProps {
  images: IMovieImages
}

export function ImagesList({ images }: ITImagesListProps) {
  const lang = useSelector((state: RootState) => state.lang.value)
  const local = localisation[lang].movie.images
  const imageURL = `${imagePath}/original`

  return (
    <div className="mx-5 my-3 px-10 rounded-3xl
      border bg-indigo-100 dark:bg-gray-900
      border-gray-200 dark:border-gray-700">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-bold">{local.title}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <p className="text-xl font-bold pt-5">{local.posters}</p>
              <div className="p-5
              grid gap-x-5 gap-y-5 grid-cols-12">
                {images.posters && images.posters.length > 0 ? (
                  images.posters.map((image: IMovieImage) => (
                    <ImageWithPreview
                      key={image.file_path}
                      src={`${imageURL}${image.file_path}`}
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}