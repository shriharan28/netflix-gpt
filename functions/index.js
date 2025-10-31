/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */

const functions = require("firebase-functions");
const fetch = require("node-fetch");
const cors = require("cors")({ origin: true }); // ✅ correct CORS setup

exports.perplexityProxy = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const response = await fetch(
        "https://api.perplexity.ai/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${functions.config().perplexity.key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      );

      const data = await response.json();
      res.status(200).send(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({ error: "Request failed" });
    }
  });
});
