import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();
/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: req.shhhh_secret }); // response request
});

router.get("/product/:id", (req, res) => { });

router.post("/product", (req, res) => {

  // ... traitement
});

router.put("/product/:id", body('name').isString(), handleInputErrors, (req, res) => { });

router.delete("/product/:id", (req, res) => { });

/**
 * Update
 */

router.get("/update", (req, res) => {
  res.json({ message: "update" });
});

router.get("/update/:id", (req, res) => { });

router.post("/update", (req, res) => { });

router.put("/update/:id", (req, res) => { });

router.delete("/update/:id", (req, res) => { });

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => { });

router.get("/updatepoint/:id", (req, res) => { });

router.post("/updatepoint", (req, res) => { });

router.put("/updatepoint/:id", (req, res) => { });

router.delete("/updatepoint/:id", (req, res) => { });

export default router;