export const toDetailedView = (gif) => `
<div id="detailed">
    <div class="detailed-gif">
        <img src="${gif.data.images.downsized_large.url}">
    </div>
    <div class="detailed-info">
        <div class="user-avatar">
            <img src="${gif.data.user.avatar_url}">
            <h3>${gif.data.username}</h3>
        </div>
        <div class="gif-info">
            <h1>${gif.data.title}</h1>
            <p>Upload Date: ${gif.data.import_datetime}</p>
        </div>
    </div>
    
</div>
`;
