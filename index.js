var feathers = require("feathers");

var app = feathers();

app.use("/file", feathers.static("static"));
app.use("/version", function(req, res) {
    res.sendFile(__dirname + "/static/version.txt");
});
app.listen(8080);
//https://static-updater-wuyuanyi.c9users.io/file/version.txt
//https://static-updater-wuyuanyi.c9users.io/file/update.zip