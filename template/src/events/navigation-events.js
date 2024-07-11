import { CONTAINER_SELECTOR, TRENDS } from '../common/constants.js';
import { toDetailedView} from '../views/detailed-view.js';
import { q, setActiveNav } from './helpers.js';
import { loadDetailedGif, loadTrending } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

    case TRENDS:
      setActiveNav(TRENDS);
      return renderTrending();

      // missing partial implementation

    /* if the app supports error logging, use default to log mapping errors */
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

const renderCategories = () => {
  // missing implementation
};

const renderFavorites = () => {
  // missing implementation
};

const renderAbout = () => {
  // missing implementation
};
