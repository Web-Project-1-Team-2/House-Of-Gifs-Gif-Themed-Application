import { renderFavoriteStatus } from "../events/favorites-events.js";
/**
 * Generates the Profile view as an HTML string.
 * @param {Object[]} uploadedGifs - The uploaded GIFs data.
 * @param {Object} favoriteGif - The favorite GID data.
 * @returns {string} The HTML string for the Profile view.
 */

export const toProfileView = (uploadedGifs, favoriteGif) => `
<div id="profile">
  <div class="user-info">
    <div id="profile-fav-gif">
      <div class="profile-gif-display">
      <h3>Favorite Gif:</h3>
      <img id="gif-image" class="gif" src="${favoriteGif.data.images.downsized_medium.url}" data-gif-id="${favoriteGif.data.id}">
      </div>
      <div>
      ${renderFavoriteStatus(favoriteGif.data.id)}
      </div>
    </div>
    
    <div class="about-user">
      <h1>Your Profile:</h1>
      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/118947646/original/9fb85fe56953295c5592270439d44b477c742ca5/create-a-pixel-art-charakter-for-you.png" alt="profile-picture">
      <div class="user-data">
      <h3> Username: GifLover2 </h3>
      <h4> Join Date: 10.07.2024 </h4>
      </div>
    </div>
  </div>
  <div class="uploaded-gifs">
    <div><h2> Your Gifs </h2></div>
    <hr>
    <div class="uploaded-gird">
    ${uploadedGifs
      .map((gif) =>
          `<div class="grid-item"><img class="gif" data-gif-id="${gif.data.id}" src="${gif.data.images.downsized_medium.url}"></div>`)
      .join("\n") || `<p>Upload some gifs</p>`}
    </div>
  </div>
</div>
`;
