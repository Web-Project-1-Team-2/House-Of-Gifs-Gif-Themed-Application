export const loadTrending = async () => {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=BoeObnq1qxBVH2k3HvivXxIhQZA12RgH&limit=35&rating=g`).then(data => data.json());
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  // missing implementation
};

export const loadSingleMovie = (id) => {
  // missing implementation
};

export const loadSearchMovies = (searchTerm = '') => {
  // missing implementation
};
