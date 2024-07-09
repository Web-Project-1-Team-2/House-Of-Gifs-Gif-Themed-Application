import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

export const toggleFavoriteStatus = (movieId) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-movie-id="${movieId}"]`);
  
  if (favorites.includes(movieId)) {
    removeFavorite(movieId);
    heartSpan.classList.remove('active')
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(movieId);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};

export const renderFavoriteStatus = (movieId) => {
  const favorites = getFavorites();

  return favorites.includes(movieId)
    ? `<span class="favorite active" data-movie-id="${movieId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-movie-id="${movieId}">${EMPTY_HEART}</span>`;
};
