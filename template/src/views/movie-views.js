import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => `
<!-- your template here, you can use toMovieDetailed(movie) -->
`;

export const toMovieSimple = (movie) => `
<!-- your template here -->
`;

const toMovieDetailed = (movie) => `
<!-- your template here -->
`;
