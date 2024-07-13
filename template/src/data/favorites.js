let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (movieId) => {
  if (favorites.length ===0) {
    favorites.push(movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } else {
    favorites.pop();
    favorites.push(movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

export const removeFavorite = (movieId) => {
  favorites = favorites.filter(id => id !== movieId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];
