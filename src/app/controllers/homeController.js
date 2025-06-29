
class homeController {

    index(req, res) {
        res.render('home')
    }
}

module.exports = new homeController