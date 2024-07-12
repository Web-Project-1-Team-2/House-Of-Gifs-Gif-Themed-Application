import { CONTAINER_SELECTOR, TRENDS, ABOUT, UPLOAD } from '../common/constants.js';
import { toDetailedView} from '../views/detailed-view.js';
import { q, setActiveNav } from './helpers.js';
import { loadDetailedGif, loadTrending } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toAboutView } from '../views/about-view.js';
import { toUploadView } from '../views/upload-view.js/index.js';


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

      
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {
  const movie = movies.find(movie=> movie.id===id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
};

export const renderDetailedView = async (gifId = null) => {
  const gif = await loadDetailedGif(gifId);

  q(CONTAINER_SELECTOR).innerHTML = toDetailedView(gif);
};

// private functions

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
