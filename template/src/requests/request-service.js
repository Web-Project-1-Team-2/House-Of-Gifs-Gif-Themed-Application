import { Constants } from "../common/constants.js";
import { addUploaded } from "../data/uploaded.js";

const constants = new Constants()

export const loadTrending = async () => {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${constants.API_KEY}&limit=${constants.LIMIT}&rating=g`).then(data => data.json());
};

export const loadGifsByID = async (id) => {
  return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${constants.API_KEY}`).then(data => data.json())
};

export const loadDetailedGif = async (id) => {
  return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${constants.API_KEY}`).then(data => data.json())
};

export const loadSearchGifs = async (searchTerm = '') => {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${constants.API_KEY}&q=${searchTerm}&limit=${constants.LIMIT}&rating=g`).then(data => data.json());
};

export const uploadFile = async (input) => {

  const formData = new FormData();
  formData.append("file", input.files[0]);

  const endpoint = `https://upload.giphy.com/v1/gifs?api_key=${constants.API_KEY}`;

  try {
    const uploadedGif = await fetch(endpoint, {
      method: 'POST',
      body: formData
    })
  
    const usableGif = await uploadedGif.json();
    const uploadedGifId = usableGif.data.id;
    console.log(uploadedGifId);
    addUploaded(uploadedGifId);
  } catch (error) {
    console.log(error.message);
  }
  
}
