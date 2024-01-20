import express  from "express";
import { STUD } from "../models/studentModel.js"

const router = express.Router();

//update stud data
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.nume ||
      !req.body.prenume ||
      !req.body.facultate ||
      !req.body.specializare ||
      !req.body.grupa
    ) {
      return res.status(400).send({
        message: "Toate campurile trebuie completate",
      });
    }
    const newStud = {
      nume: req.body.nume,
      prenume: req.body.prenume,
      facultate: req.body.facultate,
      specializare: req.body.specializare,
      grupa: req.body.grupa,
    };
    const datestud = await STUD.create(newStud);

    return res.status(201).send(datestud);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//get stud data
router.get("/", async (req, res) => {
  try {
    const studs = await STUD.find({});
    return res.status(200).json({
      count:studs.length,
      data: studs,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//get stud by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const stud = await STUD.findById(id);
    return res.status(200).json(stud);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//update stud data
router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.nume ||
      !req.body.prenume ||
      !req.body.facultate ||
      !req.body.specializare ||
      !req.body.grupa
    ) {
      return res.status(400).send({
        message: "Trimite toate campurile necesare",
      });
    }

    const { id } = req.params;

    const result = await STUD.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res
        .status(404)
        .json({ message: "Studentul nu este in baza de date" });
    }

    return res
      .status(200)
      .send({ message: "Informatiile studentului actualizate cu succes" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await STUD.findByIdAndDelete(id);

    if (!result) {
      return res
        .status(404)
        .json({ message: "Studentul nu este in baza de date" });
    }

    return res
      .status(200)
      .send({ message: "Informatiile studentului au fost sterse cu succes" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;