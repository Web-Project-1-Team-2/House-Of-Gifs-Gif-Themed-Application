export const toTrendingView = (gifs) => `
<div id="trending"> 
    ${gifs.data
      .map(
        (gif) =>
          `<div class="grid-item"><img class="gif" data-gif-id="${gif.id}" src="${gif.images.downsized_medium.url}"></div>`
      )
      .join("\n")}
</div>
`;
