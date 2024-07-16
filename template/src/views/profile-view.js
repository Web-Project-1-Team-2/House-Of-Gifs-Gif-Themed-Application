/* eslint-disable max-len */
import { renderFavoriteStatus } from '../events/favorites-events.js';
/**
 * Generates the Profile view as an HTML string.
 * @param {Object[]} uploadedGifs - The uploaded GIFs data.
 * @param {Object} favoriteGif - The favorite GIF data.
 * @returns {string} The HTML string for the Profile view.
 */

export const toProfileView = (uploadedGifs, favoriteGif, favorite) => `
<div id="profile">
  <div class="user-info">
    <div id="profile-fav-gif">
      <div class="profile-gif-display">
      <h3>${favorite ? `Favorite Gif` : `No Favorite Selected`}:</h3>
      <img id="gif-image" class="gif" src="${favoriteGif.data.images.downsized_medium.url}" data-gif-id="${favoriteGif.data.id}">
      </div>
      <div>
      ${renderFavoriteStatus(favoriteGif.data.id)}
      </div>
    </div>
    
    <div class="about-user">
      <h1>Your Profile:</h1>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d820859-09b9-4296-9ea3-046537db2c6a/dgaol9h-7f023de4-c94f-4599-8545-595c0a158eef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZkODIwODU5LTA5YjktNDI5Ni05ZWEzLTA0NjUzN2RiMmM2YVwvZGdhb2w5aC03ZjAyM2RlNC1jOTRmLTQ1OTktODU0NS01OTVjMGExNThlZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gFt_cJkma8RaZe1yzrbv9J1xv5Ej-GcadF5NEmrgYtU" alt="profile-picture">
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
      .join('\n') || `<p>Upload some gifs</p>`}
    </div>
  </div>
</div>
`;
