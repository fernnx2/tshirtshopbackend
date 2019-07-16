module.exports = function(app){
    require('./departmentRoute')(app);
    require('./productRoute')(app);
    require('./categoryRoute')(app);
    require('./attributeRoute')(app);
    require('./attributeValueRoute')(app);
}