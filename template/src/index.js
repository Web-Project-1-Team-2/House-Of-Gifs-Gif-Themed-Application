import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderCategory, renderMovieDetails } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // show category events
    if (event.target.classList.contains(/* your button class here */)) {
      renderCategory(+event.target.getAttribute(/* your correct data attribute here */));
    }

    // show movie events
    if (event.target.classList.contains(/* your button class here */)) {
      renderMovieDetails(+event.target.getAttribute(/* your correct data attribute here */));
    }

    // toggle favorite event
    if (event.target.classList.contains(/* favorites item class here */)) {
      toggleFavoriteStatus(+event.target.getAttribute(/* your correct data attribute here */));
    }

  });

  // search events
  q('input#search').addEventListener('input', event => {
    renderSearchItems(event.target.value);
  });

  loadPage(HOME);

});