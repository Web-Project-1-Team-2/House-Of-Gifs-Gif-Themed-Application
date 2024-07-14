import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

/**
 * Toggles the favorites status of a GIF.
 * @param {string} id - The ID of the GIF to toggle.
 */
export const toggleFavoriteStatus = (id) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[detailed-gif-id="${id}"]`);

  if (favorites.includes(id)) {
    removeFavorite(id);
    heartSpan.classList.remove('active');
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(id);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};

/**
 * Renders the favorite status of a GIF.
 * @param {string} id  - The ID of the GIF to render.
 * @return {string} The HTML string representing the favorite status.
 */
export const renderFavoriteStatus = (id) => {
  const favorites = getFavorites();

  return favorites.includes(id) ?
    `<span class="favorite active" detailed-gif-id="${id}">${FULL_HEART}</span>` :
    `<span class="favorite" detailed-gif-id="${id}">${EMPTY_HEART}</span>`;
};
