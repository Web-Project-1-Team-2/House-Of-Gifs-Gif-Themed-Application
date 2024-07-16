/**
 * Generates the Search view as an HTML string.
 * @param {Object} gifs - The GIFs data returned from the search.
 * @param {string} searchTerm - The search term used to find the GIFs.
 * @return {string} The HTML string or the search view.
 */
export const toSearchView = (gifs, searchTerm) => `
<div class="search-heading"><h1>Gifs found for: ${searchTerm}</h1></div><br>
${gifs.data.length > 0 ? `
    <div id="search-content">
        ${gifs.data
            .map((gif) => `
            <div class="search-item">
                <img class="gif" data-gif-id="${gif.id}" src="${gif.images.downsized_medium.url}">
            </div>`).join('\n')}
    </div>` : `
    <div id="search-empty">
        <p>No results!</p>
    </div> `}
`;


{/* <div id="search-content">
    ${gifs.data
        .map((gif) => `
    <div class="search-item">
        <img class="gif" data-gif-id="${gif.id}" src="${gif.images.downsized_medium.url}">
    </div>`)
        .join("\n") || "<div></div><p>Search for something!</p>"
    }
</div> */}
