const { tabla } = require('../controllers/tabla');
module.exports = (router) => {
    router.get('/tabla/:page/:rows', tabla)

    router.get('/tabla', tabla)
}