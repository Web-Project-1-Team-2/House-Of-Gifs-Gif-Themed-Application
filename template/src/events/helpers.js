/**
 * Shorthand for document.querySelector
 * @param {string} selector - The CSS selector to match.
 * @returns {Element} The first Element within the document that matches the specified selector.
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector - The CSS selector to match.
 * @returns {NodeLists<Element>} A static NodeList of all elements that match the specified selector.
 */
export const qs = (selector) => document.querySelectorAll(selector);

/**
 * Sets the active navigation link based on the current page.
 * @param {string} page - The current page identifier. 
 */
export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
    .from(navs)
    .forEach(element => element
      .getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active')
    );
};

