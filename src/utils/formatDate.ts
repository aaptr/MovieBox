export function formatDate(dateString: string, locale: string): string {
  const date = new Date(dateString)

  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}