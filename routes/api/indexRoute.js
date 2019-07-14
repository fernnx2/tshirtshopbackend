module.exports = function(app){
    require('./usersRoute')(app);
    require('./departmentRoute')(app);
    require('./productRoute')(app);
}