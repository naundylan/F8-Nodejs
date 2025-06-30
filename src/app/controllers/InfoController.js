class InfoController {
    // GET /news
    index(req, res) {
        res.render('info');
    }
}

module.exports = new InfoController();
