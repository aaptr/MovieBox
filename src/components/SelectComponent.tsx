import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface ISelectProps {
  value: string
  options: { value: string, label: string }[]
  onChange: (value: string) => void
}

export function SelectComponent({ value, options, onChange }: ISelectProps) {
  const handleChange = (value: string) => {
    onChange(value)
  }

  return (
    <Select onValueChange={handleChange} value={value}>
      <SelectTrigger
        className="w-80 rounded-full bg-indigo-100 text-indigo-950 border-indigo-200
        dark:bg-gray-700 dark:text-indigo-200">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-80 rounded-3xl bg-indigo-100 text-indigo-950 border-indigo-200
        dark:bg-gray-700 dark:text-indigo-200">
        {options.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
