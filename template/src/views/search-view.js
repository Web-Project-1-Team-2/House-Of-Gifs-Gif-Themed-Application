export const toSearchView = (gifs, searchTerm) => `
<div class="search-heading"><h1>Gifs found for: ${searchTerm}</h1></div><br>
<div id="search-content">
    ${gifs.data
        .map(
          (gif) => `
    <div class="search-item">
        <img class="gif" data-gif-id="${gif.id}" src="${gif.images.downsized_medium.url}">
    </div>`
        )
        .join("\n") || "<p>Search for something</p>"
    }
</div>
`;
