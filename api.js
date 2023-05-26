// Функция для выполнения поиска
function performSearch(query, callback) {
  const element = google.search.cse.element.getElement('searchresults-only'); // ID элемента PSE на странице
  google.search.cse.element.getElement(
    {
      element: element,
      tag: 'searchresults-only',
      attributes: {
        defaultToImageSearch: 'true',
        enableImageSearch: 'true',
        enableOrderBy: 'true',
        orderByOptions: 'views'
      }
    },
    function (result) {
      result.execute(query); // Выполнение поиска с указанным запросом
      result.setSearchCompleteCallback(null, function (result) {
        callback(result.results);
      });
    }
  );
}

// Экспорт функции performSearch
export { performSearch };
