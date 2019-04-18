const request = require('request');
const uinames = 'https://uinames.com/api/';


module.exports = {
    
    index(req, res, next) {
        res.render("baby/index");
    },
    new(req, res, next) {
        let gender = req.body.gender;
        let amount = parseInt(req.body.amount);
        let region = req.body.region;
        request({
            method: 'POST',
            url: `${uinames}?gender=${gender}&region=${region}&amount=${amount}`
        }, (error, response) => {
            
            // The returned data is in string format so convert to an object in order to loop over it:
            let names = JSON.parse(response.body);
            res.render('baby/show', {names: names})
        });
    }
}
