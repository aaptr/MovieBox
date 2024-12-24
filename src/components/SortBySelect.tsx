import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SortBySelectProps {
  onChange: (value: string) => void
}

export function SortBySelect({ onChange }: SortBySelectProps) {
  const handleChange = (value: string) => {
    onChange(value)
  }

  return (
    <Select onValueChange={handleChange} defaultValue="popularity.desc">
      <SelectTrigger className="w-60 rounded-full bg-indigo-50 text-indigo-950">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-60 rounded-xl bg-gray-700 text-indigo-50">
        <SelectItem value="title.asc">Title asc</SelectItem>
        <SelectItem value="title.desc">Title desc</SelectItem>
        <SelectItem value="popularity.asc">Popularity asc</SelectItem>
        <SelectItem value="popularity.desc">Popularity desc</SelectItem>
        <SelectItem value="primary_release_date.asc">Release date asc</SelectItem>
        <SelectItem value="primary_release_date.desc">Release date desc</SelectItem>
        <SelectItem value="vote_average.asc">Rating asc</SelectItem>
        <SelectItem value="vote_average.desc">Rating desc</SelectItem>
        <SelectItem value="vote_count.asc">Votes asc</SelectItem>
        <SelectItem value="vote_count.desc">Votes desc</SelectItem>
      </SelectContent>
    </Select>
  )
}