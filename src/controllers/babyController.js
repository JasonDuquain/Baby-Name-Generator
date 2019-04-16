const request = require('request');
const uinames = 'https://uinames.com/api/';


module.exports = {
    
    index(req, res, next) {
        res.render("baby/index", {
            title: "Welcome to "
        });
    },
    new(req, res, next) {
        let gender = req.body.gender;
        let total = req.body.total
        request({
            method: 'POST',
            url: `${uinames}?gender=${gender}&amount=${total}`
        }, (error, response) => {
            console.log(response.body)
        })
    }
}
