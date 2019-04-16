module.exports = {
    
  init(app){
    const babyRoutes = require("../routes/baby");
    app.use(babyRoutes);
  }
    
}