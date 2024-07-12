import { CONTAINER_SELECTOR, TRENDS, ABOUT, UPLOAD, PROFILE } from '../common/constants.js';
import { toDetailedView} from '../views/detailed-view.js';
import { q, setActiveNav } from './helpers.js';
import { loadDetailedGif, loadGifsByID, loadTrending } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toAboutView } from '../views/about-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toProfileView } from '../views/profile-view.js';
import { getUploaded } from '../data/uploaded.js';


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
      return renderProfile() ;   

    default: return null;
  }

};

export const renderProfile = async () => {
  const uploadedGifs = getUploaded();
  const gifs = uploadedGifs.map(id => loadGifsByID(id));
  const readyGifs = await Promise.all(gifs);

  q(CONTAINER_SELECTOR).innerHTML = toProfileView(readyGifs);
};

export const renderDetailedView = async (gifId = null) => {
  const gif = await loadDetailedGif(gifId);

  q(CONTAINER_SELECTOR).innerHTML = toDetailedView(gif);
};

export const renderTrending = async () => {
  const gifs = await loadTrending();

  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifs);
};

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

const renderFavorites = () => {
  // missing implementation
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
