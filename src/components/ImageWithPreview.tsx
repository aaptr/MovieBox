import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function ImageWithPreview({ src, alt, previewTitle }:
  { src: string, alt: string, previewTitle: string }) {

  return (
    <Dialog>
      <DialogTrigger>
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl" />
      </DialogTrigger>
      <DialogContent className="w-screen bg-indigo-200 border-gray-600 dark:bg-gray-800 flex justify-center items-center">
        <DialogHeader>
          <DialogTitle>{previewTitle}</DialogTitle>
          <DialogDescription className="flex justify-center items-center h-full w-full">
            <img src={src} alt={alt} className="max-h-full max-w-full object-contain rounded-xl" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}