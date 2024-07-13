export class Constants {
    #LIMIT = 35;
    #API_KEY = 'UsqNJhspAhQU1sNdZ4nUmmQbj0hfcDLU'

    //1st API: BoeObnq1qxBVH2k3HvivXxIhQZA12RgH
    //2nd API: iRc8ZKeJlIPBCr51asOvxBGMW1YTLAoD
    //3nd API: UsqNJhspAhQU1sNdZ4nUmmQbj0hfcDLU

    get LIMIT (){
        return this.#LIMIT;
    }

    get API_KEY (){
        return this.#API_KEY;
    }
}

export const TRENDS = 'trends';

export const UPLOAD = 'upload';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const PROFILE = 'profile';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';