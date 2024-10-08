import { loadSearchGifs } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
/**
 * Renders the search result for a given search term.
 * @param {string} searchTerm - The term to search for GIFs.
 * @return {Promise<void>}
 */
export const renderSearchItems = async (searchTerm) => {
  try {
    const searchedGifs = await loadSearchGifs(searchTerm);
    q(CONTAINER_SELECTOR).innerHTML = toSearchView(searchedGifs, searchTerm);
  } catch (error) {
    alert(error.message);
  }
};
