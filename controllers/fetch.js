//Scraper controller
var db = require("../models");
var scrape = require("../scripts/scrape");

//export Scraper module
module.exports = {
    scrapeHeadlines: function(req, res) {
        //New York Times Scraper funciton from scrape
        return scrape()
        .then(function(articles) {
            return db.Headline.create(articles);
        })
        .then(function(dbHeadline) {
            if (dbHeadline.length === 0) {
                res.json({
                    message: "Sorry, no current articles."
                });
            }
            else {
                res.json({
                    message: "Added " + dbHeadline.length + " new articles!"
                });
            }
        })
        .catch(function(err) {
            res.json({
                message: "Scrape is now complete!"
            });
        });
    }
};