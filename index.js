import { performSearch } from './api.js';
// Получение ссылки на форму поиска и галерею результатов
const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.js-gallery');

// Обработка события отправки формы поиска
searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращение отправки формы

  const searchQuery = this.searchQuery.value; // Получение текста запроса

  // Выполнение поиска с использованием функции performSearch
  performSearch(searchQuery, function (results) {
    // Очистка галереи перед добавлением новых результатов
    gallery.innerHTML = '';

    // Обработка каждого результата поиска
    results.forEach(function (result) {
      const videoUrl = result.url;
      const videoTitle = result.titleNoFormatting;

      // Создание элемента видео
      const videoElement = document.createElement('video');
      videoElement.src = videoUrl;
      videoElement.controls = true;
      videoElement.style.display = 'block';
      videoElement.style.marginBottom = '10px';

      // Создание элемента заголовка видео
      const titleElement = document.createElement('h3');
      titleElement.textContent = videoTitle;

      // Добавление видео и заголовка в галерею
      gallery.appendChild(videoElement);
      gallery.appendChild(titleElement);
    });
  });
});
