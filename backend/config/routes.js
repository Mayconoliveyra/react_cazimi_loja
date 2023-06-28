module.exports = app => {

    app.route("/")
       .get(app.api.productInitial.getProduct) 
}