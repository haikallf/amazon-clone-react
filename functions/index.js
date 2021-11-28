const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51JQfngLEK5wzqYonrsanK4uQPoGKrxG7jb5PGQn5wSf9WDcUq3PsOrNkYhj5tz3jGdYej3DkWPELIiOY7cOSD3Yg00g4kZzyVT"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Contoh endpoint
// http://localhost:5001/ecommerce-4845d/us-central1/api
