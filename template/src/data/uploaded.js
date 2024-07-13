/**
 * @file Manages uploaded GIFs using localStorage.
 */
/**
 * An array of uploaded GIF IDs.
 * @type {string[]}
 */

let uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF ID to the uploaded list if it does not already exist.
 * @param {string} gifId - The ID of the GIF to add to the uploaded list. 
 * @returns 
 */
export const addUploaded = (gifId) => {
  if (uploaded.find(id => id === gifId)) {
    return;
  }

  uploaded.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * Removes a GIF ID from the uploaded list.
 * @param {string} gifId - The ID of the GIF to remove from the uploaded list. 
 */
export const removeUploaded = (gifId) => {
  uploaded = uploaded.filter(id => id !== gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};
/**
 * Gets the list of uploaded GIF IDs.
 * @returns {string} list of uploaded GIF IDs.
 */
export const getUploaded = () => [...uploaded];