import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function ImageWithPreview({ src, alt, previewTitle }: { src: string, alt: string, previewTitle: string }) {
  return (
    <Dialog>
      <DialogTrigger>
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-2xl" />
      </DialogTrigger>
      <DialogContent className="bg-indigo-200 border-gray-600 dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle>{previewTitle}</DialogTitle>
          <DialogDescription>
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}