import express from "express";

const router = express.Router(); // Instancia que ajuda a controlar as rotas

// CREATE
router.post("/user", async () => {});

// READ
router.get("/user", async () => {});
router.get("/user/:userId", async () => {});

// UPDATE
router.put("/user/:userId", async () => {});

// DELETE
router.delete("/user/:userId", async () => {});

export { router };
