export function formatDate(dateString: string, locale: string): string {
  if (dateString === '') return ''

  const date = new Date(dateString)

  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}
