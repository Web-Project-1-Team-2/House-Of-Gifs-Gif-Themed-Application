/* eslint-disable eqeqeq */
import { Constants } from '../common/constants.js';
import { addUploaded } from '../data/uploaded.js';

const constants = new Constants();

/**
 * Loads trending GIFs.
 * @returns {Promise<Object>} The Trending GIFs data.
 */

export const loadTrending = async () => {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${constants.API_KEY}&limit=${constants.LIMIT}&rating=g`).then(data => data.json());
};
/**
 * Loads a GIF by its ID
 * @param {string} id - ID of the GIF to load.
 * @return {Promise<Object>} The GIF data.
 */
export const loadGifsByID = async (id) => {
  return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${constants.API_KEY}`).then(data => data.json());
};
/**
 * Loads detailed information about a GIF.
 * @param {string} id - The ID of the GIF to load details for.
 * @return {Promise<Object>} The detailed GIF data.
 */
export const loadDetailedGif = async (id) => {
  return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${constants.API_KEY}`).then(data => data.json());
};
/**
 * Loads GIFs based on a search term
 * @param {string} [searchTerm=''] - The term of the search for GIFs
 * @return {Promise<Object>} The search results data.
 */
export const loadSearchGifs = async (searchTerm = '') => {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${constants.API_KEY}&q=${searchTerm}&limit=${constants.LIMIT}&rating=g`).then(data => data.json());
};
/**
 * Loads a random GIF.
 * @return {Promise<Object>} The random GIF data.
 */
export const loadRandom = async () => {
  return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${constants.API_KEY}`).then(data => data.json());
};
/**
 * Uploads a file to Giphy.
 * @param {HTMLInputElement} input - The file input element.
 * @return{Promise<void>}
 */
export const uploadFile = async (input) => {

  const formData = new FormData();
  formData.append('file', input.files[0]);

  const endpoint = `https://upload.giphy.com/v1/gifs?api_key=${constants.API_KEY}`;

  try {
    const uploadedGif = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    const usableGif = await uploadedGif.json();
    const uploadedGifId = usableGif.data.id;
    console.log(uploadedGifId);
    addUploaded(uploadedGifId);
    if (usableGif.meta.status == '200') {
      alert('File Successfully Uploaded');
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }

};
