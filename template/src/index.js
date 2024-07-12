import { TRENDS } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q} from './events/helpers.js';
import { loadPage, renderDetailedView} from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { uploadFile } from './requests/request-service.js';

document.addEventListener('DOMContentLoaded', () => {

  // global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // show Detailed View
    if (event.target.classList.contains('gif')) {
      renderDetailedView(event.target.getAttribute('data-gif-id'));
    }

    // show movie events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // toggle favorite event
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute('data-page'));
    }

    if (event.target.classList.contains('upload-button')) {
        const form = q('#upload-form');
        const file = q("#upload-file");
        form.addEventListener('submit', e => {
        e.preventDefault();
        uploadFile(file)
      })
    }

  });

  // search events
  q('#search-btn').addEventListener('click', event => {
    const input = q('#search-input');
    renderSearchItems(input.value);

    input.value = ''
  });

  loadPage(TRENDS);

});