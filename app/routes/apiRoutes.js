module.exports = (app, db) => {
  app.get("/api/tweets", (req, res) => {
    db.Tweet.findAll({ order: [["updatedAt", "DESC"]] }).then(result => {
      res.json(result);
    });
  });

  app.put("/api/tweet/:id", (req, res) => {
    db.Tweet.update(
      {
        user: req.body.user
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(result => {
      res.json(result);
    });
  });

  app.post("/api/tweet", (req, res) => {
    db.Tweet.create({
      user: req.body.user,
      status: req.body.status
    }).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/tweet/:id", (req, res) => {
    db.Tweet.destroy({
      where: {
        user: req.body.user
      }
    }).then(result => {
      res.json(result);
    });
  });
};
