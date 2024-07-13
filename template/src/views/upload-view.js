/**
 * Generates  the upload view as an HTML string.
 * @returns {string} The HTML string for the Upload view.
 */
export const toUploadView = () => `
<div id="uploaded">
  <h1>Upload your Gif:</h1>
  <div class ="form">
    <form id="upload-form">
    <input type="file" id="upload-file">
    <button class="upload-button">Upload</button>
    </form>
  </div>
</div>
`;


