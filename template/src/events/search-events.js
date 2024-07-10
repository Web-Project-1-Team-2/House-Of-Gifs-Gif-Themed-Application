import { loadSearchGifs } from "../requests/request-service.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";

export const renderSearchItems = async (searchTerm) => {
  const searchedGifs = await loadSearchGifs(searchTerm);
  q(CONTAINER_SELECTOR).innerHTML = toSearchView(searchedGifs, searchTerm);
};
