export const toSearchView = (gifs, searchTerm) => `
<h1>Gifs found for "${searchTerm}":</h1><br>
<div id="trending">
    ${gifs.data.map(gif => `<div class="grid-item"><img src="${gif.images.downsized_medium.url}"></div>`).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
</div>
`;
