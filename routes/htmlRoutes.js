module.exports = function(app){


    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });
    app.get("/reservation", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
    });
    
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });

}

