// current date
export function getCurrentDate(): string {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

// get date X months earlier/later
export function adjustDateByMonthsFromStart(dateString: string, months: number): string {
  const [year, month] = dateString.split('-').map(Number)

  const newDate = new Date(year, month - 1 + months, 1)
  const newYear = newDate.getFullYear()
  const newMonth = String(newDate.getMonth() + 1).padStart(2, '0')

  return `${newYear}-${newMonth}-01`
}
