const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// post/add feedback
router.post("/", (req, res) => {
  const newFeedback = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      newFeedback.feeling,
      newFeedback.understanding,
      newFeedback.support,
      newFeedback.comments,
    ])
    .then((responseFromDb) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("POST ERROR: ", error);
      res.sendStatus(500);
    });
});

// get all feedbacks
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
  pool
    .query(queryText)
    .then((responseFromDb) => {
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("GET ERROR: ", error);
      res.sendStatus(500);
    });
});

// delete feedback
router.delete("/:id", (req, res) => {
  const feedbackId = req.params.id;
  const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
  pool
    .query(queryText, [feedbackId])
    .then((responseFromDb) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("DELETE ERROR: ", error);
      res.sendStatus(500);
    });
});

// put/flag feedback
router.put("/:id", (req, res) => {
  const feedbackId = req.params.id;
  const flaggedData = req.body;
  const queryText = `UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;`;
  pool
    .query(queryText, [flaggedData.flagged, feedbackId])
    .then((responseFromDb) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("PUT ERROR: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
