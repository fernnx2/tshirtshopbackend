module.exports = function(app){
    app.get('/user',(req,res)=>{
        res.json("Dashboard");
    });
}
