/**
 * @file Manages favorite GIFs using localStorage.
 */

/**
 * An array of favorite GIF IDs.
 * @type {string[]}
 */
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF ID to the favorites list. If the list is empty, it adds the ID.
 * If the list is not empty, it replaces the existing ID with the new one.
 * @param {string} gifID - The ID of the GIF to add to favorites.
 */
export const addFavorite = (gifID) => {
  if (favorites.length === 0) {
    favorites.push(gifID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } else {
    favorites.pop();
    favorites.push(gifID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};
/**
 * Removes a GIF ID from favorites list.
 * @param {string} gifId - The ID of the GIF to remove from favorites.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Gets the list of favorite GIF IDs
 * @return {string[]} The list of favorite GIF IDs.
 */
export const getFavorites = () => [...favorites];
