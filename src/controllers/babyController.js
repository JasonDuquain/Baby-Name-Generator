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
        let minlen = parseInt(req.body.minlen);
        //let maxlen = parseInt(req.body.maxlen);
        request({
            method: 'POST',
            url: `${uinames}?gender=${gender}&region=${region}&amount=${amount}&minlen=${minlen}`
        }, (error, response) => {
            
            // The returned data is in string format so convert to an object in order to loop over it:
            let names = JSON.parse(response.body);
            console.log(response.req.path)
            res.render('baby/show', {names: names})
        });
    }
}
