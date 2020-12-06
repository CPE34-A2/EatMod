const knex = require('../database/knex');
const Shop = require('../models/shop')
const menu = require('../models/menu');
const apiController = require('../controllers/api');

exports.getIndex = async (req, res) => {
    let shops = await Shop.getShops();
    let menus = await menu.getAllMenuImages();
    let randomMenus = await menu.findLastId();

    res.render(
        'index', {
           recommendMenus: [],
           recommendShops: shops
        }
    );
};

exports.getShop = async (req, res) => {
    const { id } = req.params;
    let shop = await Shop.getShop(id);
    let reviews = await Shop.getReviews(id);
    let averageSum = 0;
    let ratingSum = 0;
    for(review of reviews){
        ratingSum = ratingSum + review.rating;
    }
    averageSum = ratingSum/reviews.length;
    res.render('shop', {
        name: shop.name,
        type: shop.type,
        location: shop.location,
        rating: averageSum,
        allRatings: ratingSum,
        reviews: reviews.length,
        openTime: shop.open,
        closeTime: shop.close
    });
};

exports.getShops = (req, res) => {
    res.render('shops', {});
};

exports.getLogin = (req, res) => {
    res.render('login', {});
};