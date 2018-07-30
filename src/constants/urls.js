import Config from '../config';

const URL_BASE = Config.apiUrl;
const URL_PRODUCTS = URL_BASE + '/products';
const URL_CATEGORIES = URL_BASE + '/categories';
const URL_ADD_PRODUCT = URL_BASE + '/add/product';
const URL_ADD_CATEGORY = URL_BASE + '/add/category';
const URL_ADD_SUBCATEGORY = URL_BASE + '/add/subcategory';
const URL_UPDATE_PRODUCT = URL_BASE + '/update/product/';

export {
    URL_BASE,
    URL_PRODUCTS,
    URL_CATEGORIES,
    URL_ADD_PRODUCT,
    URL_ADD_CATEGORY,
    URL_ADD_SUBCATEGORY,
    URL_UPDATE_PRODUCT
}