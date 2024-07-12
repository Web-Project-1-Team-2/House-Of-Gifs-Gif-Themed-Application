export const toProfileView = (uploadedGifs) => `
<div id="profile">
  <div class="user-info">
    <div>
      This is the first part
    </div>
    
    <div class="about-user">
      <h1>Your Profile:</h1>\
      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/118947646/original/9fb85fe56953295c5592270439d44b477c742ca5/create-a-pixel-art-charakter-for-you.png" alt="profile-picture">
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
      .join("\n") || `<p>Upload some gifs</p>`}
    </div>
  </div>
</div>
`;
