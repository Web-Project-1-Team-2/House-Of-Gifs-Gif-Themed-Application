import { renderFavoriteStatus } from "../events/favorites-events.js";

export const toDetailedView = (gif) => `
<div id="detailed">
    <div class="detailed-gif">
        <img src="${gif.data.images.downsized_large.url}">
        <div>
            ${renderFavoriteStatus()}
        </div>
    </div>
    <div class="detailed-info">
        <div class="user-avatar">
            <img src="${gif.data.user !== undefined ? gif.data.user.avatar_url : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`}">
            <h3>${gif.data.username}</h3>
        </div>
        <div class="gif-info">
            <h1>${gif.data.title}</h1>
            <p>Upload Date: ${gif.data.import_datetime}</p>
        </div>
    </div>
    
</div>
`;
