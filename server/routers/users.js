import express from "express";

const router = express.Router();

// GET http://localhost:5000/users
router.get("/", (req, res) => {
  res.status(200).send("Get users");
});

// POST http://localhost:5000/users
router.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send("Created a user");
});

export default router;
