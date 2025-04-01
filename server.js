import express from "express";
import { createReservation, getReservations } from "./database.js";

const app = express();
app.use(express.json());

// ROUTES

app.post("/reservation", (req, res) => {
  createReservation(req.body, (error, result) => {
    if (error) {
      return res.status(500).json({ message: error });
    } else {
      res.status(201).json({ message: "Reservation successful", data: result });
    }
  });
});

// app.get('/reservation/:id', (req, res) => {
//     getReservations(req.params.id)
//     .then((result) => console.log(result))
//     .catch((error) => console.error("Oops", error));
//     });

app.get("/reservation/:id", async (req, res, next) => {
  try {
    const result = await getReservations(req.params.id);
    res.status(200).json({ message: "Reservation found for:", data: result });
  } catch (error) {
    // res.status(500).json({ message: error });
    next(error);
  }
});

// ERROR HANDLER

app.use((error, req, res, next) => {
  console.error("Express Error Handler:", error.message || error);
  if (error.message && error.message.includes("Database")) {
    res.status(500).json({ message: "Database has taken a holiday!" });
  } else {
    res.status(500).json({ message: "Something went wrong on the server!" });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
