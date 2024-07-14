/**
 * A class representing application constants.
 */
export class Constants {
    #LIMIT = 35;
    #API_KEY = 'UsqNJhspAhQU1sNdZ4nUmmQbj0hfcDLU';

    // 1st API: BoeObnq1qxBVH2k3HvivXxIhQZA12RgH
    // 2nd API: iRc8ZKeJlIPBCr51asOvxBGMW1YTLAoD
    // 3nd API: UsqNJhspAhQU1sNdZ4nUmmQbj0hfcDLU

    /**
     * Gets the limit constant.
     * @return{number} The limit constant.
     */
    get LIMIT() {
        return this.#LIMIT;
    }

    /**
     * Gets the API key
     * @return {string} The API key.
     */
    get API_KEY() {
        return this.#API_KEY;
    }
}
/**
 * @constant {string}
 * @default
 */
export const TRENDS = 'trends';

/**
 * @constant {string}
 * @default
 */
export const UPLOAD = 'upload';

/**
 * @constant {string}
 * @default
 */
export const FAVORITES = 'favorites';

/**
 * @constant {string}
 * @default
 */
export const ABOUT = 'about';

/**
 * @constant {string}
 * @default
 */
export const PROFILE = 'profile';

/**
 * The CSS selector for the container element.
 * @constant {string}
 * @default
 */
export const CONTAINER_SELECTOR = '#container';

/**
 * Full heart symbol.
 * @constant {string}
 * @default
 */
export const FULL_HEART = '❤';

/**
 * Empty heart symbol.
 * @constant {string}
 * @default
 */
export const EMPTY_HEART = '♡';
