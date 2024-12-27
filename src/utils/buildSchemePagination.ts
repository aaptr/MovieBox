export const buildSchemePagination = (
  currentPage: number,
  pageCount: number
): Array<number | string> => {
  const prevPageNumber = currentPage - 1
  const nextPageNumber = currentPage + 1

  // Создаём схему с ключевыми страницами
  const scheme: Array<number | string> = [1, prevPageNumber, currentPage, nextPageNumber, pageCount]
  // Фильтруем значения, которые выходят за допустимый диапазон
  const filteredScheme = scheme.filter(
    (item): item is number => typeof item === 'number' && item > 0 && item <= pageCount)
  // Убираем дубликаты и сортируем результат
  const result: Array<number | string> = Array.from(new Set(filteredScheme)).sort((a, b) => a - b)
  if (result.length === 1) return result
  // Проверяем наличие пропусков и вставляем "..."
  if (
    typeof result[0] === 'number' &&
    typeof result[1] === 'number' &&
    result[1] !== result[0] + 1
  ) {
    result.splice(1, 0, '...')
  }
  const lastIndex = result.length - 1
  const secondLastIndex = result.length - 2
  if (
    typeof result[secondLastIndex] === 'number' &&
    typeof result[lastIndex] === 'number' &&
    result[lastIndex] !== result[secondLastIndex] + 1
  ) {
    result.splice(lastIndex, 0, '...')
  }
  return result
}






// export const buildSchemePagination = (
//   currentPage: number,
//   pageCount: number
// ): (number | string)[] => {
//   const prevPageNumber = currentPage - 1 // предполагаемая предыдущая страница, может получиться отрицательной
//   const nextPageNumber = currentPage + 1 // предполагаемая следующая страница, может получиться больше максимальной
//   const scheme = [1, prevPageNumber, currentPage, nextPageNumber, pageCount] // строим схему
//   const filteredScheme = scheme.filter(item => item > 0 && item <= pageCount) // чистим те, которые меньше 0 или больше pagesCounter
//   const set = new Set(filteredScheme) // удаляем дубли
//   const result = Array.from(set).sort((a, b) => a - b) // обратно приводим к массиву и сортируем

//   if (result.length === 1) return result

//   if (result[0] + 1 !== result[1]) result.splice(1, 0, '...') // если между первым и вторым элементом пропуск, вставляем ...
//   if (result.at(-2)! + 1 !== result.at(-1)!) result.splice(result.length - 1, 0, '...') // если между последним и предпоследним пропуск, вставляем ...

//   return result
// }
