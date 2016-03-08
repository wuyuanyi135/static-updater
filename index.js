var feathers = require("feathers");
var md5File = require('md5-file');
var app = feathers();

app.use("/file", feathers.static("static"));
app.get("/version", function(req, res) {
    res.sendFile(__dirname + "/static/version.txt");
});
app.get("/md5/:filename", function(req, res) {
    md5File('./static/' + req.params.filename, function(error, sum) {
        if (error) {
            res.status(500).json(error);
        } else {
            res.send(sum);
        }
    });
});
app.listen(8000, function(){
    console.log("Listening");
});
//https://static-updater-wuyuanyi.c9users.io/version
//https://static-updater-wuyuanyi.c9users.io/file/update.zip