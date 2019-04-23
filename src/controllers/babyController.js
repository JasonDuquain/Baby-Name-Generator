const request = require('request');
const uinames = 'https://uinames.com/api/';

module.exports = {
    index(req, res, next) {
        request({
            url: 'https://raw.githubusercontent.com/thm/uinames/master/uinames.com/api/names.json',
            json: true
        }, (error, response) => {
             let namesArray = response.body;
             res.render("baby/index", {
                 namesArray: namesArray
            });
        });
        
    },
    new(req, res, next) {
        let gender = req.body.gender;
        let amount = parseInt(req.body.amount);
        let region = req.body.region;
        let minlen = parseInt(req.body.minlen);
        request({
            method: 'POST',
            url: `${uinames}?gender=${gender}&region=${region}&amount=${amount}${(req.body.ext === 'yes' ? '&ext' : '')}`
        }, (error, response) => {
            // The returned data is in stg format so convert to an obj in order to loop over it:
            
            let names = JSON.parse(response.body);
            res.render('baby/show', {
                names: names
            });
        });
    }
}
