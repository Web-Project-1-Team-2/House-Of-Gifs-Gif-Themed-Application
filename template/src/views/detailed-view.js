export const toDetailedView = (gif) => `
<div id="detailed">
    <div class="detailed-gif">
        <img src="${gif.data.images.downsized_large.url}">
    </div>
    <div class="detailed-info">
        <div class="user-avatar">
            <img src="${gif.data.user.avatar_url}">
        </div>
        <h1>${gif.data.title}</h1>
        <h3>${gif.data.username}</h3>
        <p>Upload Date: ${gif.data.import_datetime}</p>
    </div>
    
</div>
`;