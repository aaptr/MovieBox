export const buildSchemePagination = (
  currentPage: number,
  pageCount: number
): (number | string)[] => {
  const prevPageNumber = currentPage - 1 // предполагаемая предыдущая страница, может получиться отрицательной
  const nextPageNumber = currentPage + 1 // предполагаемая следующая страница, может получиться больше максимальной
  const scheme = [1, prevPageNumber, currentPage, nextPageNumber, pageCount] // строим схему
  const filteredScheme = scheme.filter(item => item > 0 && item <= pageCount) // чистим те, которые меньше 0 или больше pagesCounter
  const set = new Set(filteredScheme) // удаляем дубли
  const result = Array.from(set).sort((a, b) => a - b) // обратно приводим к массиву и сортируем

  if (result.length === 1) return result

  if (result[0] + 1 !== result[1]) result.splice(1, 0, '...') // если между первым и вторым элементом пропуск, вставляем ...
  if (result.at(-2)! + 1 !== result.at(-1)!) result.splice(result.length - 1, 0, '...') // если между последним и предпоследним пропуск, вставляем ...

  return result
}
