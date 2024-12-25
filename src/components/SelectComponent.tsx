import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ISelectProps {
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}

export function SelectComponent({ value, options, onChange }: ISelectProps) {
  const handleChange = (value: string) => {
    onChange(value)
  }

  return (
    <Select onValueChange={handleChange} value={value}>
      <SelectTrigger className="w-80 rounded-full bg-indigo-50 text-indigo-950">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-80 rounded-xl bg-gray-700 text-indigo-50">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
