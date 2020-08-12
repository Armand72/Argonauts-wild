const express = require("express");
const router = express.Router();
const Member = require("../models/Members");

router.get("/", async (req, res) => {
  try {
    const members = await Member.find();

    res.json(members);
  } catch (err) {}
});

router.post("/", async (req, res) => {
  try {
    const newMember = new Member({
      member: req.body.member,
    });
    const member = await newMember.save();
    res.json(member);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
