export const toTrendingView = (gifs) => `
<div id="trending"> 
    ${gifs.data.map(gif => `<div class="grid-item"><img src="${gif.images.downsized_medium.url}"></div>`).join('\n')}
</div>
`;
