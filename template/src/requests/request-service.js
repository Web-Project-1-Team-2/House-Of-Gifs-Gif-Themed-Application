import { LIMIT } from "../common/constants.js";


export const loadTrending = async () => {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=BoeObnq1qxBVH2k3HvivXxIhQZA12RgH&limit=${LIMIT}&rating=g`).then(data => data.json());
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  // missing implementation
};

export const loadDetailedGif = async(id) => {
  return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=BoeObnq1qxBVH2k3HvivXxIhQZA12RgH`).then(data => data.json())
};

export const loadSearchGifs = async (searchTerm = '') => {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=BoeObnq1qxBVH2k3HvivXxIhQZA12RgH&q=${searchTerm}&limit=${LIMIT}&rating=g`).then(data => data.json());
};

export const uploadFile = (input) => {

  const formData = new FormData();
  console.log(input.files);
  formData.append("file", input.files[0]);

  const endpoint = 'https://upload.giphy.com/v1/gifs?api_key=BoeObnq1qxBVH2k3HvivXxIhQZA12RgH'

  fetch(endpoint, {
    method: 'POST',
    body: formData
  }).then(data => data.json())
  .catch(e => console.log(e.message));
}