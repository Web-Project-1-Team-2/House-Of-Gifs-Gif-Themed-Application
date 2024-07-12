export const toProfileView = (uploadedGifs) => `
<div id="profile">
  <h1>Your Profile</h1>
  <div class="user-info">
    <h3> Username </h3>
    <h4> Join Date: 10.07.2024 </h4>
  </div>
  <div class="uploaded-gifs">
    <h2> Your Gifs </h2>
    ${uploadedGifs
      .map((gif) =>
          `<div class="grid-item"><img class="gif" data-gif-id="${gif.data.id}" src="${gif.data.images.downsized_medium.url}"></div>`)
      .join("\n") || `<p>Upload some gifs</p>`}
  </div>
</div>
`;
