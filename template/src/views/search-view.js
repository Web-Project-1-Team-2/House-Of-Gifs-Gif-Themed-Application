import { toMovieSimple } from './movie-views.js';

export const toSearchView = (movies, searchTerm) => `
<div id="movies">
  <h1>Movies found for "${searchTerm}":</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
