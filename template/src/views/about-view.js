/**
 * Generates the About view as an HTML string.
 * @return {string} The About view HTML code.
 */
export const toAboutView = () => `
<div id="about">
  <div class="about-content">
    <div>
    <h1>About the app</h1>
    </div>
    <h2>Members of the house:</h2>
    <ul>
      <li>Ivaylo Georgiev</li>
      <li>Plamen Ganchev</li>
      <li>Daniel Stoyanov</li>
    </ul>
    <h2>Date: July 2024</h2>
  </div>
</div>
`;
