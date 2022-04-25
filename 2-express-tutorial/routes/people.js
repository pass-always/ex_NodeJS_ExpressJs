const express = require("express");
const router = express.Router();
// You have to have 2 dots in the path to root folder, or you will have "app crashed waiting for file changes before starting"
let { people } = require("../data");
let { getPeople } = require("../2-express-tutorial/controllers/people");

// router.get("/", getPeople);
// Multiple functions with same url, you can call by one line code such as post(createPerson)
router.route("/").get(getPeople);

// The url must match the function in html javascript.
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Input a valid value." });
  }
  res.status(201).send({ success: true, person: name });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// Not persisiting data, you delete other person, the previrous you deleted will come back.
router.delete("/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
