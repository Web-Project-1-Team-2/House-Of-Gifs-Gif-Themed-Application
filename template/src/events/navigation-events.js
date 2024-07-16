import { CONTAINER_SELECTOR, TRENDS, ABOUT, UPLOAD, PROFILE } from '../common/constants.js';
import { toDetailedView } from '../views/detailed-view.js';
import { q, setActiveNav } from './helpers.js';
import { loadDetailedGif, loadGifsByID, loadRandom, loadTrending } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toAboutView } from '../views/about-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toProfileView } from '../views/profile-view.js';
import { getUploaded } from '../data/uploaded.js';
import { getFavorites } from '../data/favorites.js';

/**
 * Loads and renders a specific page based on the provided page identifier.
 * @param {string} [page =''] = The page identifier to load.
 * @returns {void}
 */

export const loadPage = (page = '') => {

  switch (page) {

    case TRENDS:
      setActiveNav(TRENDS);
      return renderTrending();
    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();
    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();
    case PROFILE:
      setActiveNav(PROFILE);
      return renderProfile();

    default: return null;
  }

};
/**
 * Renders the profile view, Including uploaded and favorite GIFs.
 * @return{Promise<vod>}
 */
export const renderProfile = async () => {
  try {
    const uploadedGifs = getUploaded();
    const gifs = uploadedGifs.map(id => loadGifsByID(id));
    const readyGifs = await Promise.all(gifs);
    let isFavorite = false;

    const favoriteArray = getFavorites();
    let result;

    if (favoriteArray.length === 0) {
      result = await loadRandom();
    } else {
      const resultArr = favoriteArray.map(id => loadGifsByID(id));
      result = await Promise.all(resultArr);
      isFavorite = true;
    }

    if (result.length > 0) {
      result = result[0];
    }

    q(CONTAINER_SELECTOR).innerHTML = toProfileView(readyGifs, result, isFavorite);
  } catch (error) {
    alert(error);
  }
};

/**
 * Renders the detailed view of a GIF.
 * @param {sring} [gifId=null] - The ID of the GIF to render.
 * @return {Promise<void>}
 */
export const renderDetailedView = async (gifId = null) => {
  try {
    const gif = await loadDetailedGif(gifId);
    q(CONTAINER_SELECTOR).innerHTML = toDetailedView(gif);
  } catch (error) {
    alert(error);
  }
};

/**
 * Renders the trending GIFs view.
 * @return {Promise<void>}
 */
export const renderTrending = async () => {
  try {
    const gifs = await loadTrending();
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifs);
  } catch (error) {
    alert(error);
  }
};
/**
 * Renders the upload view.
 * @return {void}
 */
const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};
/**
 * Renders the about view
 * @return {void}
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
