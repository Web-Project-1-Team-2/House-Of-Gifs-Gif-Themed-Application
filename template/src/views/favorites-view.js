import { toMovieSimple } from './movie-views.js';

export const toFavoritesView = (movies) => `
<div id="movies">
  <h1>Favorite movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
