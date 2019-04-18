require('dotenv').config();
const path = require('path');
const viewsFolder = path.join(__dirname, '..', 'views');


module.exports = {

    init(app, express) {
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());
        app.set('views', viewsFolder);
        app.set('view engine', 'ejs');
        app.use(express.static(path.join(__dirname, '..', 'assets')));
    }

};
