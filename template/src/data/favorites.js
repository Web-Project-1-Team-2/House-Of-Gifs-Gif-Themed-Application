let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

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

export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];
